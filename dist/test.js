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
var starknet_1 = require("starknet");
var _1 = require(".");
describe('NimboraSDK Integration Tests', function () {
    var sdk;
    var accountSdk;
    var token = "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
    var ad1 = "0x0259cdc9a9a43ac8ce627a8341c3687cc1e6e97b9e6a1a4b80dbc3d6e9ce734b";
    var ad2 = "0x02fa12e47978C846C5731A3cAa0Cc6e87cA4059993b0d92Fad6C8c47EA77894F";
    // let trove = "0x057f1197af14b203fd3839bfb4e3830d636ac8502c3fcc639b98279deb059087";
    // let trove_mainnet = "0x03580a65260563b5511ddf2eafb83d6b309dce7fc25271df8c040a437f09a399";
    var trove = "0x057f1197af14b203fd3839bfb4e3830d636ac8502c3fcc639b98279deb059087";
    beforeAll(function () {
        var provider_testnet = new starknet_1.Provider({
            rpc: {
                nodeUrl: "https://starknet-goerli.infura.io/v3/b084e10c633d411db2ecc557100fc3ab"
            }
        });
        // const provider_mainnet = new Provider({
        //     rpc: {
        //         nodeUrl: "https://starknet-mainnet.infura.io/v3/b084e10c633d411db2ecc557100fc3ab"
        //     }
        // });
        sdk = new _1.NimboraSDK(provider_testnet, starknet_1.constants.StarknetChainId.SN_GOERLI);
        // const accountAddress = ""
        // const accountPk = ""
        // const account: Account = new Account(provider_testnet, accountAddress, accountPk)
        // accountSdk = new NimboraSDK(account, constants.StarknetChainId.SN_GOERLI);
    });
    it('balance defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var balance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getBalance({ tokenAddress: token, userAddress: ad1 })];
                case 1:
                    balance = _a.sent();
                    expect(balance).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('total Supply defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var totalSupply;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getTotalSupply(token)];
                case 1:
                    totalSupply = _a.sent();
                    expect(totalSupply).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('allowance defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var allowance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getAllowance({ tokenAddress: token, userAddress: ad1, spender: ad2 })];
                case 1:
                    allowance = _a.sent();
                    expect(allowance).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('gas price defined defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gasPrice;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getGasPrice()];
                case 1:
                    gasPrice = _a.sent();
                    expect(gasPrice).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('lusd supply defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var lusdSupply;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getLUSDTotalSupply()];
                case 1:
                    lusdSupply = _a.sent();
                    expect(lusdSupply).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('totalTroveDebtLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var totalTroveDebtLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getTotalTroveDebtLiquity(trove)];
                case 1:
                    totalTroveDebtLiquity = _a.sent();
                    expect(totalTroveDebtLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getBatchGasUnitLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var batchGasUnitLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getBatchGasUnitLiquity(trove)];
                case 1:
                    batchGasUnitLiquity = _a.sent();
                    expect(batchGasUnitLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getBatchGasUnitPerUserLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var batchGasUnitPerUserLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getBatchGasUnitPerUserLiquity(trove)];
                case 1:
                    batchGasUnitPerUserLiquity = _a.sent();
                    expect(batchGasUnitPerUserLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getBatchGasFeePerUserLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var batchGasFeePerUserLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getBatchGasFeePerUserLiquity(trove)];
                case 1:
                    batchGasFeePerUserLiquity = _a.sent();
                    expect(batchGasFeePerUserLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('chain id  defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var chainId;
        return __generator(this, function (_a) {
            chainId = sdk.chainId;
            expect(chainId).toBeDefined();
            return [2 /*return*/];
        });
    }); });
    it('getGasTankLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var gasTankLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getGasTankLiquity(trove)];
                case 1:
                    gasTankLiquity = _a.sent();
                    expect(gasTankLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getAllowanceLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var allowanceLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getAllowanceLiquity({ troveAddress: trove, userAddress: ad1 })];
                case 1:
                    allowanceLiquity = _a.sent();
                    expect(allowanceLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getBatchCounterLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var batchCounterLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getBatchCounterLiquity(trove)];
                case 1:
                    batchCounterLiquity = _a.sent();
                    expect(batchCounterLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getLastHandledBatchNonceLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var lastHandledBatchNonceLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getLastHandledBatchNonceLiquity(trove)];
                case 1:
                    lastHandledBatchNonceLiquity = _a.sent();
                    expect(lastHandledBatchNonceLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getUsersInBatchLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var usersInBatchLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getUsersInBatchLiquity({ troveAddress: trove, batchNonce: 123 })];
                case 1:
                    usersInBatchLiquity = _a.sent();
                    expect(usersInBatchLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getUserAmountInBatchLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var userAmountInBatchLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getUserAmountInBatchLiquity({ troveAddress: trove, batchNonce: 123, userAddress: ad1 })];
                case 1:
                    userAmountInBatchLiquity = _a.sent();
                    expect(userAmountInBatchLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getUserGasInBatchLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var userGasInBatchLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getUserGasInBatchLiquity({ troveAddress: trove, batchNonce: 123, userAddress: ad1 })];
                case 1:
                    userGasInBatchLiquity = _a.sent();
                    expect(userGasInBatchLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getNumberOfUsersToCloseBatchLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var numberOfUsersToCloseBatchLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getNumberOfUsersToCloseBatchLiquity(trove)];
                case 1:
                    numberOfUsersToCloseBatchLiquity = _a.sent();
                    expect(numberOfUsersToCloseBatchLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getTotalRequiredGasFeeToCloseBatchLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var totalRequiredGasFeeToCloseBatchLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getTotalRequiredGasFeeToCloseBatchLiquity(trove)];
                case 1:
                    totalRequiredGasFeeToCloseBatchLiquity = _a.sent();
                    expect(totalRequiredGasFeeToCloseBatchLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getRemainingGasFeeToCloseBatch defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var remainingGasFeeToCloseBatch;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getRemainingGasFeeToCloseBatch(trove)];
                case 1:
                    remainingGasFeeToCloseBatch = _a.sent();
                    expect(remainingGasFeeToCloseBatch).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getUserDebtLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var userDebtLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getUserDebtLiquity({ troveAddress: trove, userAddress: ad1 })];
                case 1:
                    userDebtLiquity = _a.sent();
                    expect(userDebtLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getRequiredGasFeeToParticipateCurrrentBatchLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var requiredGasFeeToParticipateCurrrentBatchLiquity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getRequiredGasFeeToParticipateCurrrentBatchLiquity({ troveAddress: trove, closeBatch: false, userAddress: ad1 })];
                case 1:
                    requiredGasFeeToParticipateCurrrentBatchLiquity = _a.sent();
                    expect(requiredGasFeeToParticipateCurrrentBatchLiquity).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getEthContract defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ethContract;
        return __generator(this, function (_a) {
            ethContract = sdk.getEthContract();
            expect(ethContract.address).toBeDefined();
            return [2 /*return*/];
        });
    }); });
    it('getTimestampClosedBatchLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getTimestampClosedBatchLiquity({ troveAddress: trove, batchNonce: 8 })];
                case 1:
                    ts = _a.sent();
                    expect(ts).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('getTotalTroveSupplyLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var tsupply;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.getTotalTroveSupplyLiquity(trove)];
                case 1:
                    tsupply = _a.sent();
                    expect(tsupply).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('isRedistributionLiquity defined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var isRedistribution;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sdk.isRedistributionLiquity(trove)];
                case 1:
                    isRedistribution = _a.sent();
                    expect(isRedistribution).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    // it('Get borrow invoke fees defined', async () => {
    //     let callsToExecute: Call[] = [];
    //     const ethAmount = BigInt("1000000000000000")
    //     const requiredGasFeeToParticipateCurrrentBatchLiquity = await accountSdk.getRequiredGasFeeToParticipateCurrrentBatchLiquity({ troveAddress: trove, closeBatch: false, userAddress: ad1 });
    //     let buildCallDataApproveBorrowLiquityProps: BuildCallDataApproveBorrowLiquityProps = {
    //         troveAddress: trove,
    //         ethAmount: ethAmount,
    //         gasRequired: requiredGasFeeToParticipateCurrrentBatchLiquity
    //     };
    //     let ethApproveCall = accountSdk.buildCallDataApproveBorrowLiquity(buildCallDataApproveBorrowLiquityProps);
    //     callsToExecute.push(ethApproveCall);
    //     let buildCallDataBorrowLiquityProps: BuildCallDataBorrowLiquityProps = {
    //         troveAddress: trove,
    //         ethAmount: ethAmount,
    //         gasRequired: requiredGasFeeToParticipateCurrrentBatchLiquity
    //     };
    //     let borrowCall = accountSdk.buildCallDataBorrowLiquity(buildCallDataBorrowLiquityProps);
    //     callsToExecute.push(borrowCall);
    //     const maxGasFeeInvoke = await accountSdk.estimateInvokeFee(callsToExecute)
    //     console.log(maxGasFeeInvoke)
    //     expect(maxGasFeeInvoke).toBeDefined();
    // });
    // it('Get repay invoke fees defined', async () => {
    //     let callsToExecute: Call[] = [];
    //     const lusdAmount = BigInt("1000000000000000")
    //     const requiredGasFeeToParticipateCurrrentBatchLiquity = await accountSdk.getRequiredGasFeeToParticipateCurrrentBatchLiquity({ troveAddress: trove, closeBatch: false, userAddress: ad1 });
    //     let buildCallDataApproveRepayLiquityProps: BuildCallDataApproveRepayLiquityProps = {
    //         troveAddress: trove,
    //         lusdAmount: lusdAmount,
    //         gasRequired: requiredGasFeeToParticipateCurrrentBatchLiquity,
    //     };
    //     let buildCallDataApproveRepayLiquityRes: BuildCallDataApproveRepayLiquityRes = accountSdk.buildCallDataApproveRepayLiquity(buildCallDataApproveRepayLiquityProps);
    //     if (buildCallDataApproveRepayLiquityRes.ethApproveCall) {
    //         callsToExecute.push(buildCallDataApproveRepayLiquityRes.ethApproveCall);
    //     }
    //     if (buildCallDataApproveRepayLiquityRes.lusdApproveCall) {
    //         callsToExecute.push(buildCallDataApproveRepayLiquityRes.lusdApproveCall);
    //     }
    //     let buildCallDataBorrowLiquityProps: BuildCallDataRepayLiquityProps = {
    //         troveAddress: trove,
    //         lusdAmount: lusdAmount,
    //         gasRequired: requiredGasFeeToParticipateCurrrentBatchLiquity
    //     };
    //     let repayCall = accountSdk.buildCallDataRepayLiquity(buildCallDataBorrowLiquityProps);
    //     callsToExecute.push(repayCall);
    //     const maxGasFeeInvoke = await accountSdk.estimateInvokeFee(callsToExecute)
    //     console.log(maxGasFeeInvoke)
    //     expect(maxGasFeeInvoke).toBeDefined();
    // });
});
