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
  [constants.StarknetChainId.SN_MAIN]: '0x070a76fd48ca0ef910631754d77dd822147fe98a569b826ec85e3c33fde586ac',
  [constants.StarknetChainId.SN_GOERLI2]: '0x025731f5f9629ff74d1c5f787ad1ea0ebb9157210047f6c9e3a974f771550cf4',
};

/**
 * Mapping of Trove information arrays by Starknet chain ID.
 */0x070a76fd48ca0ef910631754d77dd822147fe98a569b826ec85e3c33fde586ac

export const TROVES_BY_CHAIN_ID: {
  [key in constants.StarknetChainId]: TroveInfo[];
} = {
  [constants.StarknetChainId.SN_GOERLI]: [{
    id: '1',
    address: '0x057f1197af14b203fd3839bfb4e3830d636ac8502c3fcc639b98279deb059087'
  },
  {
    id: '2',
    address: '0x04dd6b946dd8fea888c92c514106bd5c45db017c631c28d34d87f091dc8a2f38'
  },
  ],

  [constants.StarknetChainId.SN_MAIN]: [{
    id: '1',
    address: '0x03580a65260563b5511ddf2eafb83d6b309dce7fc25271df8c040a437f09a399'
  }
  ],
  [constants.StarknetChainId.SN_GOERLI2]: [],
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
  [constants.StarknetChainId.SN_MAIN]: '0x4b062835dc8e8249f0e0f54b77aeb2b83ec423d0148fa5d73cc9d49b2171756',
  [constants.StarknetChainId.SN_GOERLI2]: '0x5dd007c4a506f804c9f3cf3032ac14fa9efa6f1067c7cf20a7ff32351fea268',
};

/**
 * Mapping of ETH token addresses by Starknet chain ID.
 */
export const ETH_BY_CHAIN_ID: {
  [key in constants.StarknetChainId]: string;
} = {
  // Add descriptions for each chain ID
  [constants.StarknetChainId.SN_GOERLI]: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
  [constants.StarknetChainId.SN_MAIN]: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
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
// export const getTrovesByChainId = (chainId: constants.StarknetChainId): TroveInfo[] => TROVES_BY_CHAIN_ID[chainId];

export const getTrovesByChainId = (chainId: constants.StarknetChainId): TroveInfo[] => {
  const troves = TROVES_BY_CHAIN_ID[chainId];

  if (!troves) {
    throw new Error(`Trove information not found for chain ID: ${chainId}`);
  }

  return troves;
};



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