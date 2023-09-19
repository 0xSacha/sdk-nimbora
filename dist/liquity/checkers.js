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
exports.checkAllowanceRepayLiquity = exports.checkAllowanceBorrowLiquity = exports.checkBalanceRepayLiquity = exports.checkBalanceBorrowLiquity = exports.checkTrove = void 0;
var addresses_1 = require("../config/addresses");
var types_1 = require("../config/types");
var errorWrapper_1 = require("../utils/errorWrapper");
/**
 * Checks if a Trove exists based on its address.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove to check.
 * @returns True if the Trove exists; otherwise, false.
 */
function checkTrove(troveAddress) {
    if ((0, addresses_1.getTroveIdByChainIdAndAddress)(this.chainId, troveAddress)) {
        return (true);
    }
    return false;
}
exports.checkTrove = checkTrove;
/**
 * Checks if the user has a sufficient balance to borrow ETH.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove, ETH amount, batch close flag, and user information.
 * @returns A promise that resolves to true if the user has a sufficient balance; otherwise, false.
 */
function checkBalanceBorrowLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, ethAmount, gasRequired, userAddress, ethAddress, tokenBalanceProps, userTokenBalance, ethRequired;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    troveAddress = props.troveAddress, ethAmount = props.ethAmount, gasRequired = props.gasRequired, userAddress = props.userAddress;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    ethAddress = (0, addresses_1.getEthAddress)(this.chainId);
                    tokenBalanceProps = {
                        tokenAddress: ethAddress,
                        userAddress: userAddress
                    };
                    return [4 /*yield*/, this.getBalance(tokenBalanceProps)];
                case 1:
                    userTokenBalance = _a.sent();
                    ethRequired = ethAmount + gasRequired;
                    if (userTokenBalance < ethRequired) {
                        return [2 /*return*/, (false)];
                    }
                    else {
                        return [2 /*return*/, (true)];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.checkBalanceBorrowLiquity = checkBalanceBorrowLiquity;
/**
 * Checks if the user has a sufficient balance and allowance to repay LUSD.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove, LUSD amount, batch close flag, and user information.
 * @returns A promise that resolves to an object indicating if the user has enough LUSD and ETH balance.
 */
function checkBalanceRepayLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, lusdAmount, gasRequired, userAddress, ethAddress, lusdAddress, ethBalanceProps, lusdAmountBalanceProps, _a, userEthBalance, userLusdBalance, isEnoughLusd, isEnoughEth, checkBalanceRepayLiquityRes;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    troveAddress = props.troveAddress, lusdAmount = props.lusdAmount, gasRequired = props.gasRequired, userAddress = props.userAddress;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    ethAddress = (0, addresses_1.getEthAddress)(this.chainId);
                    lusdAddress = (0, addresses_1.getLusdAddress)(this.chainId);
                    ethBalanceProps = {
                        tokenAddress: ethAddress,
                        userAddress: userAddress
                    };
                    lusdAmountBalanceProps = {
                        tokenAddress: lusdAddress,
                        userAddress: userAddress
                    };
                    return [4 /*yield*/, Promise.all([
                            this.getBalance(ethBalanceProps),
                            this.getBalance(lusdAmountBalanceProps)
                        ])];
                case 1:
                    _a = _b.sent(), userEthBalance = _a[0], userLusdBalance = _a[1];
                    isEnoughLusd = true;
                    isEnoughEth = true;
                    if (userLusdBalance < lusdAmount) {
                        isEnoughLusd = false;
                    }
                    if (userEthBalance < gasRequired) {
                        isEnoughEth = false;
                    }
                    checkBalanceRepayLiquityRes = {
                        isEnoughLusd: isEnoughLusd,
                        isEnoughEth: isEnoughEth
                    };
                    return [2 /*return*/, checkBalanceRepayLiquityRes];
            }
        });
    });
}
exports.checkBalanceRepayLiquity = checkBalanceRepayLiquity;
/**
 * Checks if the user has a sufficient ETH allowance to borrow.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove, ETH amount, batch close flag, and user information.
 * @returns A promise that resolves to true if the user has a sufficient ETH allowance; otherwise, false.
 */
function checkAllowanceBorrowLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, ethAmount, gasRequired, userAddress, ethAddress, ethAllowanceProps, userEthAllowance, ethAllowanceRequired;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    troveAddress = props.troveAddress, ethAmount = props.ethAmount, gasRequired = props.gasRequired, userAddress = props.userAddress;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    ethAddress = (0, addresses_1.getEthAddress)(this.chainId);
                    ethAllowanceProps = {
                        tokenAddress: ethAddress,
                        userAddress: userAddress,
                        spender: troveAddress
                    };
                    return [4 /*yield*/, this.getAllowance(ethAllowanceProps)];
                case 1:
                    userEthAllowance = _a.sent();
                    ethAllowanceRequired = ethAmount + gasRequired;
                    if (userEthAllowance < ethAllowanceRequired) {
                        return [2 /*return*/, (false)];
                    }
                    else {
                        return [2 /*return*/, (true)];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.checkAllowanceBorrowLiquity = checkAllowanceBorrowLiquity;
/**
 * Checks if the user has sufficient ETH and LUSD allowances to repay LUSD.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove, LUSD amount, batch close flag, and user information.
 * @returns A promise that resolves to an object indicating if the user has enough allowances for LUSD and ETH.
 */
function checkAllowanceRepayLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, lusdAmount, gasRequired, userAddress, ethAddress, lusdAddress, ethAllowanceProps, lusdAllowanceProps, _a, userEthAllowance, userLusdAllowance, isEnoughAllowanceLusd, isEnoughAllowanceEth, checkBalanceRepayLiquityRes;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    troveAddress = props.troveAddress, lusdAmount = props.lusdAmount, gasRequired = props.gasRequired, userAddress = props.userAddress;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    ethAddress = (0, addresses_1.getEthAddress)(this.chainId);
                    lusdAddress = (0, addresses_1.getLusdAddress)(this.chainId);
                    ethAllowanceProps = {
                        tokenAddress: ethAddress,
                        userAddress: userAddress,
                        spender: troveAddress
                    };
                    lusdAllowanceProps = {
                        tokenAddress: lusdAddress,
                        userAddress: userAddress,
                        spender: troveAddress
                    };
                    return [4 /*yield*/, Promise.all([
                            this.getAllowance(ethAllowanceProps),
                            this.getAllowance(lusdAllowanceProps)
                        ])];
                case 1:
                    _a = _b.sent(), userEthAllowance = _a[0], userLusdAllowance = _a[1];
                    isEnoughAllowanceLusd = true;
                    isEnoughAllowanceEth = true;
                    if (userLusdAllowance < lusdAmount) {
                        isEnoughAllowanceLusd = false;
                    }
                    if (userEthAllowance < gasRequired) {
                        isEnoughAllowanceEth = false;
                    }
                    checkBalanceRepayLiquityRes = {
                        isEnoughAllowanceLusd: isEnoughAllowanceLusd,
                        isEnoughAllowanceEth: isEnoughAllowanceEth
                    };
                    return [2 /*return*/, (checkBalanceRepayLiquityRes)];
            }
        });
    });
}
exports.checkAllowanceRepayLiquity = checkAllowanceRepayLiquity;
