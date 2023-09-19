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
  CheckBalanceBorrowLiquityProps,
  CheckBalanceRepayLiquityProps,
  ERROR_CODE,
  GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps,
  HandleBorrowLiquityManualProps,
  HandleBorrowLiquityProps,
  HandleRepayLiquityManualProps,
  HandleRepayLiquityProps,
} from '../config/types';
import { ErrorWrapper } from '../utils/errorWrapper';


export async function handleBorrowLiquity(this: NimboraSDK, props: HandleBorrowLiquityProps) {
  const { troveAddress, ethAmount, closeBatch = false, allowApprove = true, referral = "none" } = props;
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  if (!this.signer) throw new ErrorWrapper({ code: ERROR_CODE.PROVIDER_REQUIRED });
  if (ethAmount === BigInt(0)) throw new ErrorWrapper({ code: ERROR_CODE.AMOUNT_NUL });

  const getRequiredGasFeeToParticipateCurrrentBatchLiquityProps: GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
    troveAddress: troveAddress,
    userAddress: (this.provider as Account).address,
    closeBatch: closeBatch
  }
  const gasRequired = await this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)

  let checkBalanceBorrowLiquityProps: CheckBalanceBorrowLiquityProps = {
    troveAddress: troveAddress,
    userAddress: (this.provider as Account).address,
    ethAmount: ethAmount,
    gasRequired: gasRequired
  };

  let checkAllowanceBorrowLiquityProps: CheckAllowanceBorrowLiquityProps = {
    troveAddress: troveAddress,
    userAddress: (this.provider as Account).address,
    ethAmount: ethAmount,
    gasRequired: gasRequired
  };
  const [isEnoughEth, isEnoughAllowanceEth] = await Promise.all([
    this.checkBalanceBorrowLiquity(checkBalanceBorrowLiquityProps),
    this.checkAllowanceBorrowLiquity(checkAllowanceBorrowLiquityProps),
  ]);
  if (!isEnoughEth) throw new ErrorWrapper({ code: ERROR_CODE.NOT_ENOUGHT_ETH });

  let callsToExecute: Call[] = [];

  if (!isEnoughAllowanceEth) {
    if (!allowApprove) throw new ErrorWrapper({ code: ERROR_CODE.APPROVAL_REQUIRED });
    let buildCallDataApproveBorrowLiquityProps: BuildCallDataApproveBorrowLiquityProps = {
      troveAddress: troveAddress,
      ethAmount: ethAmount,
      gasRequired: gasRequired
    };
    let ethApproveCall = this.buildCallDataApproveBorrowLiquity(buildCallDataApproveBorrowLiquityProps);
    callsToExecute.push(ethApproveCall);
  }

  let buildCallDataBorrowLiquityProps: BuildCallDataBorrowLiquityProps = {
    troveAddress: troveAddress,
    ethAmount: ethAmount,
    gasRequired: gasRequired
  };

  let borrowCall = this.buildCallDataBorrowLiquity(buildCallDataBorrowLiquityProps);
  callsToExecute.push(borrowCall);

  try {
    const tx = await (this.provider as Account).execute(callsToExecute);
    return tx.transaction_hash;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_TRANSACTION, error: e });
  }
}

export async function handleBorrowLiquityManual(this: NimboraSDK, props: HandleBorrowLiquityManualProps) {
  const { troveAddress, ethAmount, gas, approveEth = true, referral = "none" } = props;
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  if (!this.signer) throw new ErrorWrapper({ code: ERROR_CODE.PROVIDER_REQUIRED });
  if (ethAmount === BigInt(0)) throw new ErrorWrapper({ code: ERROR_CODE.AMOUNT_NUL });
  let callsToExecute: Call[] = [];

  if (approveEth) {
    let buildCallDataApproveBorrowLiquityProps: BuildCallDataApproveBorrowLiquityProps = {
      troveAddress: troveAddress,
      ethAmount: ethAmount,
      gasRequired: gas
    };
    let ethApproveCall = this.buildCallDataApproveBorrowLiquity(buildCallDataApproveBorrowLiquityProps);
    callsToExecute.push(ethApproveCall);
  }
  let buildCallDataBorrowLiquityProps: BuildCallDataBorrowLiquityProps = {
    troveAddress: troveAddress,
    ethAmount: ethAmount,
    gasRequired: gas
  };
  let borrowCall = this.buildCallDataBorrowLiquity(buildCallDataBorrowLiquityProps);
  callsToExecute.push(borrowCall);

  try {
    const tx = await (this.provider as Account).execute(callsToExecute);
    return tx.transaction_hash;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_TRANSACTION, error: e });
  }
}


