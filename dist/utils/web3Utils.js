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
exports.isValidEthereumAddress = exports.getGasPrice = exports.getTotalSupply = exports.getBalance = exports.getAllowance = void 0;
var types_1 = require("../config/types");
var errorWrapper_1 = require("../utils/errorWrapper");
var starknet_1 = require("starknet");
/**
 * Retrieves the allowance for a spender to spend tokens on behalf of a user.
 * @param props - The properties required for the operation.
 * @returns A promise that resolves to the allowance amount as a bigint.
 */
function getAllowance(props) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenAddress, userAddress, spender, tokenContract, allowance, allowanceBn, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tokenAddress = props.tokenAddress, userAddress = props.userAddress, spender = props.spender;
                    tokenContract = this.getTokenContract(tokenAddress);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, tokenContract.allowance(userAddress, spender)];
                case 2:
                    allowance = _a.sent();
                    allowanceBn = starknet_1.uint256.uint256ToBN(allowance);
                    return [2 /*return*/, allowanceBn];
                case 3:
                    e_1 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_1 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getAllowance = getAllowance;
/**
 * Retrieves the balance of tokens for a user.
 * @param props - The properties required for the operation.
 * @returns A promise that resolves to the balance amount as a bigint.
 */
function getBalance(props) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenAddress, userAddress, tokenContract, balance, balanceBn, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tokenAddress = props.tokenAddress, userAddress = props.userAddress;
                    tokenContract = this.getTokenContract(tokenAddress);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, tokenContract.balanceOf(userAddress)];
                case 2:
                    balance = _a.sent();
                    balanceBn = starknet_1.uint256.uint256ToBN(balance.balance);
                    return [2 /*return*/, balanceBn];
                case 3:
                    e_2 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_2 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getBalance = getBalance;
/**
 * Retrieves the total supply of tokens for a given token contract.
 * @param this - The NimboraSDK instance.
 * @param tokenAddress - The address of the token contract.
 * @returns A promise that resolves to the total supply amount as a bigint.
 */
function getTotalSupply(tokenAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenContract, totalSupply, totalSupplyBn, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tokenContract = this.getTokenContract(tokenAddress);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, tokenContract.totalSupply()];
                case 2:
                    totalSupply = _a.sent();
                    totalSupplyBn = starknet_1.uint256.uint256ToBN(totalSupply);
                    return [2 /*return*/, totalSupplyBn];
                case 3:
                    e_3 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_3 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getTotalSupply = getTotalSupply;
/**
 * Retrieves the current gas price from the oracle contract.
 * @param this - The NimboraSDK instance.
 * @returns A promise that resolves to the current gas price as a bigint.
 */
function getGasPrice() {
    return __awaiter(this, void 0, void 0, function () {
        var oracleContact, gasPrice, gasPriceBn, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    oracleContact = this.getOracleContract();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, oracleContact.get_l1_gas_price()];
                case 2:
                    gasPrice = _a.sent();
                    gasPriceBn = starknet_1.uint256.uint256ToBN(gasPrice);
                    return [2 /*return*/, gasPriceBn];
                case 3:
                    e_4 = _a.sent();
                    throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.CANNOT_EXECUTE_CALL, error: e_4 });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getGasPrice = getGasPrice;
/**
 * Checks if a given string is a valid Ethereum address.
 * @param address - The Ethereum address to validate.
 * @returns `true` if the address is valid, `false` otherwise.
 */
function isValidEthereumAddress(address) {
    // Ethereum addresses are 40-character hexadecimal strings
    var ethereumAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;
    return ethereumAddressRegex.test(address);
}
exports.isValidEthereumAddress = isValidEthereumAddress;
