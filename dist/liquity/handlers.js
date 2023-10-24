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
exports.handleBatchLiquityManual = exports.handleRepayLiquityManual = exports.handleRepayLiquity = exports.handleBorrowLiquityManual = exports.handleBorrowLiquity = void 0;
var types_1 = require("../config/types");
var errorWrapper_1 = require("../utils/errorWrapper");
function handleBorrowLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, ethAmount, _a, closeBatch, _b, allowApprove, _c, referral, getRequiredGasFeeToParticipateCurrrentBatchLiquityProps, gasRequired, checkBalanceBorrowLiquityProps, checkAllowanceBorrowLiquityProps, _d, isEnoughEth, isEnoughAllowanceEth, callsToExecute, buildCallDataApproveBorrowLiquityProps, ethApproveCall, buildCallDataBorrowLiquityProps, borrowCall, tx, e_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    troveAddress = props.troveAddress, ethAmount = props.ethAmount, _a = props.closeBatch, closeBatch = _a === void 0 ? false : _a, _b = props.allowApprove, allowApprove = _b === void 0 ? true : _b, _c = props.referral, referral = _c === void 0 ? "none" : _c;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    if (!this.signer)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.PROVIDER_REQUIRED });
                    if (ethAmount === BigInt(0))
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.AMOUNT_NUL });
                    getRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: this.provider.address,
                        closeBatch: closeBatch
                    };
                    return [4 /*yield*/, this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)];
                case 1:
                    gasRequired = _e.sent();
                    checkBalanceBorrowLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: this.provider.address,
                        ethAmount: ethAmount,
                        gasRequired: gasRequired
                    };
                    checkAllowanceBorrowLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: this.provider.address,
                        ethAmount: ethAmount,
                        gasRequired: gasRequired
                    };
                    return [4 /*yield*/, Promise.all([
                            this.checkBalanceBorrowLiquity(checkBalanceBorrowLiquityProps),
                            this.checkAllowanceBorrowLiquity(checkAllowanceBorrowLiquityProps),
                        ])];
                case 2:
                    _d = _e.sent(), isEnoughEth = _d[0], isEnoughAllowanceEth = _d[1];
                    if (!isEnoughEth)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_ENOUGHT_ETH });
                    callsToExecute = [];
                    if (!isEnoughAllowanceEth) {
                        if (!allowApprove)
                            throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.APPROVAL_REQUIRED });
                        buildCallDataApproveBorrowLiquityProps = {
                            troveAddress: troveAddress,
                            ethAmount: ethAmount,
                            gasRequired: gasRequired
                        };
                        ethApproveCall = this.buildCallDataApproveBorrowLiquity(buildCallDataApproveBorrowLiquityProps);
                        callsToExecute.push(ethApproveCall);
                    }
                    buildCallDataBorrowLiquityProps = {
                        troveAddress: troveAddress,
                        ethAmount: ethAmount,
                        gasRequired: gasRequired
                    };
                    borrowCall = this.buildCallDataBorrowLiquity(buildCallDataBorrowLiquityProps);
                    callsToExecute.push(borrowCall);
                    _e.label = 3;
                case 3:
                    _e.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, this.provider.execute(callsToExecute)];
                case 4:
                    tx = _e.sent();
                    return [2 /*return*/, tx.transaction_hash];
                case 5:
                    e_1 = _e.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_TRANSACTION, error: e_1 });
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.handleBorrowLiquity = handleBorrowLiquity;
function handleBorrowLiquityManual(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, ethAmount, gas, _a, approveEth, _b, includesBatch, _c, referral, callsToExecute, buildCallDataApproveBorrowLiquityProps, ethApproveCall, buildCallDataBorrowLiquityProps, borrowCall, batchCall, tx, e_2;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    troveAddress = props.troveAddress, ethAmount = props.ethAmount, gas = props.gas, _a = props.approveEth, approveEth = _a === void 0 ? true : _a, _b = props.includesBatch, includesBatch = _b === void 0 ? false : _b, _c = props.referral, referral = _c === void 0 ? "none" : _c;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    if (!this.signer)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.PROVIDER_REQUIRED });
                    if (ethAmount === BigInt(0))
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.AMOUNT_NUL });
                    callsToExecute = [];
                    if (approveEth) {
                        buildCallDataApproveBorrowLiquityProps = {
                            troveAddress: troveAddress,
                            ethAmount: ethAmount,
                            gasRequired: gas
                        };
                        ethApproveCall = this.buildCallDataApproveBorrowLiquity(buildCallDataApproveBorrowLiquityProps);
                        callsToExecute.push(ethApproveCall);
                    }
                    buildCallDataBorrowLiquityProps = {
                        troveAddress: troveAddress,
                        ethAmount: ethAmount,
                        gasRequired: includesBatch ? BigInt(0) : gas
                    };
                    borrowCall = this.buildCallDataBorrowLiquity(buildCallDataBorrowLiquityProps);
                    callsToExecute.push(borrowCall);
                    if (includesBatch == true) {
                        batchCall = this.buildCallDataBatchLiquity(troveAddress);
                        callsToExecute.push(batchCall);
                    }
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, this.provider.execute(callsToExecute)];
                case 2:
                    tx = _d.sent();
                    return [2 /*return*/, tx.transaction_hash];
                case 3:
                    e_2 = _d.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_TRANSACTION, error: e_2 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.handleBorrowLiquityManual = handleBorrowLiquityManual;
function handleRepayLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, lusdAmount, _a, closeBatch, _b, allowApprove, _c, referral, getRequiredGasFeeToParticipateCurrrentBatchLiquityProps, gasRequired, checkBalanceRepayLiquityProps, checkAllowanceBorrowLiquityProps, _d, checkBalanceRepayLiquityRes, checkAllowanceRepayLiquityRes, callsToExecute, buildCallDataApproveRepayLiquityProps, buildCallDataApproveRepayLiquityRes, buildCallDataBorrowLiquityProps, repayCall, tx, e_3;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    troveAddress = props.troveAddress, lusdAmount = props.lusdAmount, _a = props.closeBatch, closeBatch = _a === void 0 ? false : _a, _b = props.allowApprove, allowApprove = _b === void 0 ? true : _b, _c = props.referral, referral = _c === void 0 ? "none" : _c;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    if (!this.signer)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.PROVIDER_REQUIRED });
                    if (lusdAmount === BigInt(0))
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.AMOUNT_NUL });
                    getRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: this.provider.address,
                        closeBatch: closeBatch
                    };
                    return [4 /*yield*/, this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)];
                case 1:
                    gasRequired = _e.sent();
                    checkBalanceRepayLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: this.provider.address,
                        lusdAmount: lusdAmount,
                        gasRequired: gasRequired
                    };
                    checkAllowanceBorrowLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: this.provider.address,
                        lusdAmount: lusdAmount,
                        gasRequired: gasRequired
                    };
                    return [4 /*yield*/, Promise.all([
                            this.checkBalanceRepayLiquity(checkBalanceRepayLiquityProps),
                            this.checkAllowanceRepayLiquity(checkAllowanceBorrowLiquityProps),
                        ])];
                case 2:
                    _d = _e.sent(), checkBalanceRepayLiquityRes = _d[0], checkAllowanceRepayLiquityRes = _d[1];
                    if (!checkBalanceRepayLiquityRes.isEnoughEth)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_ENOUGHT_ETH });
                    if (!checkBalanceRepayLiquityRes.isEnoughLusd)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_ENOUGHT_LUSD });
                    callsToExecute = [];
                    if (!checkAllowanceRepayLiquityRes.isEnoughAllowanceEth || !checkAllowanceRepayLiquityRes.isEnoughAllowanceLusd) {
                        if (!allowApprove)
                            throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.APPROVAL_REQUIRED });
                        buildCallDataApproveRepayLiquityProps = {
                            troveAddress: troveAddress,
                            lusdAmount: lusdAmount,
                            gasRequired: gasRequired,
                            isEnoughAllowanceLusd: checkAllowanceRepayLiquityRes.isEnoughAllowanceLusd,
                            isEnoughAllowanceEth: checkAllowanceRepayLiquityRes.isEnoughAllowanceEth
                        };
                        buildCallDataApproveRepayLiquityRes = this.buildCallDataApproveRepayLiquity(buildCallDataApproveRepayLiquityProps);
                        if (buildCallDataApproveRepayLiquityRes.ethApproveCall) {
                            callsToExecute.push(buildCallDataApproveRepayLiquityRes.ethApproveCall);
                        }
                        if (buildCallDataApproveRepayLiquityRes.lusdApproveCall) {
                            callsToExecute.push(buildCallDataApproveRepayLiquityRes.lusdApproveCall);
                        }
                    }
                    buildCallDataBorrowLiquityProps = {
                        troveAddress: troveAddress,
                        lusdAmount: lusdAmount,
                        gasRequired: gasRequired
                    };
                    repayCall = this.buildCallDataRepayLiquity(buildCallDataBorrowLiquityProps);
                    callsToExecute.push(repayCall);
                    _e.label = 3;
                case 3:
                    _e.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, this.provider.execute(callsToExecute)];
                case 4:
                    tx = _e.sent();
                    return [2 /*return*/, tx.transaction_hash];
                case 5:
                    e_3 = _e.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_TRANSACTION, error: e_3 });
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.handleRepayLiquity = handleRepayLiquity;
function handleRepayLiquityManual(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, lusdAmount, gas, _a, approveLusd, _b, approveEth, _c, includesBatch, _d, referral, callsToExecute, buildCallDataApproveRepayLiquityProps, buildCallDataApproveRepayLiquityRes, buildCallDataBorrowLiquityProps, repayCall, batchCall, tx, e_4;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    troveAddress = props.troveAddress, lusdAmount = props.lusdAmount, gas = props.gas, _a = props.approveLusd, approveLusd = _a === void 0 ? true : _a, _b = props.approveEth, approveEth = _b === void 0 ? true : _b, _c = props.includesBatch, includesBatch = _c === void 0 ? false : _c, _d = props.referral, referral = _d === void 0 ? "none" : _d;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    if (!this.signer)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.PROVIDER_REQUIRED });
                    if (lusdAmount === BigInt(0))
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.AMOUNT_NUL });
                    callsToExecute = [];
                    if (approveLusd || approveEth) {
                        buildCallDataApproveRepayLiquityProps = {
                            troveAddress: troveAddress,
                            lusdAmount: lusdAmount,
                            gasRequired: gas,
                            isEnoughAllowanceLusd: !approveLusd,
                            isEnoughAllowanceEth: !approveEth
                        };
                        buildCallDataApproveRepayLiquityRes = this.buildCallDataApproveRepayLiquity(buildCallDataApproveRepayLiquityProps);
                        if (buildCallDataApproveRepayLiquityRes.ethApproveCall && gas > 0) {
                            callsToExecute.push(buildCallDataApproveRepayLiquityRes.ethApproveCall);
                        }
                        if (buildCallDataApproveRepayLiquityRes.lusdApproveCall) {
                            callsToExecute.push(buildCallDataApproveRepayLiquityRes.lusdApproveCall);
                        }
                    }
                    buildCallDataBorrowLiquityProps = {
                        troveAddress: troveAddress,
                        lusdAmount: lusdAmount,
                        gasRequired: includesBatch ? BigInt(0) : gas
                    };
                    repayCall = this.buildCallDataRepayLiquity(buildCallDataBorrowLiquityProps);
                    callsToExecute.push(repayCall);
                    if (includesBatch == true) {
                        batchCall = this.buildCallDataBatchLiquity(troveAddress);
                        callsToExecute.push(batchCall);
                    }
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, this.provider.execute(callsToExecute)];
                case 2:
                    tx = _e.sent();
                    return [2 /*return*/, tx.transaction_hash];
                case 3:
                    e_4 = _e.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_TRANSACTION, error: e_4 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.handleRepayLiquityManual = handleRepayLiquityManual;
