import { constants } from 'starknet';
import { TroveInfo } from './types';

/**
 * Mapping of LUSD token addresses by Starknet chain ID.
 */
export const LUSD_BY_CHAIN_ID: {
  [key in constants.StarknetChainId]: string;
} = {
  // Add descriptions for each chain ID
  [constants.StarknetChainId.SN_GOERLI]: '0x025731f5f9629ff74d1c5f787ad1ea0ebb9157210047f6c9e3a974f771550cf4',
  [constants.StarknetChainId.SN_MAIN]: '0x025731f5f9629ff74d1c5f787ad1ea0ebb9157210047f6c9e3a974f771550cf4',
  [constants.StarknetChainId.SN_GOERLI2]: '0x025731f5f9629ff74d1c5f787ad1ea0ebb9157210047f6c9e3a974f771550cf4',
};

/**
 * Mapping of Trove information arrays by Starknet chain ID.
 */
export const TROVES_BY_CHAIN_ID: {
  [key in constants.StarknetChainId]: TroveInfo[];
} = {
  // Add descriptions for each chain ID
  [constants.StarknetChainId.SN_GOERLI]: [{
    id: '1',
    address: '0x6ea2c0991d8be3795466a9a52f81d3a3438f83ef89ebba1588e463de7be1aae'
  },
  {
    id: '2',
    address: '0x6ea2c0991d8be3795466a9a52f81d3a3438f83ef89ebba1588e463de7be1aae'
  },
  ],

  [constants.StarknetChainId.SN_MAIN]: [{
    id: '1',
    address: '0x6ea2c0991d8be3795466a9a52f81d3a3438f83ef89ebba1588e463de7be1aae'
  },
  {
    id: '2',
    address: '0x6ea2c0991d8be3795466a9a52f81d3a3438f83ef89ebba1588e463de7be1aae'
  },
  ],
  [constants.StarknetChainId.SN_GOERLI2]: [{
    id: '1',
    address: '0x6ea2c0991d8be3795466a9a52f81d3a3438f83ef89ebba1588e463de7be1aae'
  },
  {
    id: '2',
    address: '0x6ea2c0991d8be3795466a9a52f81d3a3438f83ef89ebba1588e463de7be1aae'
  },
  ],
};

/**
 * Mapping of Liquity Manager addresses by Starknet chain ID.
 */
export const LIQUITY_MANAGER_BY_CHAIN_ID: {
  [key in constants.StarknetChainId]: string;
} = {
  // Add descriptions for each chain ID
  [constants.StarknetChainId.SN_GOERLI]: '0x7d62ab0cbdcab12bf4fc261caddd481fde3695b3689d43b35099806b50c719b',
  [constants.StarknetChainId.SN_MAIN]: '0x7d62ab0cbdcab12bf4fc261caddd481fde3695b3689d43b35099806b50c719b',
  [constants.StarknetChainId.SN_GOERLI2]: '0x7d62ab0cbdcab12bf4fc261caddd481fde3695b3689d43b35099806b50c719b',
};

/**
 * Mapping of Oracle addresses by Starknet chain ID.
 */
export const ORACLE_BY_CHAIN_ID: {
  [key in constants.StarknetChainId]: string;
} = {
  // Add descriptions for each chain ID
  [constants.StarknetChainId.SN_GOERLI]: '0x5dd007c4a506f804c9f3cf3032ac14fa9efa6f1067c7cf20a7ff32351fea268',
  [constants.StarknetChainId.SN_MAIN]: '0x5dd007c4a506f804c9f3cf3032ac14fa9efa6f1067c7cf20a7ff32351fea268',
  [constants.StarknetChainId.SN_GOERLI2]: '0x5dd007c4a506f804c9f3cf3032ac14fa9efa6f1067c7cf20a7ff32351fea268',
};

/**
 * Mapping of ETH token addresses by Starknet chain ID.
 */
export const ETH_BY_CHAIN_ID: {
  [key in constants.StarknetChainId]: string;
} = {
  // Add descriptions for each chain ID
  [constants.StarknetChainId.SN_GOERLI]: '0x9ee91F9f426fA633d227f7a9b000E28b9dfd8599',
  [constants.StarknetChainId.SN_MAIN]: '',
  [constants.StarknetChainId.SN_GOERLI2]: '',
};

/**
 * Retrieves the Liquity Manager address for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns The Liquity Manager address as a string.
 */
export const getLiquityManagerAddress = (chainId: constants.StarknetChainId): string => LIQUITY_MANAGER_BY_CHAIN_ID[chainId];

/**
 * Retrieves the Oracle address for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns The Oracle address as a string.
 */
export const getOracleAddress = (chainId: constants.StarknetChainId): string => ORACLE_BY_CHAIN_ID[chainId];

/**
 * Retrieves the ETH token address for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns The ETH token address as a string.
 */
export const getEthAddress = (chainId: constants.StarknetChainId): string => ETH_BY_CHAIN_ID[chainId];

/**
 * Retrieves the LUSD token address for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns The LUSD token address as a string.
 */
export const getLusdAddress = (chainId: constants.StarknetChainId): string => LUSD_BY_CHAIN_ID[chainId];


/**
 * Retrieves Trove information for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns An array of TroveInfo objects.
 */
export const getTrovesByChainId = (chainId: constants.StarknetChainId): TroveInfo[] => TROVES_BY_CHAIN_ID[chainId];

/**
 * Retrieves the Trove ID for a given Starknet chain ID and address.
 * @param chainId - The Starknet chain ID.
 * @param address - The address associated with the Trove.
 * @returns The Trove ID as a string, or undefined if not found.
 */
export const getTroveIdByChainIdAndAddress = (chainId: constants.StarknetChainId, address: string): string | undefined => {
  const troves = getTrovesByChainId(chainId);
  return troves.find((elem) => elem.address === address)?.id;
};

/**
 * Retrieves the Trove address for a given Starknet chain ID and Trove ID.
 * @param chainId - The Starknet chain ID.
 * @param id - The Trove ID.
 * @returns The Trove address as a string, or undefined if not found.
 */
export const getTroveAddressByChainIdAndId = (chainId: constants.StarknetChainId, id: string): string | undefined => {
  const troves = getTrovesByChainId(chainId);
  return troves.find((elem) => elem.address === id)?.address;
};