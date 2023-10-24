import { constants, Account, Provider, SignerInterface } from 'starknet';
import { ERROR_CODE } from './config/types';
import { getEthContract, getTokenContract, getLiquityManagerContract, getTroveContract, getLusdContract, getOracleContract } from './config/contracts';
import { getBatchGasUnitLiquity, getBatchGasUnitPerUserLiquity, getBatchGasFeePerUserLiquity, getGasTankLiquity, getAllowanceLiquity, getBatchCounterLiquity, getLastHandledBatchNonceLiquity, getUsersInBatchLiquity, getUserAmountInBatchLiquity, getUserGasInBatchLiquity, getNumberOfUsersToCloseBatchLiquity, getTotalRequiredGasFeeToCloseBatchLiquity, getRemainingGasFeeToCloseBatch, getTotalTroveDebtLiquity, getUserDebtLiquity, getLUSDTotalSupply, getRequiredGasFeeToParticipateCurrrentBatchLiquity, checkAllowanceBorrowLiquity, checkAllowanceRepayLiquity, checkBalanceBorrowLiquity, checkTrove, buildCallDataApproveBorrowLiquity, buildCallDataApproveRepayLiquity, buildCallDataBorrowLiquity, buildCallDataRepayLiquity, checkBalanceRepayLiquity, handleBorrowLiquity, handleRepayLiquity, handleBorrowLiquityManual, handleRepayLiquityManual, getTimestampClosedBatchLiquity, getTotalTroveSupplyLiquity, isRedistributionLiquity, buildCallDataBatchLiquity, handleBatchLiquityManual } from './liquity';
import { ErrorWrapper } from './utils/errorWrapper';
import { getBalance, getAllowance, getTotalSupply, getGasPrice, buildApproveCall, estimateInvokeFee } from './utils/web3Utils';

export class NimboraSDK {
  public provider: Account | Provider;
  public signer: SignerInterface | undefined;
  public chainId: constants.StarknetChainId;

  constructor(provider: Account | Provider | undefined, chainId: constants.StarknetChainId) {
    if (!provider) {
      throw new ErrorWrapper({ code: ERROR_CODE.PROVIDER_REQUIRED });
    }
    this.provider = provider;

    try {
      this.signer = (provider as Account).signer;
    } catch (e) {
      this.signer = undefined;
    }

    if (chainId == constants.StarknetChainId.SN_GOERLI2) {
      throw new ErrorWrapper({ code: ERROR_CODE.UNSUPPORTED_CHAIN_ID });
    } else {
      this.chainId = chainId;
    }
  }

  // Web3 Utils
  public getBalance = getBalance.bind(this);
  public getAllowance = getAllowance.bind(this);
  public getTotalSupply = getTotalSupply.bind(this);
  public getGasPrice = getGasPrice.bind(this);
  public buildApproveCall = buildApproveCall.bind(this);
  public estimateInvokeFee = estimateInvokeFee.bind(this);

  ////////////////
  /// Liquity  ///
  ////////////////

  // Contracts Providers
  public getLiquityManagerContract = getLiquityManagerContract.bind(this);
  public getTokenContract = getTokenContract.bind(this)
  public getEthContract = getEthContract.bind(this);
  public getLusdContract = getLusdContract.bind(this)
  public getTroveContract = getTroveContract.bind(this)
  public getOracleContract = getOracleContract.bind(this)


  // Getters
  public getBatchGasUnitLiquity = getBatchGasUnitLiquity.bind(this);
  public getBatchGasUnitPerUserLiquity = getBatchGasUnitPerUserLiquity.bind(this);
  public getBatchGasFeePerUserLiquity = getBatchGasFeePerUserLiquity.bind(this);
  public getGasTankLiquity = getGasTankLiquity.bind(this);
  public getAllowanceLiquity = getAllowanceLiquity.bind(this);
  public getBatchCounterLiquity = getBatchCounterLiquity.bind(this);
  public getLastHandledBatchNonceLiquity = getLastHandledBatchNonceLiquity.bind(this);
  public getUsersInBatchLiquity = getUsersInBatchLiquity.bind(this);
  public getUserAmountInBatchLiquity = getUserAmountInBatchLiquity.bind(this);
  public getUserGasInBatchLiquity = getUserGasInBatchLiquity.bind(this);
  public getNumberOfUsersToCloseBatchLiquity = getNumberOfUsersToCloseBatchLiquity.bind(this);
  public getTotalRequiredGasFeeToCloseBatchLiquity = getTotalRequiredGasFeeToCloseBatchLiquity.bind(this);
  public getTotalTroveDebtLiquity = getTotalTroveDebtLiquity.bind(this);
  public getRemainingGasFeeToCloseBatch = getRemainingGasFeeToCloseBatch.bind(this)
  public getUserDebtLiquity = getUserDebtLiquity.bind(this);
  public getLUSDTotalSupply = getLUSDTotalSupply.bind(this);
  public getRequiredGasFeeToParticipateCurrrentBatchLiquity = getRequiredGasFeeToParticipateCurrrentBatchLiquity.bind(this)
  public getTimestampClosedBatchLiquity = getTimestampClosedBatchLiquity.bind(this);
  public getTotalTroveSupplyLiquity = getTotalTroveSupplyLiquity.bind(this);
  public isRedistributionLiquity = isRedistributionLiquity.bind(this);


  // Checkers
  public checkTrove = checkTrove.bind(this)
  public checkBalanceBorrowLiquity = checkBalanceBorrowLiquity.bind(this);
  public checkBalanceRepayLiquity = checkBalanceRepayLiquity.bind(this);
  public checkAllowanceBorrowLiquity = checkAllowanceBorrowLiquity.bind(this);
  public checkAllowanceRepayLiquity = checkAllowanceRepayLiquity.bind(this);

  // Builders
  public buildCallDataApproveBorrowLiquity = buildCallDataApproveBorrowLiquity.bind(this)
  public buildCallDataApproveRepayLiquity = buildCallDataApproveRepayLiquity.bind(this)
  public buildCallDataBorrowLiquity = buildCallDataBorrowLiquity.bind(this)
  public buildCallDataRepayLiquity = buildCallDataRepayLiquity.bind(this)
  public buildCallDataBatchLiquity = buildCallDataBatchLiquity.bind(this)

  // Handlers
  public handleBorrowLiquity = handleBorrowLiquity.bind(this)
  public handleRepayLiquity = handleRepayLiquity.bind(this)
  public handleBorrowLiquityManual = handleBorrowLiquityManual.bind(this)
  public handleRepayLiquityManual = handleRepayLiquityManual.bind(this)
  public handleBatchLiquityManual = handleBatchLiquityManual.bind(this)
}
