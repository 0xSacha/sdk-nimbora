"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NimboraSDK = void 0;
var starknet_1 = require("starknet");
var types_1 = require("./config/types");
var contracts_1 = require("./config/contracts");
var liquity_1 = require("./liquity");
var errorWrapper_1 = require("./utils/errorWrapper");
var web3Utils_1 = require("./utils/web3Utils");
var NimboraSDK = /** @class */ (function () {
    function NimboraSDK(provider, chainId) {
        // Web3 Utils
        this.getBalance = web3Utils_1.getBalance.bind(this);
        this.getAllowance = web3Utils_1.getAllowance.bind(this);
        this.getTotalSupply = web3Utils_1.getTotalSupply.bind(this);
        this.getGasPrice = web3Utils_1.getGasPrice.bind(this);
        this.buildApproveCall = web3Utils_1.buildApproveCall.bind(this);
        this.estimateInvokeFee = web3Utils_1.estimateInvokeFee.bind(this);
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
        this.getTimestampClosedBatchLiquity = liquity_1.getTimestampClosedBatchLiquity.bind(this);
        this.getTotalTroveSupplyLiquity = liquity_1.getTotalTroveSupplyLiquity.bind(this);
        this.isRedistributionLiquity = liquity_1.isRedistributionLiquity.bind(this);
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
        this.handleBorrowLiquityManual = liquity_1.handleBorrowLiquityManual.bind(this);
        this.handleRepayLiquityManual = liquity_1.handleRepayLiquityManual.bind(this);
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
        if (chainId == starknet_1.constants.StarknetChainId.SN_GOERLI2) {
            throw new errorWrapper_1.ErrorWrapper({ code: types_1.ERROR_CODE.UNSUPPORTED_CHAIN_ID });
        }
        else {
            this.chainId = chainId;
        }
    }
    return NimboraSDK;
}());
exports.NimboraSDK = NimboraSDK;
