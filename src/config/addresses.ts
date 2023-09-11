import { constants } from 'starknet';

export const ETH_BY_CHAIN_ID: {
  [key in constants.StarknetChainId]: string;
} = {
  [constants.StarknetChainId.SN_GOERLI]: '0x9ee91F9f426fA633d227f7a9b000E28b9dfd8599',
  [constants.StarknetChainId.SN_MAIN]: '',
  [constants.StarknetChainId.SN_GOERLI2]: '',
};

export const FAST_WITHDRAWAL_BY_CHAIN_ID: {
  [key in constants.StarknetChainId]: string;
} = {
  [constants.StarknetChainId.SN_MAIN]: '',
  [constants.StarknetChainId.SN_GOERLI]: '0x0b1ba0af832d7c05fd64161e0db78e85978e8082',
  [constants.StarknetChainId.SN_GOERLI2]: ''
};


export const SUPPORTED_TOKENS_BY_CHAIN_ID: {
  [key in constants.StarknetChainId]: [string];
} = {
  [constants.StarknetChainId.SN_MAIN]: [""],
  [constants.StarknetChainId.SN_GOERLI]: [""],
  [constants.StarknetChainId.SN_GOERLI2]: [""]
};

export const getEthAddress = (chainId: constants.StarknetChainId): string => ETH_BY_CHAIN_ID[chainId];
export const getFastWithdrawalAddress = (chainId: constants.StarknetChainId): string => FAST_WITHDRAWAL_BY_CHAIN_ID[chainId];
export const getSupportedTokens = (chainId: constants.StarknetChainId): [string] => SUPPORTED_TOKENS_BY_CHAIN_ID[chainId];
export const isSupportedToken = (chainId: constants.StarknetChainId, tokenAddress: string): boolean => getSupportedTokens(chainId).includes(tokenAddress)