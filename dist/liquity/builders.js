"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCallDataRepayLiquity = exports.buildCallDataBorrowLiquity = exports.buildCallDataApproveRepayLiquity = exports.buildCallDataApproveBorrowLiquity = void 0;
var addresses_1 = require("../config/addresses");
var types_1 = require("../config/types");
var errorWrapper_1 = require("../utils/errorWrapper");
var starknet_1 = require("starknet");
function buildCallDataApproveBorrowLiquity(props) {
    var troveAddress = props.troveAddress, ethAmount = props.ethAmount, gasRequired = props.gasRequired;
    if (!this.checkTrove(troveAddress)) {
        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    var ethAddress = (0, addresses_1.getEthAddress)(this.chainId);
    var buildApproveCallProps = {
        tokenAddress: ethAddress,
        spenderAddress: troveAddress,
        amount: gasRequired + ethAmount
    };
    var tokenApproveCall = this.buildApproveCall(buildApproveCallProps);
    return (tokenApproveCall);
}
exports.buildCallDataApproveBorrowLiquity = buildCallDataApproveBorrowLiquity;
function buildCallDataApproveRepayLiquity(props) {
    var troveAddress = props.troveAddress, lusdAmount = props.lusdAmount, gasRequired = props.gasRequired, _a = props.isEnoughAllowanceLusd, isEnoughAllowanceLusd = _a === void 0 ? false : _a, _b = props.isEnoughAllowanceEth, isEnoughAllowanceEth = _b === void 0 ? false : _b;
    if (!this.checkTrove(troveAddress)) {
        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    if (isEnoughAllowanceLusd && isEnoughAllowanceEth)
        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOTHING_TO_APPROVE });
    var lusdApproveCall;
    var ethApproveCall;
    if (!isEnoughAllowanceLusd) {
        var lusdAddress = (0, addresses_1.getLusdAddress)(this.chainId);
        var buildApproveCallLusdProps = {
            tokenAddress: lusdAddress,
            spenderAddress: troveAddress,
            amount: lusdAmount
        };
        lusdApproveCall = this.buildApproveCall(buildApproveCallLusdProps);
    }
    if (!isEnoughAllowanceEth) {
        var ethAddress = (0, addresses_1.getEthAddress)(this.chainId);
        var buildApproveCallEthProps = {
            tokenAddress: ethAddress,
            spenderAddress: troveAddress,
            amount: gasRequired
        };
        ethApproveCall = this.buildApproveCall(buildApproveCallEthProps);
    }
    var buildCallDataApproveRepayLiquityRes = {
        lusdApproveCall: lusdApproveCall,
        ethApproveCall: ethApproveCall
    };
    return (buildCallDataApproveRepayLiquityRes);
}
exports.buildCallDataApproveRepayLiquity = buildCallDataApproveRepayLiquity;
function buildCallDataBorrowLiquity(props) {
    var troveAddress = props.troveAddress, ethAmount = props.ethAmount, gasRequired = props.gasRequired;
    if (!this.checkTrove(troveAddress)) {
        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    var ethAmountUint256 = starknet_1.uint256.bnToUint256(ethAmount);
    var gasRequiredUint256 = starknet_1.uint256.bnToUint256(gasRequired);
    var borrowCall = {
        contractAddress: troveAddress,
        entrypoint: "borrow",
        calldata: [
            ethAmountUint256.low,
            ethAmountUint256.high,
            gasRequiredUint256.low,
            gasRequiredUint256.high
        ]
    };
    return (borrowCall);
}
exports.buildCallDataBorrowLiquity = buildCallDataBorrowLiquity;
function buildCallDataRepayLiquity(props) {
    var troveAddress = props.troveAddress, lusdAmount = props.lusdAmount, gasRequired = props.gasRequired;
    if (!this.checkTrove(troveAddress)) {
        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    var lusdAmountUint256 = starknet_1.uint256.bnToUint256(lusdAmount);
    var gasRequiredUint256 = starknet_1.uint256.bnToUint256(gasRequired);
    var repayCall = {
        contractAddress: troveAddress,
        entrypoint: "borrow",
        calldata: [
            lusdAmountUint256.low,
            lusdAmountUint256.high,
            gasRequiredUint256.low,
            gasRequiredUint256.high
        ]
    };
    return (repayCall);
}
exports.buildCallDataRepayLiquity = buildCallDataRepayLiquity;
