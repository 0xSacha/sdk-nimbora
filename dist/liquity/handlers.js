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
exports.handleRepayLiquity = exports.handleBorrowLiquity = void 0;
var types_1 = require("../config/types");
var errorWrapper_1 = require("../utils/errorWrapper");
function handleBorrowLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, ethAmount, _a, closeBatch, _b, allowApprove, _c, referral, checkBalanceBorrowLiquityProps, isEnoughEth, callsToExecute, checkAllowanceBorrowLiquityProps, isEnoughAllowanceEth, buildCallDataApproveBorrowLiquityProps, ethApproveCall, buildCallDataBorrowLiquityProps, borrowCall, tx, e_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    troveAddress = props.troveAddress, ethAmount = props.ethAmount, _a = props.closeBatch, closeBatch = _a === void 0 ? false : _a, _b = props.allowApprove, allowApprove = _b === void 0 ? true : _b, _c = props.referral, referral = _c === void 0 ? "none" : _c;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    if (!this.signer)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.PROVIDER_REQUIRED });
                    if (ethAmount === BigInt(0))
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.AMOUNT_NUL });
                    checkBalanceBorrowLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: this.provider.address,
                        ethAmount: ethAmount,
                        closeBatch: closeBatch
                    };
                    return [4 /*yield*/, this.checkBalanceBorrowLiquity(checkBalanceBorrowLiquityProps)];
                case 1:
                    isEnoughEth = _d.sent();
                    if (!isEnoughEth)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_ENOUGHT_ETH });
                    callsToExecute = [];
                    checkAllowanceBorrowLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: this.provider.address,
                        ethAmount: ethAmount,
                        closeBatch: closeBatch
                    };
                    return [4 /*yield*/, this.checkAllowanceBorrowLiquity(checkAllowanceBorrowLiquityProps)];
                case 2:
                    isEnoughAllowanceEth = _d.sent();
                    if (!!isEnoughAllowanceEth) return [3 /*break*/, 4];
                    if (!allowApprove)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.APPROVAL_REQUIRED });
                    buildCallDataApproveBorrowLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: this.provider.address,
                        ethAmount: ethAmount,
                        closeBatch: closeBatch
                    };
                    return [4 /*yield*/, this.buildCallDataApproveBorrowLiquity(buildCallDataApproveBorrowLiquityProps)];
                case 3:
                    ethApproveCall = _d.sent();
                    callsToExecute.push(ethApproveCall);
                    _d.label = 4;
                case 4:
                    buildCallDataBorrowLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: this.provider.address,
                        ethAmount: ethAmount,
                        closeBatch: closeBatch
                    };
                    return [4 /*yield*/, this.buildCallDataBorrowLiquity(buildCallDataBorrowLiquityProps)];
                case 5:
                    borrowCall = _d.sent();
                    callsToExecute.push(borrowCall);
                    _d.label = 6;
                case 6:
                    _d.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, this.provider.execute(callsToExecute)];
                case 7:
                    tx = _d.sent();
                    return [2 /*return*/, tx.transaction_hash];
                case 8:
                    e_1 = _d.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_TRANSACTION, error: e_1 });
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.handleBorrowLiquity = handleBorrowLiquity;
function handleRepayLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, lusdAmount, _a, closeBatch, _b, allowApprove, _c, referral, checkBalanceRepayLiquityProps, checkBalanceRepayLiquityRes, callsToExecute, checkAllowanceBorrowLiquityProps, checkAllowanceRepayLiquityRes, buildCallDataApproveRepayLiquityProps, buildCallDataApproveRepayLiquityRes, buildCallDataBorrowLiquityProps, repayCall, tx, e_2;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    troveAddress = props.troveAddress, lusdAmount = props.lusdAmount, _a = props.closeBatch, closeBatch = _a === void 0 ? false : _a, _b = props.allowApprove, allowApprove = _b === void 0 ? true : _b, _c = props.referral, referral = _c === void 0 ? "none" : _c;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    if (!this.signer)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.PROVIDER_REQUIRED });
                    if (lusdAmount === BigInt(0))
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.AMOUNT_NUL });
                    checkBalanceRepayLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: this.provider.address,
                        lusdAmount: lusdAmount,
                        closeBatch: closeBatch
                    };
                    return [4 /*yield*/, this.checkBalanceRepayLiquity(checkBalanceRepayLiquityProps)];
                case 1:
                    checkBalanceRepayLiquityRes = _d.sent();
                    if (!checkBalanceRepayLiquityRes.isEnoughEth)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_ENOUGHT_ETH });
                    if (!checkBalanceRepayLiquityRes.isEnoughLusd)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_ENOUGHT_LUSD });
                    callsToExecute = [];
                    checkAllowanceBorrowLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: this.provider.address,
                        lusdAmount: lusdAmount,
                        closeBatch: closeBatch
                    };
                    return [4 /*yield*/, this.checkAllowanceRepayLiquity(checkAllowanceBorrowLiquityProps)];
                case 2:
                    checkAllowanceRepayLiquityRes = _d.sent();
                    if (!(!checkAllowanceRepayLiquityRes.isEnoughAllowanceEth || !checkAllowanceRepayLiquityRes.isEnoughAllowanceLusd)) return [3 /*break*/, 4];
                    if (!allowApprove)
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.APPROVAL_REQUIRED });
                    buildCallDataApproveRepayLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: this.provider.address,
                        lusdAmount: lusdAmount,
                        closeBatch: closeBatch,
                        isEnoughtAllowanceLusd: checkAllowanceRepayLiquityRes.isEnoughAllowanceLusd,
                        isEnoughtAllowanceEth: checkAllowanceRepayLiquityRes.isEnoughAllowanceEth
                    };
                    return [4 /*yield*/, this.buildCallDataApproveRepayLiquity(buildCallDataApproveRepayLiquityProps)];
                case 3:
                    buildCallDataApproveRepayLiquityRes = _d.sent();
                    if (buildCallDataApproveRepayLiquityRes.ethApproveCall) {
                        callsToExecute.push(buildCallDataApproveRepayLiquityRes.ethApproveCall);
                    }
                    if (buildCallDataApproveRepayLiquityRes.lusdApproveCall) {
                        callsToExecute.push(buildCallDataApproveRepayLiquityRes.lusdApproveCall);
                    }
                    _d.label = 4;
                case 4:
                    buildCallDataBorrowLiquityProps = {
                        troveAddress: troveAddress,
                        userAddress: this.provider.address,
                        lusdAmount: lusdAmount,
                        closeBatch: closeBatch
                    };
                    return [4 /*yield*/, this.buildCallDataRepayLiquity(buildCallDataBorrowLiquityProps)];
                case 5:
                    repayCall = _d.sent();
                    callsToExecute.push(repayCall);
                    _d.label = 6;
                case 6:
                    _d.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, this.provider.execute(callsToExecute)];
                case 7:
                    tx = _d.sent();
                    return [2 /*return*/, tx.transaction_hash];
                case 8:
                    e_2 = _d.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_TRANSACTION, error: e_2 });
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.handleRepayLiquity = handleRepayLiquity;
