import { constants, Account, Provider, SignerInterface } from 'starknet';
import { getFastWithdrawalContract, getEthContract, getTokenContract } from '@/config/contracts';
import { getAllowanceFw, getGasCostFw, getBalance, getLimitsFw, getFeesFw, quoteFw, getRefundDelayFw } from '@/fastWithdrawal/getters';
import { checkAllowanceFw, checkBalanceFw, checkLimitsFw } from '@/fastWithdrawal/checkers';
import { buildCallDataApproveFw, buildCallDataDepositFw } from '@/fastWithdrawal';

import { ErrorWrapper } from './utils/errorWrapper';
import { ERROR_CODE } from './config/types';

export class StarkGateSDK {
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

  // Contracts Providers
  protected getFastWithdrawalContract = getFastWithdrawalContract.bind(this);
  protected getTokenContract = getTokenContract.bind(this)
  protected getEthContract = getEthContract.bind(this);

  // Getters
  protected getBalance = getBalance.bind(this);
  protected getAllowanceFw = getAllowanceFw.bind(this);
  protected getLimitsFw = getLimitsFw.bind(this)
  protected getGasCostFw = getGasCostFw.bind(this);
  protected getFeesFw = getFeesFw.bind(this);
  protected getRefundDelayFw = getRefundDelayFw.bind(this)
  protected quoteFw = quoteFw.bind(this);

  // Checkers
  protected checkBalanceFw = checkBalanceFw.bind(this)
  protected checkAllowanceFw = checkAllowanceFw.bind(this);
  protected checkLimitsFw = checkLimitsFw.bind(this);

  // Builders
  protected buildCallDataApproveFw = buildCallDataApproveFw.bind(this)
  protected buildCallDataDepositFw = buildCallDataDepositFw.bind(this)


}
