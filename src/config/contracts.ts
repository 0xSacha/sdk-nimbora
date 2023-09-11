import * as fs from 'fs';
import { StarkGateSDK } from '..';
import { getEthAddress, getFastWithdrawalAddress } from './addresses';
import { Contract, json } from 'starknet';

export function getFastWithdrawalContract(this: StarkGateSDK): Contract {
  const { chainId, provider } = this;
  const fastWithdrawalAddress = getFastWithdrawalAddress(chainId);
  const compiledFastWithdrawal = json.parse(fs.readFileSync("../abi/fw_Fw.sierra.json").toString("ascii"));
  const fastWithdrawalContract = new Contract(compiledFastWithdrawal.abi, fastWithdrawalAddress, provider);
  return fastWithdrawalContract;
}

export function getEthContract(this: StarkGateSDK): Contract {
  const { chainId } = this;
  const ethAddress = getEthAddress(chainId);
  return this.getTokenContract(ethAddress)
}


export function getTokenContract(this: StarkGateSDK, tokenAddress: string): Contract {
  const { provider } = this;
  const compiledErc20 = json.parse(fs.readFileSync("../abi/fw_ERC20.sierra.json").toString("ascii"));
  const erc20Contract = new Contract(compiledErc20.abi, tokenAddress, provider);
  return erc20Contract;
}

