import { getEthAddress, getLusdAddress } from "../config/addresses";
import { NimboraSDK } from "..";
import { ERROR_CODE, GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps, BuildCallDataApproveRepayLiquityProps, BuildCallDataApproveBorrowLiquityProps, BuildCallDataApproveRepayLiquityRes, BuildCallDataBorrowLiquityProps, BuildCallDataRepayLiquityProps } from "../config/types";
import { ErrorWrapper } from '../utils/errorWrapper';
import { Call, Uint256, uint256 } from "starknet";



export async function buildCallDataApproveBorrowLiquity(this: NimboraSDK, props: BuildCallDataApproveBorrowLiquityProps): Promise<Call> {
    const { troveAddress, userAddress, ethAmount, closeBatch } = props
    if (!this.checkTrove(troveAddress)) {
        throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    const ethAddress = getEthAddress(this.chainId)
    const getRequiredGasFeeToParticipateCurrrentBatchLiquityProps: GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
        troveAddress: troveAddress,
        userAddress: userAddress,
        closeBatch: closeBatch
    }
    const gasFeeToParticipateCurrrentBatch = await this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)
    // const desiredAmountUint256: Uint256 = uint256.bnToUint256(gasFeeToParticipateCurrrentBatch + ethAmount)
    const tokenApproveCall: Call = {
        contractAddress: ethAddress,
        entrypoint: "approve",
        calldata: [
            userAddress,
            troveAddress,
            (gasFeeToParticipateCurrrentBatch + ethAmount).toString()
        ]
    }
    return (tokenApproveCall)
}


export async function buildCallDataApproveRepayLiquity(this: NimboraSDK, props: BuildCallDataApproveRepayLiquityProps): Promise<BuildCallDataApproveRepayLiquityRes> {
    const { troveAddress, userAddress, lusdAmount, closeBatch, isEnoughtAllowanceLusd = false, isEnoughtAllowanceEth = false } = props
    if (!this.checkTrove(troveAddress)) {
        throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    if (isEnoughtAllowanceLusd && isEnoughtAllowanceEth) throw new ErrorWrapper({ code: ERROR_CODE.NOTHING_TO_APPROVE });

    const ethAddress = getEthAddress(this.chainId)
    const lusdAddress = getLusdAddress(this.chainId)

    // const lusdAmountUint256: Uint256 = uint256.bnToUint256(lusdAmount)
    let lusdApproveCall: Call | undefined;
    if (!isEnoughtAllowanceLusd) {
        lusdApproveCall = {
            contractAddress: lusdAddress,
            entrypoint: "approve",
            calldata: [
                userAddress,
                troveAddress,
                lusdAmount.toString()
            ]
        }
    }

    const getRequiredGasFeeToParticipateCurrrentBatchLiquityProps: GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
        troveAddress: troveAddress,
        userAddress: userAddress,
        closeBatch: closeBatch
    }
    const gasFeeToParticipateCurrrentBatch = await this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)
    // const gasFeeToParticipateCurrrentBatchUint256: Uint256 = uint256.bnToUint256(gasFeeToParticipateCurrrentBatch)

    let ethApproveCall: Call | undefined;
    if (!isEnoughtAllowanceEth) {
        ethApproveCall = {
            contractAddress: ethAddress,
            entrypoint: "approve",
            calldata: [
                userAddress,
                troveAddress,
                gasFeeToParticipateCurrrentBatch.toString()
            ]
        }
    }

    const buildCallDataApproveRepayLiquityRes: BuildCallDataApproveRepayLiquityRes = {
        lusdApproveCall: lusdApproveCall,
        ethApproveCall: ethApproveCall
    }

    return (buildCallDataApproveRepayLiquityRes)
}



export async function buildCallDataBorrowLiquity(this: NimboraSDK, props: BuildCallDataBorrowLiquityProps): Promise<Call> {
    const { troveAddress, userAddress, ethAmount, closeBatch } = props
    if (!this.checkTrove(troveAddress)) {
        throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    // const ethAmountUint256: Uint256 = uint256.bnToUint256(ethAmount)
    const getRequiredGasFeeToParticipateCurrrentBatchLiquityProps: GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
        troveAddress: troveAddress,
        userAddress: userAddress,
        closeBatch: closeBatch
    }
    const gasFeeToParticipateCurrrentBatch = await this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)
    // const gasFeeToParticipateCurrrentBatchUint256: Uint256 = uint256.bnToUint256(gasFeeToParticipateCurrrentBatch)
    const borrowCall: Call = {
        contractAddress: troveAddress,
        entrypoint: "borrow",
        calldata: [
            ethAmount,
            gasFeeToParticipateCurrrentBatch.toString()
        ]
    }
    return (borrowCall)
}

export async function buildCallDataRepayLiquity(this: NimboraSDK, props: BuildCallDataRepayLiquityProps): Promise<Call> {
    const { troveAddress, userAddress, lusdAmount, closeBatch } = props
    if (!this.checkTrove(troveAddress)) {
        throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    // const lusdAmountUint256: Uint256 = uint256.bnToUint256(lusdAmount)
    const getRequiredGasFeeToParticipateCurrrentBatchLiquityProps: GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
        troveAddress: troveAddress,
        userAddress: userAddress,
        closeBatch: closeBatch
    }
    const gasFeeToParticipateCurrrentBatch = await this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)
    // const gasFeeToParticipateCurrrentBatchUint256: Uint256 = uint256.bnToUint256(gasFeeToParticipateCurrrentBatch)
    const repayCall: Call = {
        contractAddress: troveAddress,
        entrypoint: "repay",
        calldata: [
            lusdAmount,
            gasFeeToParticipateCurrrentBatch.toString()
        ]
    }
    return (repayCall)
}

