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
exports.getRequiredGasFeeToParticipateCurrrentBatchLiquity = exports.isRedistributionLiquity = exports.getTimestampClosedBatchLiquity = exports.getLUSDTotalSupply = exports.getUserDebtLiquity = exports.getTotalTroveSupplyLiquity = exports.getTotalTroveDebtLiquity = exports.getRemainingGasFeeToCloseBatch = exports.getTotalRequiredGasFeeToCloseBatchLiquity = exports.getNumberOfUsersToCloseBatchLiquity = exports.getUserGasInBatchLiquity = exports.getUserAmountInBatchLiquity = exports.getUsersInBatchLiquity = exports.getLastHandledBatchNonceLiquity = exports.getBatchCounterLiquity = exports.getAllowanceLiquity = exports.getGasTankLiquity = exports.getBatchGasFeePerUserLiquity = exports.getBatchGasUnitPerUserLiquity = exports.getBatchGasUnitLiquity = void 0;
var types_1 = require("../config/types");
var errorWrapper_1 = require("../utils/errorWrapper");
var starknet_1 = require("starknet");
var addresses_1 = require("../config/addresses");
var ethers_1 = require("ethers");
/**
 * Retrieves the batch gas unit for a Trove
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the batch gas unit as a bigint.
 */
function getBatchGasUnitLiquity(troveAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var troveContract, batchGasUnit, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    troveContract = this.getTroveContract(troveAddress);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, troveContract.get_batch_gas_unit()];
                case 2:
                    batchGasUnit = _a.sent();
                    return [2 /*return*/, batchGasUnit];
                case 3:
                    e_1 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_1 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getBatchGasUnitLiquity = getBatchGasUnitLiquity;
/**
 * Retrieves the batch gas unit per user for a Trove
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the batch gas unit per user as a bigint.
 */
function getBatchGasUnitPerUserLiquity(troveAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var troveContract, batchGasUnit, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    troveContract = this.getTroveContract(troveAddress);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, troveContract.get_batch_gas_unit_per_user()];
                case 2:
                    batchGasUnit = _a.sent();
                    return [2 /*return*/, batchGasUnit];
                case 3:
                    e_2 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_2 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getBatchGasUnitPerUserLiquity = getBatchGasUnitPerUserLiquity;
/**
 * Retrieves the batch gas fee per user for a Trove
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the batch gas fee per user as a bigint.
 */
function getBatchGasFeePerUserLiquity(troveAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var troveContract, batchGasFee, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    troveContract = this.getTroveContract(troveAddress);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, troveContract.get_batch_gas_fee_per_user()];
                case 2:
                    batchGasFee = _a.sent();
                    return [2 /*return*/, batchGasFee];
                case 3:
                    e_3 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_3 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getBatchGasFeePerUserLiquity = getBatchGasFeePerUserLiquity;
/**
 * Retrieves the gas tank balance of a specific Trove in Liquity.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the gas tank balance as a bigint.
 */
function getGasTankLiquity(troveAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var troveContract, gasTank, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    troveContract = this.getTroveContract(troveAddress);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, troveContract.get_gas_tank()];
                case 2:
                    gasTank = _a.sent();
                    return [2 /*return*/, gasTank];
                case 3:
                    e_4 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_4 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getGasTankLiquity = getGasTankLiquity;
/**
 * Retrieves the allowance for ETH and LUSD tokens for a user and a Trove
 * @param this - The NimboraSDK instance.
 * @param props - The GetAllowanceLiquityProps object containing troveAddress and userAddress.
 * @returns A promise that resolves to a GetAllowanceLiquityRes object.
 */
function getAllowanceLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, userAddress, getAllowanceEthProps, getAllowanceLusdProps, allowanceEth, allowanceLusd, getAllowanceLiquityRes, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    troveAddress = props.troveAddress, userAddress = props.userAddress;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    getAllowanceEthProps = {
                        tokenAddress: (0, addresses_1.getEthAddress)(this.chainId),
                        userAddress: userAddress,
                        spender: troveAddress
                    };
                    getAllowanceLusdProps = {
                        tokenAddress: (0, addresses_1.getLusdAddress)(this.chainId),
                        userAddress: userAddress,
                        spender: troveAddress
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, this.getAllowance(getAllowanceEthProps)];
                case 2:
                    allowanceEth = _a.sent();
                    return [4 /*yield*/, this.getAllowance(getAllowanceLusdProps)];
                case 3:
                    allowanceLusd = _a.sent();
                    getAllowanceLiquityRes = {
                        allowanceEth: allowanceEth,
                        allowanceLusd: allowanceLusd
                    };
                    return [2 /*return*/, getAllowanceLiquityRes];
                case 4:
                    e_5 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_5 });
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getAllowanceLiquity = getAllowanceLiquity;
/**
 * Retrieves the batch counter for a Trove
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the batch counter as a bigint.
 */
