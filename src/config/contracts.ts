import { NimboraSDK } from '..';
import { getLiquityManagerAddress, getOracleAddress, getEthAddress, getLusdAddress } from './addresses';
import { Contract } from 'starknet';
import Erc20Abi from '../abi/erc20.json';
import TroveAbi from '../abi/trove.json';
import LiquityManagerAbi from '../abi/liquity_manager.json';
import OracleAbi from '../abi/oracle.json';

export function getLiquityManagerContract(this: NimboraSDK): Contract {
  const { chainId, provider } = this;
  const liquityManagerAddress = getLiquityManagerAddress(chainId);
  const liquityManagerContract = new Contract(LiquityManagerAbi, liquityManagerAddress, provider);
  return liquityManagerContract;
}


export function getTroveContract(this: NimboraSDK, troveAddress: string): Contract {
  const { provider } = this;
  const troveContract = new Contract(TroveAbi, troveAddress, provider);
  return troveContract;
}

export function getOracleContract(this: NimboraSDK): Contract {
  const { chainId, provider } = this;
  const oracleAddress = getOracleAddress(chainId);
  const oracleContract = new Contract(OracleAbi, oracleAddress, provider);
  return oracleContract;
}

export function getEthContract(this: NimboraSDK): Contract {
  const { chainId } = this;
  const ethAddress = getEthAddress(chainId);
  return this.getTokenContract(ethAddress)
}

export function getLusdContract(this: NimboraSDK): Contract {
  const { chainId } = this;
  const lusdAddress = getLusdAddress(chainId);
  return this.getTokenContract(lusdAddress)
}

export function getTokenContract(this: NimboraSDK, tokenAddress: string): Contract {
  const { provider } = this;
  const erc20Contract = new Contract(Erc20Abi, tokenAddress, provider);
  return erc20Contract;
}




