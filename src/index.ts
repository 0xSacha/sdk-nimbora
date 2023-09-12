import { constants, Account, Provider, SignerInterface } from 'starknet';
import { getEthContract, getTokenContract, getLiquityManagerContract, getTroveContract, getLusdContract, getOracleContract } from '@/config/contracts';
import { getBatchGasUnitLiquity, getBatchGasUnitPerUserLiquity, getBatchGasFeePerUserLiquity, getGasTankLiquity, getAllowanceLiquity, getBatchCounterLiquity, getLastHandledBatchNonceLiquity, getUsersInBatchLiquity, getUserAmountInBatchLiquity, getUserGasInBatchLiquity, getNumberOfUsersToCloseBatchLiquity, getTotalRequiredGasFeeToCloseBatchLiquity, getRemainingGasFeeToCloseBatch, getTotalTroveDebtLiquity, getUserDebtLiquity, getLUSDTotalSupply, getRequiredGasFeeToParticipateCurrrentBatchLiquity, checkAllowanceBorrowLiquity, checkAllowanceRepayLiquity, checkBalanceBorrowLiquity, checkTrove, buildCallDataApproveBorrowLiquity, buildCallDataApproveRepayLiquity, buildCallDataBorrowLiquity, buildCallDataRepayLiquity, checkBalanceRepayLiquity, handleBorrowLiquity, handleRepayLiquity } from '@/liquity';
import { ErrorWrapper } from './utils/errorWrapper';
import { ERROR_CODE } from './config/types';
import { getBalance, getAllowance, getTotalSupply, getGasPrice } from '@/utils/web3Utils';

export class NimboraSDK {
  protected provider: Account | Provider;
  protected signer: SignerInterface | undefined;
  protected chainId!: constants.StarknetChainId;

  constructor(provider: Account | Provider | undefined) {
    if (!provider) {
      throw new ErrorWrapper({ code: ERROR_CODE.PROVIDER_REQUIRED });
    }
    this.provider = provider;

    try {
      this.signer = (provider as Account).signer;
    } catch (e) {
      this.signer = undefined;
    }
    this.checkChainId(provider);
  }

  async checkChainId(provider: Account | Provider) {
    const chainId = await provider.getChainId();

    if (chainId !== constants.StarknetChainId.SN_MAIN && chainId !== constants.StarknetChainId.SN_GOERLI) {
      throw new ErrorWrapper({ code: ERROR_CODE.UNSUPPORTED_CHAIN_ID });
    } else {
      this.chainId = chainId;
    }
  }

  // Web3 Utils
  protected getBalance = getBalance.bind(this);
  protected getAllowance = getAllowance.bind(this);
  protected getTotalSupply = getTotalSupply.bind(this);
  protected getGasPrice = getGasPrice.bind(this)

  ////////////////
  /// Liquity  ///
  ////////////////

  // Contracts Providers
  protected getLiquityManagerContract = getLiquityManagerContract.bind(this);
  protected getTokenContract = getTokenContract.bind(this)
  protected getEthContract = getEthContract.bind(this);
  protected getLusdContract = getLusdContract.bind(this)
  protected getTroveContract = getTroveContract.bind(this)
  protected getOracleContract = getOracleContract.bind(this)

  // Getters
  protected getBatchGasUnitLiquity = getBatchGasUnitLiquity.bind(this);
  protected getBatchGasUnitPerUserLiquity = getBatchGasUnitPerUserLiquity.bind(this);
  protected getBatchGasFeePerUserLiquity = getBatchGasFeePerUserLiquity.bind(this);
  protected getGasTankLiquity = getGasTankLiquity.bind(this);
  protected getAllowanceLiquity = getAllowanceLiquity.bind(this);
  protected getBatchCounterLiquity = getBatchCounterLiquity.bind(this);
  protected getLastHandledBatchNonceLiquity = getLastHandledBatchNonceLiquity.bind(this);
  protected getUsersInBatchLiquity = getUsersInBatchLiquity.bind(this);
  protected getUserAmountInBatchLiquity = getUserAmountInBatchLiquity.bind(this);
  protected getUserGasInBatchLiquity = getUserGasInBatchLiquity.bind(this);
  protected getNumberOfUsersToCloseBatchLiquity = getNumberOfUsersToCloseBatchLiquity.bind(this);
  protected getTotalRequiredGasFeeToCloseBatchLiquity = getTotalRequiredGasFeeToCloseBatchLiquity.bind(this);
  protected getTotalTroveDebtLiquity = getTotalTroveDebtLiquity.bind(this);
  protected getRemainingGasFeeToCloseBatch = getRemainingGasFeeToCloseBatch.bind(this)
  protected getUserDebtLiquity = getUserDebtLiquity.bind(this);
  protected getLUSDTotalSupply = getLUSDTotalSupply.bind(this);
  protected getRequiredGasFeeToParticipateCurrrentBatchLiquity = getRequiredGasFeeToParticipateCurrrentBatchLiquity.bind(this)

  // Checkers
  protected checkTrove = checkTrove.bind(this)
  protected checkBalanceBorrowLiquity = checkBalanceBorrowLiquity.bind(this);
  protected checkBalanceRepayLiquity = checkBalanceRepayLiquity.bind(this);
  protected checkAllowanceBorrowLiquity = checkAllowanceBorrowLiquity.bind(this);
  protected checkAllowanceRepayLiquity = checkAllowanceRepayLiquity.bind(this);

  // Builders
  protected buildCallDataApproveBorrowLiquity = buildCallDataApproveBorrowLiquity.bind(this)
  protected buildCallDataApproveRepayLiquity = buildCallDataApproveRepayLiquity.bind(this)
  protected buildCallDataBorrowLiquity = buildCallDataBorrowLiquity.bind(this)
  protected buildCallDataRepayLiquity = buildCallDataRepayLiquity.bind(this)

  // Handlers
  protected handleBorrowLiquity = handleBorrowLiquity.bind(this)
  protected handleRepayLiquity = handleRepayLiquity.bind(this)
}
