"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCallDataRepayLiquity = exports.buildCallDataBorrowLiquity = exports.buildCallDataApproveRepayLiquity = exports.buildCallDataApproveBorrowLiquity = void 0;
var addresses_1 = require("@/config/addresses");
var types_1 = require("@/config/types");
var errorWrapper_1 = require("@/utils/errorWrapper");
var starknet_1 = require("starknet");
function buildCallDataApproveBorrowLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, userAddress, ethAmount, closeBatch, ethAddress, getRequiredGasFeeToParticipateCurrrentBatchLiquityProps, gasFeeToParticipateCurrrentBatch, desiredAmountUint256, tokenApproveCall;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    troveAddress = props.troveAddress, userAddress = props.userAddress, ethAmount = props.ethAmount, closeBatch = props.closeBatch;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    ethAddress = (0, addresses_1.getEthAddress)(this.chainId);
                    getRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: userAddress,
                        closeBatch: closeBatch
                    };
                    return [4 /*yield*/, this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)];
                case 1:
                    gasFeeToParticipateCurrrentBatch = _a.sent();
                    desiredAmountUint256 = starknet_1.uint256.bnToUint256(gasFeeToParticipateCurrrentBatch + ethAmount);
                    tokenApproveCall = {
                        contractAddress: ethAddress,
                        entrypoint: "approve",
                        calldata: [
                            userAddress,
                            troveAddress,
                            desiredAmountUint256.low,
                            desiredAmountUint256.high
                        ]
                    };
                    return [2 /*return*/, (tokenApproveCall)];
            }
        });
    });
}
exports.buildCallDataApproveBorrowLiquity = buildCallDataApproveBorrowLiquity;
function buildCallDataApproveRepayLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, userAddress, lusdAmount, closeBatch, _a, isEnoughtAllowanceLusd, _b, isEnoughtAllowanceEth, ethAddress, lusdAddress, lusdAmountUint256, lusdApproveCall, getRequiredGasFeeToParticipateCurrrentBatchLiquityProps, gasFeeToParticipateCurrrentBatch, gasFeeToParticipateCurrrentBatchUint256, ethApproveCall, buildCallDataApproveRepayLiquityRes;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    troveAddress = props.troveAddress, userAddress = props.userAddress, lusdAmount = props.lusdAmount, closeBatch = props.closeBatch, _a = props.isEnoughtAllowanceLusd, isEnoughtAllowanceLusd = _a === void 0 ? false : _a, _b = props.isEnoughtAllowanceEth, isEnoughtAllowanceEth = _b === void 0 ? false : _b;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    if (isEnoughtAllowanceLusd && isEnoughtAllowanceEth)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOTHING_TO_APPROVE });
                    ethAddress = (0, addresses_1.getEthAddress)(this.chainId);
                    lusdAddress = (0, addresses_1.getLusdAddress)(this.chainId);
                    lusdAmountUint256 = starknet_1.uint256.bnToUint256(lusdAmount);
                    if (!isEnoughtAllowanceLusd) {
                        lusdApproveCall = {
                            contractAddress: lusdAddress,
                            entrypoint: "approve",
                            calldata: [
                                userAddress,
                                troveAddress,
                                lusdAmountUint256.low,
                                lusdAmountUint256.high
                            ]
                        };
                    }
                    getRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: userAddress,
                        closeBatch: closeBatch
                    };
                    return [4 /*yield*/, this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)];
                case 1:
                    gasFeeToParticipateCurrrentBatch = _c.sent();
                    gasFeeToParticipateCurrrentBatchUint256 = starknet_1.uint256.bnToUint256(gasFeeToParticipateCurrrentBatch);
                    if (!isEnoughtAllowanceEth) {
                        ethApproveCall = {
                            contractAddress: ethAddress,
                            entrypoint: "approve",
                            calldata: [
                                userAddress,
                                troveAddress,
                                gasFeeToParticipateCurrrentBatchUint256.low,
                                gasFeeToParticipateCurrrentBatchUint256.high
                            ]
                        };
                    }
                    buildCallDataApproveRepayLiquityRes = {
                        lusdApproveCall: lusdApproveCall,
                        ethApproveCall: ethApproveCall
                    };
                    return [2 /*return*/, (buildCallDataApproveRepayLiquityRes)];
            }
        });
    });
}
exports.buildCallDataApproveRepayLiquity = buildCallDataApproveRepayLiquity;
function buildCallDataBorrowLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, userAddress, ethAmount, closeBatch, ethAmountUint256, getRequiredGasFeeToParticipateCurrrentBatchLiquityProps, gasFeeToParticipateCurrrentBatch, gasFeeToParticipateCurrrentBatchUint256, borrowCall;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    troveAddress = props.troveAddress, userAddress = props.userAddress, ethAmount = props.ethAmount, closeBatch = props.closeBatch;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    ethAmountUint256 = starknet_1.uint256.bnToUint256(ethAmount);
                    getRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: userAddress,
                        closeBatch: closeBatch
                    };
                    return [4 /*yield*/, this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)];
                case 1:
                    gasFeeToParticipateCurrrentBatch = _a.sent();
                    gasFeeToParticipateCurrrentBatchUint256 = starknet_1.uint256.bnToUint256(gasFeeToParticipateCurrrentBatch);
                    borrowCall = {
                        contractAddress: troveAddress,
                        entrypoint: "borrow",
                        calldata: [
                            ethAmountUint256.low,
                            ethAmountUint256.high,
                            gasFeeToParticipateCurrrentBatchUint256.low,
                            gasFeeToParticipateCurrrentBatchUint256.high
                        ]
                    };
                    return [2 /*return*/, (borrowCall)];
            }
        });
    });
}
exports.buildCallDataBorrowLiquity = buildCallDataBorrowLiquity;
function buildCallDataRepayLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, userAddress, lusdAmount, closeBatch, lusdAmountUint256, getRequiredGasFeeToParticipateCurrrentBatchLiquityProps, gasFeeToParticipateCurrrentBatch, gasFeeToParticipateCurrrentBatchUint256, repayCall;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    troveAddress = props.troveAddress, userAddress = props.userAddress, lusdAmount = props.lusdAmount, closeBatch = props.closeBatch;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    lusdAmountUint256 = starknet_1.uint256.bnToUint256(lusdAmount);
                    getRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: userAddress,
                        closeBatch: closeBatch
                    };
                    return [4 /*yield*/, this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)];
                case 1:
                    gasFeeToParticipateCurrrentBatch = _a.sent();
                    gasFeeToParticipateCurrrentBatchUint256 = starknet_1.uint256.bnToUint256(gasFeeToParticipateCurrrentBatch);
                    repayCall = {
                        contractAddress: troveAddress,
                        entrypoint: "borrow",
                        calldata: [
                            lusdAmountUint256.low,
                            lusdAmountUint256.high,
                            gasFeeToParticipateCurrrentBatchUint256.low,
                            gasFeeToParticipateCurrrentBatchUint256.high
                        ]
                    };
                    return [2 /*return*/, (repayCall)];
            }
        });
    });
}
exports.buildCallDataRepayLiquity = buildCallDataRepayLiquity;
