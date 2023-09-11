import { StarkGateSDK } from "..";
import { CheckAllowanceFwProps, CheckAllowanceFwRes, CheckBalanceFwProps, CheckBalanceFwRes, CheckLimitFwProps, CheckLimitFwRes, GetAllowanceFwProps, GetBalanceProps } from "../config/types";

/**
 * Function: checkBalanceFw
 * Description: Checks whether a user has enough tokens and Ether for a fast withdrawal operation.
 *
 * @param {CheckBalanceFwProps} props - Object containing balance check properties:
 *   - tokenAddress: The address of the token to check balance for.
 *   - userAddress: The user's Starknet address.
 *   - desiredAmount: The desired withdrawal amount.
 *
 * @returns {CheckBalanceFwRes} - An object indicating whether there is enough token and Ether balance for the operation.
 */
export async function checkBalanceFw(this: StarkGateSDK, props: CheckBalanceFwProps): Promise<CheckBalanceFwRes> {
    const { tokenAddress, userAddress, desiredAmount } = props
    const ethAddress: string = this.getEthContract().address
    let isEnoughtToken: boolean = true;
    let isEnoughtEth: boolean = true
    const ethRequired = await this.getGasCostFw(tokenAddress)

    let tokenBalanceFwProps: GetBalanceProps = {
        tokenAddress: tokenAddress,
        userAddress: userAddress
    }
    const userTokenBalance = await this.getBalance(tokenBalanceFwProps)

    if (tokenAddress == ethAddress ? userTokenBalance < desiredAmount + ethRequired : userTokenBalance < desiredAmount) {
        isEnoughtToken = false;
    }

    let ethBalanceFwProps: GetBalanceProps = {
        tokenAddress: ethAddress,
        userAddress: userAddress
    }
    const userEthBalance = await this.getBalance(ethBalanceFwProps)

    if (userEthBalance < desiredAmount) {
        isEnoughtEth = false;
    }
    const checkBalanceFwRes: CheckBalanceFwRes = {
        isEnoughtToken: isEnoughtToken,
        isEnoughtEth: isEnoughtEth
    }
    return checkBalanceFwRes
}


/**
 * Function: checkAllowanceFw
 * Description: Checks whether a user has enough token and Ether allowances for a fast withdrawal operation.
 *
 * @param {CheckAllowanceFwProps} props - Object containing allowance check properties:
 *   - tokenAddress: The address of the token to check allowance for.
 *   - userAddress: The user's Starknet address.
 *   - desiredAmount: The desired withdrawal amount.
 *
 * @returns {CheckAllowanceFwRes} - An object indicating whether there is enough token and Ether allowance for the operation.
 */
export async function checkAllowanceFw(this: StarkGateSDK, props: CheckAllowanceFwProps): Promise<CheckAllowanceFwRes> {
    const { tokenAddress, userAddress, desiredAmount } = props
    const ethAddress: string = this.getEthContract().address
    let isEnoughtAllowanceToken: boolean = true;
    let isEnoughtAllowanceEth: boolean = true;
    const ethRequired = await this.getGasCostFw(tokenAddress)

    let tokenAllowanceFwProps: GetAllowanceFwProps = {
        tokenAddress: tokenAddress,
        userAddress: userAddress
    }

    const userTokenAllowance = await this.getAllowanceFw(tokenAllowanceFwProps)

    if (tokenAddress == ethAddress ? userTokenAllowance < desiredAmount + ethRequired : userTokenAllowance < desiredAmount) {
        isEnoughtAllowanceToken = false;
    }

    let ethAllowanceFwProps: GetAllowanceFwProps = {
        tokenAddress: ethAddress,
        userAddress: userAddress
    }
    const userEthAllowance = await this.getAllowanceFw(ethAllowanceFwProps)
    if (userEthAllowance < ethRequired) {
        isEnoughtAllowanceEth = false;
    }


    const checkAllowanceFwRes: CheckAllowanceFwRes = {
        isEnoughtAllowanceToken: isEnoughtAllowanceToken,
        isEnoughtAllowanceEth: isEnoughtAllowanceEth
    }

    return checkAllowanceFwRes
}


/**
 * Function: checkLimitsFw
 * Description: Checks whether the desired withdrawal amount falls within the deposit limits for a token.
 *
 * @param {CheckLimitFwProps} props - Object containing limit check properties:
 *   - tokenAddress: The address of the token to check limits for.
 *   - desiredAmount: The desired withdrawal amount.
 *
 * @returns {CheckLimitFwRes} - An object indicating whether the desired amount is within the deposit limits.
 */
export async function checkLimitsFw(this: StarkGateSDK, props: CheckLimitFwProps): Promise<CheckLimitFwRes> {
    const { tokenAddress, desiredAmount } = props
    const limits = await this.getLimitsFw(tokenAddress)
    let isLowThresholdReached = false;
    if (limits.limitLow > desiredAmount) {
        isLowThresholdReached = true
    }
    let isHighThresholdReached = false;
    if (limits.limitHigh < desiredAmount) {
        isHighThresholdReached = true
    }
    let checkLimitFwRes: CheckLimitFwRes = {
        isLowThresholdReached: isLowThresholdReached,
        isHighThresholdReached: isHighThresholdReached
    }
    return checkLimitFwRes
}

