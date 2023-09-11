import { Account, Call } from 'starknet';
import { StarkGateSDK } from '@/.';
import {
  BuildCallDataApproveFwProps,
  BuildCallDataDepositFwProps,
  CheckAllowanceFwProps,
  CheckAllowanceFwRes,
  CheckBalanceFwProps,
  CheckBalanceFwRes,
  CheckLimitFwProps,
  CheckLimitFwRes,
  ERROR_CODE,
  RequestWithdrawalProps,
} from '@/config/types';
import { ErrorWrapper } from '@/utils/errorWrapper';
import { isValidEthereumAddress } from '@/utils/utils';
import { isSupportedToken } from '@/config/addresses';

/**
 * Function: executeFastWithdrawal
 * Description: Facilitates the interaction with the fast bridge to send funds across chains.
 *
 * @param props - Object containing withdrawal request properties:
 *   - token: The address of the token to be withdrawn.
 *   - amount: The amount of tokens to withdraw.
 *   - l1Recipient: The recipient's Ethereum address on the Layer 1 chain.
 *   - allowApprove: (Optional) A boolean flag indicating whether token approval is allowed.
 *   - referral: (Optional) Referral information.
 *
 * @throws {Error} - Various error codes may be thrown if the operation encounters issues:
 *   - ERROR_CODE.PROVIDER_REQUIRED: Provider is not set.
 *   - ERROR_CODE.AMOUNT_NUL: Withdrawal amount is zero.
 *   - ERROR_CODE.NOT_SUPPORTED_TOKEN: The specified token is not supported.
 *   - ERROR_CODE.INVALID_ETHEREUM_ADDRESS: The Layer 1 recipient address is invalid.
 *   - ERROR_CODE.NOT_ENOUGH_TOKEN: Insufficient token balance.
 *   - ERROR_CODE.NOT_ENOUGH_ETH: Insufficient Ethereum balance.
 *   - ERROR_CODE.AMOUNT_TOO_LOW_LIMIT: The withdrawal amount is below the defined threshold.
 *   - ERROR_CODE.AMOUNT_TOO_HIGH_LIMIT: The withdrawal amount exceeds the defined threshold.
 *   - ERROR_CODE.APPROVAL_REQUIRED: Token approval is required, but not allowed.
 *   - ERROR_CODE.CANNOT_EXECUTE_TRANSACTION: An error occurred while executing the transaction.
 *
 * @returns - The transaction object representing the executed withdrawal.
 */
export async function executeFastWithdrawal(this: StarkGateSDK, props: RequestWithdrawalProps) {
  const { token, amount, l1Recipient, allowApprove = true, referral = "none" } = props;

  if (!this.signer) throw new ErrorWrapper({ code: ERROR_CODE.PROVIDER_REQUIRED });
  if (amount === BigInt(0)) throw new ErrorWrapper({ code: ERROR_CODE.AMOUNT_NUL });
  if (!isSupportedToken(this.chainId, token)) throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TOKEN });
  if (!isValidEthereumAddress(l1Recipient)) throw new ErrorWrapper({ code: ERROR_CODE.INVALID_ETHEREUM_ADDRESS });

  let checkBalanceFwProps: CheckBalanceFwProps = {
    tokenAddress: token,
    userAddress: (this.provider as Account).address,
    desiredAmount: amount,
  };

  let checkBalanceFwRes: CheckBalanceFwRes = await this.checkBalanceFw(checkBalanceFwProps);

  if (!checkBalanceFwRes.isEnoughtToken) throw new ErrorWrapper({ code: ERROR_CODE.NOT_ENOUGHT_TOKEN });
  if (!checkBalanceFwRes.isEnoughtEth) throw new ErrorWrapper({ code: ERROR_CODE.NOT_ENOUGHT_ETH });

  let checkLimitFwProps: CheckLimitFwProps = {
    tokenAddress: token,
    desiredAmount: amount,
  };

  let checkLimitFwRes: CheckLimitFwRes = await this.checkLimitsFw(checkLimitFwProps);

  if (!checkLimitFwRes.isLowThresholdReached) throw new ErrorWrapper({ code: ERROR_CODE.AMOUNT_TO_LOW_LIMIT });
  if (!checkLimitFwRes.isHighThresholdReached) throw new ErrorWrapper({ code: ERROR_CODE.AMOUNT_TO_HIGH_LIMIT });

  let callsToExecute: Call[] = [];

  let checkAllowanceFwProps: CheckAllowanceFwProps = {
    tokenAddress: token,
    userAddress: (this.provider as Account).address,
    desiredAmount: amount,
  };

  let checkAllowanceFwRes: CheckAllowanceFwRes = await this.checkAllowanceFw(checkAllowanceFwProps);

  if (!checkAllowanceFwRes.isEnoughtAllowanceToken || !checkAllowanceFwRes.isEnoughtAllowanceEth) {
    if (!allowApprove) throw new ErrorWrapper({ code: ERROR_CODE.APPROVAL_REQUIRED });
    let buildCallDataApproveFwProps: BuildCallDataApproveFwProps = {
      tokenAddress: token,
      userAddress: (this.provider as Account).address,
      desiredAmount: amount,
      isEnoughtAllowanceToken: checkAllowanceFwRes.isEnoughtAllowanceToken,
      isEnoughtAllowanceEth: checkAllowanceFwRes.isEnoughtAllowanceEth,
    };
    let buildCallDataApproveFwRes = await this.buildCallDataApproveFw(buildCallDataApproveFwProps);
    callsToExecute.push(buildCallDataApproveFwRes.tokenApproveCall);
    if (buildCallDataApproveFwRes.ethApproveCall) {
      callsToExecute.push(buildCallDataApproveFwRes.tokenApproveCall);
    }
  }

  let buildCallDataApproveFwProps: BuildCallDataDepositFwProps = {
    tokenAddress: token,
    l1Recipient: l1Recipient,
    desiredAmount: amount,
  };

  let depositCall = await this.buildCallDataDepositFw(buildCallDataApproveFwProps);
  callsToExecute.push(depositCall);

  try {
    const tx = await (this.provider as Account).execute(depositCall);
    return tx;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_TRANSACTION, error: e });
  }
}
