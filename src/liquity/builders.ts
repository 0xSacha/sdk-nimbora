import { getEthAddress, getLusdAddress } from "../config/addresses";
import { NimboraSDK } from "..";
import { ERROR_CODE, BuildCallDataApproveRepayLiquityProps, BuildCallDataApproveBorrowLiquityProps, BuildCallDataApproveRepayLiquityRes, BuildCallDataBorrowLiquityProps, BuildCallDataRepayLiquityProps, BuildApproveCallProps } from "../config/types";
import { ErrorWrapper } from '../utils/errorWrapper';
import { Call, Uint256, uint256 } from "starknet";



export function buildCallDataApproveBorrowLiquity(this: NimboraSDK, props: BuildCallDataApproveBorrowLiquityProps): Call {
    const { troveAddress, ethAmount, gasRequired } = props
    if (!this.checkTrove(troveAddress)) {
        throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    const ethAddress = getEthAddress(this.chainId)
    const buildApproveCallProps: BuildApproveCallProps = {
        tokenAddress: ethAddress,
        spenderAddress: troveAddress,
        amount: gasRequired + ethAmount
    }
    const tokenApproveCall = this.buildApproveCall(buildApproveCallProps)
    return (tokenApproveCall)
}


export function buildCallDataApproveRepayLiquity(this: NimboraSDK, props: BuildCallDataApproveRepayLiquityProps): BuildCallDataApproveRepayLiquityRes {
    const { troveAddress, lusdAmount, gasRequired, isEnoughAllowanceLusd = false, isEnoughAllowanceEth = false } = props
    if (!this.checkTrove(troveAddress)) {
        throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    if (isEnoughAllowanceLusd && isEnoughAllowanceEth) throw new ErrorWrapper({ code: ERROR_CODE.NOTHING_TO_APPROVE });

    let lusdApproveCall: Call | undefined;
    let ethApproveCall: Call | undefined;

    if (!isEnoughAllowanceLusd) {
        const lusdAddress = getLusdAddress(this.chainId)
        const buildApproveCallLusdProps: BuildApproveCallProps = {
            tokenAddress: lusdAddress,
            spenderAddress: troveAddress,
            amount: lusdAmount
        }
        lusdApproveCall = this.buildApproveCall(buildApproveCallLusdProps)
    }

    if (!isEnoughAllowanceEth) {
        const ethAddress = getEthAddress(this.chainId)
        const buildApproveCallEthProps: BuildApproveCallProps = {
            tokenAddress: ethAddress,
            spenderAddress: troveAddress,
            amount: gasRequired
        }
        ethApproveCall = this.buildApproveCall(buildApproveCallEthProps)
    }

    const buildCallDataApproveRepayLiquityRes: BuildCallDataApproveRepayLiquityRes = {
        lusdApproveCall: lusdApproveCall,
        ethApproveCall: ethApproveCall
    }

    return (buildCallDataApproveRepayLiquityRes)
}

export function buildCallDataBorrowLiquity(this: NimboraSDK, props: BuildCallDataBorrowLiquityProps): Call {
    const { troveAddress, ethAmount, gasRequired } = props
    if (!this.checkTrove(troveAddress)) {
        throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    const ethAmountUint256: Uint256 = uint256.bnToUint256(ethAmount)
    const gasRequiredUint256: Uint256 = uint256.bnToUint256(gasRequired)
    const borrowCall: Call = {
        contractAddress: troveAddress,
        entrypoint: "borrow",
        calldata: [
            ethAmountUint256.low,
            ethAmountUint256.high,
            gasRequiredUint256.low,
            gasRequiredUint256.high
        ]
    }
    return (borrowCall)
}


export function buildCallDataRepayLiquity(this: NimboraSDK, props: BuildCallDataRepayLiquityProps): Call {
    const { troveAddress, lusdAmount, gasRequired } = props
    if (!this.checkTrove(troveAddress)) {
        throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    const lusdAmountUint256: Uint256 = uint256.bnToUint256(lusdAmount)
    const gasRequiredUint256: Uint256 = uint256.bnToUint256(gasRequired)
    const repayCall: Call = {
        contractAddress: troveAddress,
        entrypoint: "repay",
        calldata: [
            lusdAmountUint256.low,
            lusdAmountUint256.high,
            gasRequiredUint256.low,
            gasRequiredUint256.high
        ]
    }
    return (repayCall)
}