function getBatchCounterLiquity(troveAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var troveContract, batchCounter, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    troveContract = this.getTroveContract(troveAddress);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, troveContract.get_batch_counter()];
                case 2:
                    batchCounter = _a.sent();
                    return [2 /*return*/, batchCounter];
                case 3:
                    e_6 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_6 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getBatchCounterLiquity = getBatchCounterLiquity;
/**
 * Retrieves the last handled batch nonce for a Trove
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the last handled batch nonce as a bigint.
 */
function getLastHandledBatchNonceLiquity(troveAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var troveContract, lastHandledBatchNonce, e_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    troveContract = this.getTroveContract(troveAddress);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, troveContract.get_last_handled_batch()];
                case 2:
                    lastHandledBatchNonce = _a.sent();
                    return [2 /*return*/, lastHandledBatchNonce];
                case 3:
                    e_7 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_7 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getLastHandledBatchNonceLiquity = getLastHandledBatchNonceLiquity;
/**
 * Retrieves user borrow and repay lists for a specific batch nonce
 * @param this - The NimboraSDK instance.
 * @param props - The GetUsersInBatchLiquityProps object containing troveAddress and batchNonce.
 * @returns A promise that resolves to a GetUsersInBatchLiquityRes object.
 */
function getUsersInBatchLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, batchNonce, troveContract, batchNonceUint256, usersForNonce, userBorrowList, userRepayList, getUsersInBatchLiquityRes, e_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    troveAddress = props.troveAddress, batchNonce = props.batchNonce;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    troveContract = this.getTroveContract(troveAddress);
                    batchNonceUint256 = starknet_1.uint256.bnToUint256(batchNonce);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, troveContract.get_users_for_nonce(batchNonceUint256)];
                case 2:
                    usersForNonce = _a.sent();
                    userBorrowList = usersForNonce[0].map(function (user) { return user && ethers_1.BigNumber.from(user).toHexString(); });
                    userRepayList = usersForNonce[1].map(function (user) { return user && ethers_1.BigNumber.from(user).toHexString(); });
                    getUsersInBatchLiquityRes = {
                        borrowList: userBorrowList,
                        repayList: userRepayList
                    };
                    return [2 /*return*/, getUsersInBatchLiquityRes];
                case 3:
                    e_8 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_8 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getUsersInBatchLiquity = getUsersInBatchLiquity;
/**
 * Retrieves user borrow and repay amounts for a specific batch nonce and user address
 * @param this - The NimboraSDK instance.
 * @param props - The GetUserAmountInBatchLiquityProps object containing troveAddress, batchNonce, and userAddress.
 * @returns A promise that resolves to a GetUserAmountInBatchLiquityRes object.
 */
function getUserAmountInBatchLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, batchNonce, userAddress, troveContract, batchNonceUint256, userAmountForNounce, userBorrowAmount, userRepayAmount, getUserAmountInBatchLiquityRes, e_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    troveAddress = props.troveAddress, batchNonce = props.batchNonce, userAddress = props.userAddress;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    troveContract = this.getTroveContract(troveAddress);
                    batchNonceUint256 = starknet_1.uint256.bnToUint256(batchNonce);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, troveContract.get_user_amount_for_nonce(batchNonceUint256, userAddress)];
                case 2:
                    userAmountForNounce = _a.sent();
                    userBorrowAmount = userAmountForNounce[0];
                    userRepayAmount = userAmountForNounce[1];
                    getUserAmountInBatchLiquityRes = {
                        borrowAmount: userBorrowAmount,
                        repayAmount: userRepayAmount
                    };
                    return [2 /*return*/, getUserAmountInBatchLiquityRes];
                case 3:
                    e_9 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_9 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getUserAmountInBatchLiquity = getUserAmountInBatchLiquity;
/**
 * Retrieves user gas consumption for a specific batch nonce and user address
 * @param this - The NimboraSDK instance.
 * @param props - The GetUserGasInBatchLiquityProps object containing troveAddress, batchNonce, and userAddress.
 * @returns A promise that resolves to the user's gas consumption as a bigint.
 */
function getUserGasInBatchLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, batchNonce, userAddress, troveContract, batchNonceUint256, gasForNounce, e_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    troveAddress = props.troveAddress, batchNonce = props.batchNonce, userAddress = props.userAddress;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    troveContract = this.getTroveContract(troveAddress);
                    batchNonceUint256 = starknet_1.uint256.bnToUint256(batchNonce);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, troveContract.get_user_gas_for_nonce(batchNonceUint256, userAddress)];
                case 2:
                    gasForNounce = _a.sent();
                    return [2 /*return*/, gasForNounce];
                case 3:
                    e_10 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_10 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getUserGasInBatchLiquity = getUserGasInBatchLiquity;
/**
 * Calculates the number of users required to close a batch for a specific Trove.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the number of users required to close a batch as a bigint.
 */
function getNumberOfUsersToCloseBatchLiquity(troveAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var batchGasUnitBn, batchGasPerUserUnitBn, numberOfUsersToClose;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    return [4 /*yield*/, this.getBatchGasUnitLiquity(troveAddress)];
                case 1:
                    batchGasUnitBn = _a.sent();
                    return [4 /*yield*/, this.getBatchGasUnitPerUserLiquity(troveAddress)];
                case 2:
                    batchGasPerUserUnitBn = _a.sent();
                    numberOfUsersToClose = batchGasUnitBn / batchGasPerUserUnitBn;
                    return [2 /*return*/, (numberOfUsersToClose)];
            }
        });
    });
}
exports.getNumberOfUsersToCloseBatchLiquity = getNumberOfUsersToCloseBatchLiquity;
/**
 * Calculates the total required gas to close a batch for a specific Trove.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the total required gas as a bigint.
 */
function getTotalRequiredGasFeeToCloseBatchLiquity(troveAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var numberOfUsersBn, batchGasFeePerUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    return [4 /*yield*/, this.getNumberOfUsersToCloseBatchLiquity(troveAddress)];
                case 1:
                    numberOfUsersBn = _a.sent();
                    return [4 /*yield*/, this.getBatchGasFeePerUserLiquity(troveAddress)];
                case 2:
                    batchGasFeePerUser = _a.sent();
                    return [2 /*return*/, (numberOfUsersBn * batchGasFeePerUser)];
            }
        });
    });
}
exports.getTotalRequiredGasFeeToCloseBatchLiquity = getTotalRequiredGasFeeToCloseBatchLiquity;
/**
 * Calculates the remaining gas fee required to close a batch for a specific Trove in Liquity.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the remaining gas fee as a bigint.
 */
function getRemainingGasFeeToCloseBatch(troveAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var totalRequiredGasFeeToCloseBatchLiquity, gasTank;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    return [4 /*yield*/, this.getTotalRequiredGasFeeToCloseBatchLiquity(troveAddress)];
                case 1:
                    totalRequiredGasFeeToCloseBatchLiquity = _a.sent();
                    return [4 /*yield*/, this.getGasTankLiquity(troveAddress)];
                case 2:
                    gasTank = _a.sent();
                    return [2 /*return*/, (totalRequiredGasFeeToCloseBatchLiquity - gasTank)];
            }
        });
    });
}
exports.getRemainingGasFeeToCloseBatch = getRemainingGasFeeToCloseBatch;
/**
 * Retrieves the total debt of a Trove
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the total Trove debt as a bigint.
 */
function getTotalTroveDebtLiquity(troveAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var troveContract, l1TotalDebt, e_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    troveContract = this.getTroveContract(troveAddress);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, troveContract.get_l1_total_debt()];
                case 2:
                    l1TotalDebt = _a.sent();
                    return [2 /*return*/, l1TotalDebt];
                case 3:
                    e_11 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_11 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getTotalTroveDebtLiquity = getTotalTroveDebtLiquity;
/**
 * Retrieves the total trove supply issued by the trove
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the total Trove supply as a bigint.
 */
function getTotalTroveSupplyLiquity(troveAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var troveContract, l1TotalSupply, e_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    troveContract = this.getTroveContract(troveAddress);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, troveContract.get_l1_total_supply()];
                case 2:
                    l1TotalSupply = _a.sent();
                    return [2 /*return*/, l1TotalSupply];
                case 3:
                    e_12 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_12 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getTotalTroveSupplyLiquity = getTotalTroveSupplyLiquity;
/**
 * Retrieves the debt of a specific user in a Trove
 * @param this - The NimboraSDK instance.
 * @param props - The GetUserDebtLiquityProps object containing troveAddress and userAddress.
 * @returns A promise that resolves to the user's debt in the Trove as a bigint.
 */
function getUserDebtLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, userAddress, troveContract, userDebt, e_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    troveAddress = props.troveAddress, userAddress = props.userAddress;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    troveContract = this.getTroveContract(troveAddress);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, troveContract.get_user_debt(userAddress)];
                case 2:
                    userDebt = _a.sent();
                    return [2 /*return*/, userDebt];
                case 3:
                    e_13 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_13 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getUserDebtLiquity = getUserDebtLiquity;
