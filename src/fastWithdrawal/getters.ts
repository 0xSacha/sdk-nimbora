import { StarkGateSDK } from "..";
import { BRIDGE_DELAY_TIMESTAMP, FEES_PRECISION } from "../config/constant";
import { ERROR_CODE, GetAllowanceFwProps, GetBalanceProps, GetLimitRes, QuoteFwRes, QuoteFwResProps } from "../config/types";
import { ErrorWrapper } from '../utils/errorWrapper';
import { uint256 } from "starknet";

/**
 * Function: getAllowanceFw
 * Description: Retrieves the allowance of tokens approved for the fast withdrawal contract.
 *
 * @param {GetAllowanceFwProps} props - Object containing allowance retrieval properties:
 *   - tokenAddress: The address of the token to check allowance for.
 *   - userAddress: The user's Starknet address.
 *
 * @throws {Error} - Throws an error with the following code if the call execution fails:
 *   - ERROR_CODE.CANNOT_EXECUTE_CALL: Unable to execute the call to retrieve allowance.
 *
 * @returns {bigint} - The amount of tokens approved as a bigint.
 */
export async function getAllowanceFw(this: StarkGateSDK, props: GetAllowanceFwProps): Promise<bigint> {
  const { tokenAddress, userAddress } = props
  const tokenContract = this.getTokenContract(tokenAddress)
  const fastWithdrawalAddress = this.getFastWithdrawalContract().address

  try {
    const allowance = await tokenContract.allowance(userAddress, fastWithdrawalAddress);
    const allowanceBn = uint256.uint256ToBN(allowance.allowance)
    return allowanceBn;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}


/**
 * Function: getBalance
 * Description: Retrieves the token balance of a user
 *
 * @param {GetBalanceProps} props - Object containing balance retrieval properties:
 *   - tokenAddress: The address of the token to check balance for.
 *   - userAddress: The user's Starknet address.
 *
 * @throws {Error} - Throws an error with the following code if the call execution fails:
 *   - ERROR_CODE.CANNOT_EXECUTE_CALL: Unable to execute the call to retrieve balance.
 *
 * @returns {bigint} - The user's token balance as a bigint.
 */
export async function getBalance(this: StarkGateSDK, props: GetBalanceProps): Promise<bigint> {
  const { tokenAddress, userAddress } = props
  const tokenContract = this.getTokenContract(tokenAddress)
  try {
    const balance = await tokenContract.balanceOf(userAddress);
    const balanceBn = uint256.uint256ToBN(balance.balance)
    return balanceBn;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}

/**
 * Function: getGasCostFw
 * Description: Retrieves the gas cost associated with a token for the fast withdrawal mechanism.
 *
 * @param {string} tokenAddress - The address of the token to get the gas cost for.
 *
 * @throws {Error} - Throws an error with the following code if the call execution fails:
 *   - ERROR_CODE.CANNOT_EXECUTE_CALL: Unable to execute the call to retrieve gas cost.
 *
 * @returns {bigint} - The gas cost associated with the specified token as a bigint.
 */
export async function getGasCostFw(this: StarkGateSDK, tokenAddress: string): Promise<bigint> {
  const fastWithdrawalContract = this.getFastWithdrawalContract()
  try {
    const gasCost = await fastWithdrawalContract.get_gas_fee(tokenAddress);
    const gasCostBn = uint256.uint256ToBN(gasCost.gasCost)
    return gasCostBn
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}

/**
 * Function: getLimitsFw
 * Description: Retrieves the deposit limits for a token using the fast withdrawal mechanism.
 *
 * @param {string} tokenAddress - The address of the token to get deposit limits for.
 *
 * @throws {Error} - Throws an error with the following code if the call execution fails:
 *   - ERROR_CODE.CANNOT_EXECUTE_CALL: Unable to execute the call to retrieve deposit limits.
 *
 * @returns {GetLimitRes} - An object containing the low and high deposit limits as bigints.
 */
export async function getLimitsFw(this: StarkGateSDK, tokenAddress: string): Promise<GetLimitRes> {
  const fastWithdrawalContract = this.getFastWithdrawalContract()
  try {
    const tokenInfo = await fastWithdrawalContract.get_token_info_or_revert(tokenAddress);
    const limitLow = uint256.uint256ToBN(tokenInfo.min_deposit)
    const limitHigh = uint256.uint256ToBN(tokenInfo.max_deposit)
    const getLimitRes: GetLimitRes = {
      limitLow: limitLow,
      limitHigh: limitHigh
    }
    return getLimitRes
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}

/**
 * Function: getFeesFw
 * Description: Retrieves the fees associated with the fast withdrawal mechanism.
 *
 * @throws {Error} - Throws an error with the following code if the call execution fails:
 *   - ERROR_CODE.CANNOT_EXECUTE_CALL: Unable to execute the call to retrieve fees.
 *
 * @returns {bigint} - The fees associated with the fast withdrawal mechanism as a bigint.
 */
export async function getFeesFw(this: StarkGateSDK): Promise<bigint> {
  const fastWithdrawalContract = this.getFastWithdrawalContract()
  try {
    const fees = await fastWithdrawalContract.get_fees();
    const feesBn = uint256.uint256ToBN(fees.fees)
    return feesBn
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}

/**
 * Function: getRefundDelayFw
 * Description: Retrieves the refund delay timestamp from the fast withdrawal contract.
 *
 * @throws {Error} - Throws an error with the following code if the call execution fails:
 *   - ERROR_CODE.CANNOT_EXECUTE_CALL: Unable to execute the call to retrieve the refund delay.
 *
 * @returns {bigint} - The refund delay timestamp as a bigint.
 */
export async function getRefundDelayFw(this: StarkGateSDK): Promise<bigint> {
  const fastWithdrawalContract = this.getFastWithdrawalContract()
  try {
    const delay = await fastWithdrawalContract.get_min_ts_refund();
    return delay.delay
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}

/**
 * Function: quoteFw
 * Description: Generates a quote for a fast withdrawal operation, including gas cost and receive amount.
 *
 * @param {QuoteFwResProps} props - Object containing quote request properties:
 *   - tokenAddress: The address of the token for the fast withdrawal.
 *   - desiredAmount: The desired withdrawal amount.
 *
 * @returns {QuoteFwRes} - An object containing the gas cost, receive amount, bridge delay, and refund delay.
 */
export async function quoteFw(this: StarkGateSDK, props: QuoteFwResProps): Promise<QuoteFwRes> {
  const { tokenAddress, desiredAmount } = props
  const gasCost = await this.getGasCostFw(tokenAddress)
  const fees = await this.getFeesFw()

  const refundDelay = await this.getRefundDelayFw()

  const quoteFwRes: QuoteFwRes = {
    gasCost: gasCost,
    receiveAmount: (desiredAmount * fees) / FEES_PRECISION,
    bridgeDelay: BRIDGE_DELAY_TIMESTAMP,
    refundDelay: Number(refundDelay)
  }
  return (quoteFwRes)
}



