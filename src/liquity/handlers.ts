import { Account, Call } from 'starknet';
import { NimboraSDK } from '../.';
import {
  BuildCallDataApproveBorrowLiquityProps,
  BuildCallDataApproveRepayLiquityProps,
  BuildCallDataApproveRepayLiquityRes,
  BuildCallDataBorrowLiquityProps,
  BuildCallDataRepayLiquityProps,
  CheckAllowanceBorrowLiquityProps,
  CheckAllowanceRepayLiquityProps,
  CheckAllowanceRepayLiquityRes,
  CheckBalanceBorrowLiquityProps,
  CheckBalanceRepayLiquityProps,
  CheckBalanceRepayLiquityRes,
  ERROR_CODE,
  handleBorrowLiquityProps,
  handleRepayLiquityProps,
} from '../config/types';
import { ErrorWrapper } from '../utils/errorWrapper';


export async function handleBorrowLiquity(this: NimboraSDK, props: handleBorrowLiquityProps) {
  const { troveAddress, ethAmount, closeBatch = false, allowApprove = true, referral = "none" } = props;
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  if (!this.signer) throw new ErrorWrapper({ code: ERROR_CODE.PROVIDER_REQUIRED });
  if (ethAmount === BigInt(0)) throw new ErrorWrapper({ code: ERROR_CODE.AMOUNT_NUL });

  let checkBalanceBorrowLiquityProps: CheckBalanceBorrowLiquityProps = {
    troveAddress: troveAddress,
    userAddress: (this.provider as Account).address,
    ethAmount: ethAmount,
    closeBatch: closeBatch
  };

  let isEnoughEth: boolean = await this.checkBalanceBorrowLiquity(checkBalanceBorrowLiquityProps);
  if (!isEnoughEth) throw new ErrorWrapper({ code: ERROR_CODE.NOT_ENOUGHT_ETH });

  let callsToExecute: Call[] = [];

  let checkAllowanceBorrowLiquityProps: CheckAllowanceBorrowLiquityProps = {
    troveAddress: troveAddress,
    userAddress: (this.provider as Account).address,
    ethAmount: ethAmount,
    closeBatch: closeBatch
  };

  let isEnoughAllowanceEth = await this.checkAllowanceBorrowLiquity(checkAllowanceBorrowLiquityProps);

  if (!isEnoughAllowanceEth) {
    if (!allowApprove) throw new ErrorWrapper({ code: ERROR_CODE.APPROVAL_REQUIRED });
    let buildCallDataApproveBorrowLiquityProps: BuildCallDataApproveBorrowLiquityProps = {
      troveAddress: troveAddress,
      userAddress: (this.provider as Account).address,
      ethAmount: ethAmount,
      closeBatch: closeBatch
    };
    let ethApproveCall = await this.buildCallDataApproveBorrowLiquity(buildCallDataApproveBorrowLiquityProps);
    callsToExecute.push(ethApproveCall);
  }

  let buildCallDataBorrowLiquityProps: BuildCallDataBorrowLiquityProps = {
    troveAddress: troveAddress,
    userAddress: (this.provider as Account).address,
    ethAmount: ethAmount,
    closeBatch: closeBatch
  };

  let borrowCall = await this.buildCallDataBorrowLiquity(buildCallDataBorrowLiquityProps);
  callsToExecute.push(borrowCall);

  try {
    const tx = await (this.provider as Account).execute(callsToExecute);
    return tx.transaction_hash;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_TRANSACTION, error: e });
  }
}


export async function handleRepayLiquity(this: NimboraSDK, props: handleRepayLiquityProps) {
  const { troveAddress, lusdAmount, closeBatch = false, allowApprove = true, referral = "none" } = props;
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  if (!this.signer) throw new ErrorWrapper({ code: ERROR_CODE.PROVIDER_REQUIRED });
  if (lusdAmount === BigInt(0)) throw new ErrorWrapper({ code: ERROR_CODE.AMOUNT_NUL });

  let checkBalanceRepayLiquityProps: CheckBalanceRepayLiquityProps = {
    troveAddress: troveAddress,
    userAddress: (this.provider as Account).address,
    lusdAmount: lusdAmount,
    closeBatch: closeBatch
  };

  let checkBalanceRepayLiquityRes: CheckBalanceRepayLiquityRes = await this.checkBalanceRepayLiquity(checkBalanceRepayLiquityProps);
  if (!checkBalanceRepayLiquityRes.isEnoughEth) throw new ErrorWrapper({ code: ERROR_CODE.NOT_ENOUGHT_ETH });
  if (!checkBalanceRepayLiquityRes.isEnoughLusd) throw new ErrorWrapper({ code: ERROR_CODE.NOT_ENOUGHT_LUSD });

  let callsToExecute: Call[] = [];

  let checkAllowanceBorrowLiquityProps: CheckAllowanceRepayLiquityProps = {
    troveAddress: troveAddress,
    userAddress: (this.provider as Account).address,
    lusdAmount: lusdAmount,
    closeBatch: closeBatch
  };

  let checkAllowanceRepayLiquityRes: CheckAllowanceRepayLiquityRes = await this.checkAllowanceRepayLiquity(checkAllowanceBorrowLiquityProps);

  if (!checkAllowanceRepayLiquityRes.isEnoughAllowanceEth || !checkAllowanceRepayLiquityRes.isEnoughAllowanceLusd) {
    if (!allowApprove) throw new ErrorWrapper({ code: ERROR_CODE.APPROVAL_REQUIRED });
    let buildCallDataApproveRepayLiquityProps: BuildCallDataApproveRepayLiquityProps = {
      troveAddress: troveAddress,
      userAddress: (this.provider as Account).address,
      lusdAmount: lusdAmount,
      closeBatch: closeBatch,
      isEnoughtAllowanceLusd: checkAllowanceRepayLiquityRes.isEnoughAllowanceLusd,
      isEnoughtAllowanceEth: checkAllowanceRepayLiquityRes.isEnoughAllowanceEth
    };
    let buildCallDataApproveRepayLiquityRes: BuildCallDataApproveRepayLiquityRes = await this.buildCallDataApproveRepayLiquity(buildCallDataApproveRepayLiquityProps);

    if (buildCallDataApproveRepayLiquityRes.ethApproveCall) {
      callsToExecute.push(buildCallDataApproveRepayLiquityRes.ethApproveCall);
    }
    if (buildCallDataApproveRepayLiquityRes.lusdApproveCall) {
      callsToExecute.push(buildCallDataApproveRepayLiquityRes.lusdApproveCall);
    }
  }

  let buildCallDataBorrowLiquityProps: BuildCallDataRepayLiquityProps = {
    troveAddress: troveAddress,
    userAddress: (this.provider as Account).address,
    lusdAmount: lusdAmount,
    closeBatch: closeBatch
  };

  let repayCall = await this.buildCallDataRepayLiquity(buildCallDataBorrowLiquityProps);
  callsToExecute.push(repayCall);

  try {
    const tx = await (this.provider as Account).execute(callsToExecute);
    return tx.transaction_hash;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_TRANSACTION, error: e });
  }
}