/**
 * Retrieves the total supply of LUSD tokens.
 * @param this - The NimboraSDK instance.
 * @returns A promise that resolves to the total supply of LUSD tokens as a bigint.
 */
function getLUSDTotalSupply() {
    return __awaiter(this, void 0, void 0, function () {
        var lusdAddress, lusdTotalSupply;
        return __generator(this, function (_a) {
            lusdAddress = (0, addresses_1.getLusdAddress)(this.chainId);
            lusdTotalSupply = this.getTotalSupply(lusdAddress);
            return [2 /*return*/, lusdTotalSupply];
        });
    });
}
exports.getLUSDTotalSupply = getLUSDTotalSupply;
/**
 * Retrieves the timestamp when a batch has been launched
 * @param this - The NimboraSDK instance.
 * @param props - contain trove adddress and nonce
 * @returns A promise that resolves the batch timestamp when launched as a bigint.
 */
function getTimestampClosedBatchLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, batchNonce, troveContract, timestampClosedBatch, e_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    troveAddress = props.troveAddress, batchNonce = props.batchNonce;
                    if (!this.checkTrove(troveAddress)) {
                        throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.NOT_SUPPORTED_TROVE });
                    }
                    troveContract = this.getTroveContract(troveAddress);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, troveContract.get_timestamp_closed_batch(batchNonce)];
                case 2:
                    timestampClosedBatch = _a.sent();
                    return [2 /*return*/, timestampClosedBatch];
                case 3:
                    e_14 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_14 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getTimestampClosedBatchLiquity = getTimestampClosedBatchLiquity;
/**
 * Retrieves the timestamp when a batch has been launched
 * @param this - The NimboraSDK instance.
 * @param troveAddress - trove address
 * @returns A promise that retuns a boolean  when launched as a bigint.
 */
function isRedistributionLiquity(troveAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var troveTotalDebt, troveTotalSupply, e_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, this.getTotalTroveDebtLiquity(troveAddress)];
                case 1:
                    troveTotalDebt = _a.sent();
                    return [4 /*yield*/, this.getTotalTroveSupplyLiquity(troveAddress)];
                case 2:
                    troveTotalSupply = _a.sent();
                    return [2 /*return*/, (troveTotalDebt !== troveTotalSupply)];
                case 3:
                    e_15 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_15 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.isRedistributionLiquity = isRedistributionLiquity;
/**
 * Calculates the required gas fee to participate in the current batch in Liquity.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove and user information.
 * @returns A promise that resolves to the required gas fee as a bigint.
 */
function getRequiredGasFeeToParticipateCurrrentBatchLiquity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var troveAddress, closeBatch, userAddress, currentNounce, zeroBigInt, totalRequiredGasFeeToCloseBatch, getUserGasInBatchLiquityProps, gasFeesSpent, batchGasFeePerUserLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    troveAddress = props.troveAddress, closeBatch = props.closeBatch, userAddress = props.userAddress;
                    return [4 /*yield*/, this.getBatchCounterLiquity(troveAddress)];
                case 1:
                    currentNounce = _a.sent();
                    zeroBigInt = BigInt(0);
                    if (!(closeBatch == true)) return [3 /*break*/, 3];
                    return [4 /*yield*/, this.getTotalRequiredGasFeeToCloseBatchLiquity(troveAddress)];
                case 2:
                    totalRequiredGasFeeToCloseBatch = _a.sent();
                    return [2 /*return*/, (totalRequiredGasFeeToCloseBatch)];
                case 3:
                    getUserGasInBatchLiquityProps = {
                        troveAddress: troveAddress,
                        batchNonce: parseFloat(currentNounce.toString()),
                        userAddress: userAddress
                    };
                    return [4 /*yield*/, this.getUserGasInBatchLiquity(getUserGasInBatchLiquityProps)];
                case 4:
                    gasFeesSpent = _a.sent();
                    if (!(gasFeesSpent == zeroBigInt)) return [3 /*break*/, 6];
                    return [4 /*yield*/, this.getBatchGasFeePerUserLiquity(troveAddress)];
                case 5:
                    batchGasFeePerUserLiquity = _a.sent();
                    return [2 /*return*/, (batchGasFeePerUserLiquity)];
                case 6: return [2 /*return*/, (zeroBigInt)];
            }
        });
    });
}
exports.getRequiredGasFeeToParticipateCurrrentBatchLiquity = getRequiredGasFeeToParticipateCurrrentBatchLiquity;
