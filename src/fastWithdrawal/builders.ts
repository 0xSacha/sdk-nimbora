import { StarkGateSDK } from "..";
import { ERROR_CODE, BuildCallDataApproveFwProps, BuildCallDataDepositFwProps, BuildCallDataApproveFwRes } from "@/config/types";
import { ErrorWrapper } from '@/utils/errorWrapper';
import { Call, Uint256, uint256 } from "starknet";


/**
 * Function: buildCallDataApproveFw
 * Description: Builds call data for approving token and potentialy gas if token not eth
 *
 * @param {BuildCallDataApproveFwProps} props - Object containing approval request properties:
 *   - tokenAddress: The address of the token to approve (could be Ether).
 *   - userAddress: The user's Starknet address.
 *   - desiredAmount: The desired approval amount.
 *   - isEnoughtAllowanceToken: (Optional) A boolean indicating whether token allowance is sufficient.
 *   - isEnoughtAllowanceEth: (Optional) A boolean indicating whether Ether allowance is sufficient.
 *
 * @throws {Error} - Throws an error with the following code if approval conditions are not met:
 *   - ERROR_CODE.NOTHING_TO_APPROVE: Nothing to approve; allowance is already sufficient.
 *
 * @returns {BuildCallDataApproveFwRes} - An object containing the token and Ether approval calls.
 */
export async function buildCallDataApproveFw(this: StarkGateSDK, props: BuildCallDataApproveFwProps): Promise<BuildCallDataApproveFwRes> {
    const { tokenAddress, userAddress, desiredAmount, isEnoughtAllowanceToken = false, isEnoughtAllowanceEth = false } = props

    let tokenApproveCall: Call;
    let ethApproveCall: Call | undefined;

    const ethAddress: string = this.getEthContract().address
    const fastWithdrawalAddress: string = this.getFastWithdrawalContract().address

    const gasCostFw = await this.getGasCostFw(tokenAddress)
    if (tokenAddress == ethAddress) {
        const desiredAmountUint256: Uint256 = uint256.bnToUint256(desiredAmount + gasCostFw)
        if (!isEnoughtAllowanceToken) throw new ErrorWrapper({ code: ERROR_CODE.NOTHING_TO_APPROVE });
        tokenApproveCall = {
            contractAddress: tokenAddress,
            entrypoint: "approve",
            calldata: [
                userAddress,
                fastWithdrawalAddress,
                desiredAmountUint256.low,
                desiredAmountUint256.high
            ]
        }
    } else {
        const desiredAmountUint256: Uint256 = uint256.bnToUint256(desiredAmount)
        const gasCostFwUint256: Uint256 = uint256.bnToUint256(gasCostFw)
        if (!isEnoughtAllowanceToken && !isEnoughtAllowanceEth) throw new ErrorWrapper({ code: ERROR_CODE.NOTHING_TO_APPROVE });
        tokenApproveCall = {
            contractAddress: tokenAddress,
            entrypoint: "approve",
            calldata: [
                userAddress,
                fastWithdrawalAddress,
                desiredAmountUint256.low,
                desiredAmountUint256.high
            ]
        }

        ethApproveCall = {
            contractAddress: ethAddress,
            entrypoint: "approve",
            calldata: [
                userAddress,
                fastWithdrawalAddress,
                gasCostFwUint256.low,
                gasCostFwUint256.high
            ]
        }
    }
    const buildCallDataApproveFwRes: BuildCallDataApproveFwRes = {
        tokenApproveCall: tokenApproveCall,
        ethApproveCall: ethApproveCall
    }
    return (buildCallDataApproveFwRes)
}




/**
 * Function: buildCallDataDepositFw
 * Description: Builds call data for depositing tokens on the Layer 2 chain using the fast withdrawal mechanism.
 *
 * @param {BuildCallDataDepositFwProps} props - Object containing deposit request properties:
 *   - tokenAddress: The address of the token to deposit.
 *   - desiredAmount: The amount of tokens to deposit.
 *   - l1Recipient: The recipient's Ethereum address on the Layer 1 chain.
 *
 * @returns {Call} - A call object representing the deposit transaction.
 */
export async function buildCallDataDepositFw(this: StarkGateSDK, props: BuildCallDataDepositFwProps): Promise<Call> {
    const { tokenAddress, desiredAmount, l1Recipient } = props
    const fastWithdrawalAddress: string = this.getFastWithdrawalContract().address
    const desiredAmountUint256: Uint256 = uint256.bnToUint256(desiredAmount)
    const depositTokenCall: Call = {
        contractAddress: fastWithdrawalAddress,
        entrypoint: "deposit",
        calldata: [
            tokenAddress,
            desiredAmountUint256.low,
            desiredAmountUint256.high,
            l1Recipient
        ]
    }
    return (depositTokenCall)
}