export async function handleRepayLiquity(this: NimboraSDK, props: HandleRepayLiquityProps) {
  const { troveAddress, lusdAmount, closeBatch = false, allowApprove = true, referral = "none" } = props;
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  if (!this.signer) throw new ErrorWrapper({ code: ERROR_CODE.PROVIDER_REQUIRED });
  if (lusdAmount === BigInt(0)) throw new ErrorWrapper({ code: ERROR_CODE.AMOUNT_NUL });


  const getRequiredGasFeeToParticipateCurrrentBatchLiquityProps: GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
    troveAddress: troveAddress,
    userAddress: (this.provider as Account).address,
    closeBatch: closeBatch
  }
  const gasRequired = await this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)

  let checkBalanceRepayLiquityProps: CheckBalanceRepayLiquityProps = {
    troveAddress: troveAddress,
    userAddress: (this.provider as Account).address,
    lusdAmount: lusdAmount,
    gasRequired: gasRequired
  };

  let checkAllowanceBorrowLiquityProps: CheckAllowanceRepayLiquityProps = {
    troveAddress: troveAddress,
    userAddress: (this.provider as Account).address,
    lusdAmount: lusdAmount,
    gasRequired: gasRequired
  };


  const [checkBalanceRepayLiquityRes, checkAllowanceRepayLiquityRes] = await Promise.all([
    this.checkBalanceRepayLiquity(checkBalanceRepayLiquityProps),
    this.checkAllowanceRepayLiquity(checkAllowanceBorrowLiquityProps),
  ]);


  if (!checkBalanceRepayLiquityRes.isEnoughEth) throw new ErrorWrapper({ code: ERROR_CODE.NOT_ENOUGHT_ETH });
  if (!checkBalanceRepayLiquityRes.isEnoughLusd) throw new ErrorWrapper({ code: ERROR_CODE.NOT_ENOUGHT_LUSD });

  let callsToExecute: Call[] = [];

  if (!checkAllowanceRepayLiquityRes.isEnoughAllowanceEth || !checkAllowanceRepayLiquityRes.isEnoughAllowanceLusd) {
    if (!allowApprove) throw new ErrorWrapper({ code: ERROR_CODE.APPROVAL_REQUIRED });
    let buildCallDataApproveRepayLiquityProps: BuildCallDataApproveRepayLiquityProps = {
      troveAddress: troveAddress,
      lusdAmount: lusdAmount,
      gasRequired: gasRequired,
      isEnoughAllowanceLusd: checkAllowanceRepayLiquityRes.isEnoughAllowanceLusd,
      isEnoughAllowanceEth: checkAllowanceRepayLiquityRes.isEnoughAllowanceEth
    };
    let buildCallDataApproveRepayLiquityRes: BuildCallDataApproveRepayLiquityRes = this.buildCallDataApproveRepayLiquity(buildCallDataApproveRepayLiquityProps);

    if (buildCallDataApproveRepayLiquityRes.ethApproveCall) {
      callsToExecute.push(buildCallDataApproveRepayLiquityRes.ethApproveCall);
    }
    if (buildCallDataApproveRepayLiquityRes.lusdApproveCall) {
      callsToExecute.push(buildCallDataApproveRepayLiquityRes.lusdApproveCall);
    }
  }

  let buildCallDataBorrowLiquityProps: BuildCallDataRepayLiquityProps = {
    troveAddress: troveAddress,
    lusdAmount: lusdAmount,
    gasRequired: gasRequired
  };

  let repayCall = this.buildCallDataRepayLiquity(buildCallDataBorrowLiquityProps);
  callsToExecute.push(repayCall);

  try {
    const tx = await (this.provider as Account).execute(callsToExecute);
    return tx.transaction_hash;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_TRANSACTION, error: e });
  }
}



export async function handleRepayLiquityManual(this: NimboraSDK, props: HandleRepayLiquityManualProps) {
  const { troveAddress, lusdAmount, gas, approveLusd = true, approveEth = true, referral = "none" } = props;
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  if (!this.signer) throw new ErrorWrapper({ code: ERROR_CODE.PROVIDER_REQUIRED });
  if (lusdAmount === BigInt(0)) throw new ErrorWrapper({ code: ERROR_CODE.AMOUNT_NUL });

  let callsToExecute: Call[] = [];
  if (approveLusd || approveEth) {
    let buildCallDataApproveRepayLiquityProps: BuildCallDataApproveRepayLiquityProps = {
      troveAddress: troveAddress,
      lusdAmount: lusdAmount,
      gasRequired: gas,
      isEnoughAllowanceLusd: !approveLusd,
      isEnoughAllowanceEth: !approveEth
    };
    let buildCallDataApproveRepayLiquityRes: BuildCallDataApproveRepayLiquityRes = this.buildCallDataApproveRepayLiquity(buildCallDataApproveRepayLiquityProps);
    if (buildCallDataApproveRepayLiquityRes.ethApproveCall) {
      callsToExecute.push(buildCallDataApproveRepayLiquityRes.ethApproveCall);
    }
    if (buildCallDataApproveRepayLiquityRes.lusdApproveCall) {
      callsToExecute.push(buildCallDataApproveRepayLiquityRes.lusdApproveCall);
    }
  }
  let buildCallDataBorrowLiquityProps: BuildCallDataRepayLiquityProps = {
    troveAddress: troveAddress,
    lusdAmount: lusdAmount,
    gasRequired: gas
  };

  let repayCall = this.buildCallDataRepayLiquity(buildCallDataBorrowLiquityProps);
  callsToExecute.push(repayCall);
  try {
    const tx = await (this.provider as Account).execute(callsToExecute);
    return tx.transaction_hash;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_TRANSACTION, error: e });
  }
}