function handleBatchLiquityManual(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, gas, _a, approveEth, _b, referral, callsToExecute, buildCallDataApproveBorrowLiquityProps, ethApproveCall, batchCall, tx, e_5;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    troveAddress = props.troveAddress, gas = props.gas, _a = props.approveEth, approveEth = _a === void 0 ? true : _a, _b = props.referral, referral = _b === void 0 ? "none" : _b;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    if (!this.signer)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.PROVIDER_REQUIRED });
                    callsToExecute = [];
                    if (approveEth) {
                        buildCallDataApproveBorrowLiquityProps = {
                            troveAddress: troveAddress,
                            ethAmount: BigInt(0),
                            gasRequired: gas
                        };
                        ethApproveCall = this.buildCallDataApproveBorrowLiquity(buildCallDataApproveBorrowLiquityProps);
                        callsToExecute.push(ethApproveCall);
                    }
                    batchCall = this.buildCallDataBatchLiquity(troveAddress);
                    callsToExecute.push(batchCall);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, this.provider.execute(callsToExecute)];
                case 2:
                    tx = _c.sent();
                    return [2 /*return*/, tx.transaction_hash];
                case 3:
                    e_5 = _c.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_TRANSACTION, error: e_5 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.handleBatchLiquityManual = handleBatchLiquityManual;
