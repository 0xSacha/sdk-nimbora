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
exports.NimboraSDK = void 0;
var starknet_1 = require("starknet");
var contracts_1 = require("@/config/contracts");
var liquity_1 = require("@/liquity");
var errorWrapper_1 = require("./utils/errorWrapper");
var types_1 = require("./config/types");
var web3Utils_1 = require("@/utils/web3Utils");
var NimboraSDK = /** @class */ (function () {
    function NimboraSDK(provider) {
        // Web3 Utils
        this.getBalance = web3Utils_1.getBalance.bind(this);
        this.getAllowance = web3Utils_1.getAllowance.bind(this);
        this.getTotalSupply = web3Utils_1.getTotalSupply.bind(this);
        this.getGasPrice = web3Utils_1.getGasPrice.bind(this);
        ////////////////
        /// Liquity  ///
        ////////////////
        // Contracts Providers
        this.getLiquityManagerContract = contracts_1.getLiquityManagerContract.bind(this);
        this.getTokenContract = contracts_1.getTokenContract.bind(this);
        this.getEthContract = contracts_1.getEthContract.bind(this);
        this.getLusdContract = contracts_1.getLusdContract.bind(this);
        this.getTroveContract = contracts_1.getTroveContract.bind(this);
        this.getOracleContract = contracts_1.getOracleContract.bind(this);
        // Getters
        this.getBatchGasUnitLiquity = liquity_1.getBatchGasUnitLiquity.bind(this);
        this.getBatchGasUnitPerUserLiquity = liquity_1.getBatchGasUnitPerUserLiquity.bind(this);
        this.getBatchGasFeePerUserLiquity = liquity_1.getBatchGasFeePerUserLiquity.bind(this);
        this.getGasTankLiquity = liquity_1.getGasTankLiquity.bind(this);
        this.getAllowanceLiquity = liquity_1.getAllowanceLiquity.bind(this);
        this.getBatchCounterLiquity = liquity_1.getBatchCounterLiquity.bind(this);
        this.getLastHandledBatchNonceLiquity = liquity_1.getLastHandledBatchNonceLiquity.bind(this);
        this.getUsersInBatchLiquity = liquity_1.getUsersInBatchLiquity.bind(this);
        this.getUserAmountInBatchLiquity = liquity_1.getUserAmountInBatchLiquity.bind(this);
        this.getUserGasInBatchLiquity = liquity_1.getUserGasInBatchLiquity.bind(this);
        this.getNumberOfUsersToCloseBatchLiquity = liquity_1.getNumberOfUsersToCloseBatchLiquity.bind(this);
        this.getTotalRequiredGasFeeToCloseBatchLiquity = liquity_1.getTotalRequiredGasFeeToCloseBatchLiquity.bind(this);
        this.getTotalTroveDebtLiquity = liquity_1.getTotalTroveDebtLiquity.bind(this);
        this.getRemainingGasFeeToCloseBatch = liquity_1.getRemainingGasFeeToCloseBatch.bind(this);
        this.getUserDebtLiquity = liquity_1.getUserDebtLiquity.bind(this);
        this.getLUSDTotalSupply = liquity_1.getLUSDTotalSupply.bind(this);
        this.getRequiredGasFeeToParticipateCurrrentBatchLiquity = liquity_1.getRequiredGasFeeToParticipateCurrrentBatchLiquity.bind(this);
        // Checkers
        this.checkTrove = liquity_1.checkTrove.bind(this);
        this.checkBalanceBorrowLiquity = liquity_1.checkBalanceBorrowLiquity.bind(this);
        this.checkBalanceRepayLiquity = liquity_1.checkBalanceRepayLiquity.bind(this);
        this.checkAllowanceBorrowLiquity = liquity_1.checkAllowanceBorrowLiquity.bind(this);
        this.checkAllowanceRepayLiquity = liquity_1.checkAllowanceRepayLiquity.bind(this);
        // Builders
        this.buildCallDataApproveBorrowLiquity = liquity_1.buildCallDataApproveBorrowLiquity.bind(this);
        this.buildCallDataApproveRepayLiquity = liquity_1.buildCallDataApproveRepayLiquity.bind(this);
        this.buildCallDataBorrowLiquity = liquity_1.buildCallDataBorrowLiquity.bind(this);
        this.buildCallDataRepayLiquity = liquity_1.buildCallDataRepayLiquity.bind(this);
        // Handlers
        this.handleBorrowLiquity = liquity_1.handleBorrowLiquity.bind(this);
        this.handleRepayLiquity = liquity_1.handleRepayLiquity.bind(this);
        if (!provider) {
            throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.PROVIDER_REQUIRED });
        }
        this.provider = provider;
        try {
            this.signer = provider.signer;
        }
        catch (e) {
            this.signer = undefined;
        }
        this.checkChainId(provider);
    }
    NimboraSDK.prototype.checkChainId = function (provider) {
        return __awaiter(this, void 0, void 0, function () {
            var chainId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, provider.getChainId()];
                    case 1:
                        chainId = _a.sent();
                        if (chainId !== starknet_1.constants.StarknetChainId.SN_MAIN && chainId !== starknet_1.constants.StarknetChainId.SN_GOERLI) {
                            throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.UNSUPPORTED_CHAIN_ID });
                        }
                        else {
                            this.chainId = chainId;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return NimboraSDK;
}());
exports.NimboraSDK = NimboraSDK;
