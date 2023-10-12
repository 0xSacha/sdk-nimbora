import { constants } from 'starknet';
import { TroveInfo } from './types';
/**
 * Mapping of LUSD token addresses by Starknet chain ID.
 */
export declare const LUSD_BY_CHAIN_ID: {
    [key in constants.StarknetChainId]: string;
};
/**
 * Mapping of Trove information arrays by Starknet chain ID.
 */
export declare const TROVES_BY_CHAIN_ID: {
    [key in constants.StarknetChainId]: TroveInfo[];
};
/**
 * Mapping of Liquity Manager addresses by Starknet chain ID.
 */
export declare const LIQUITY_MANAGER_BY_CHAIN_ID: {
    [key in constants.StarknetChainId]: string;
};
/**
 * Mapping of Oracle addresses by Starknet chain ID.
 */
export declare const ORACLE_BY_CHAIN_ID: {
    [key in constants.StarknetChainId]: string;
};
/**
 * Mapping of ETH token addresses by Starknet chain ID.
 */
export declare const ETH_BY_CHAIN_ID: {
    [key in constants.StarknetChainId]: string;
};
/**
 * Retrieves the Liquity Manager address for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns The Liquity Manager address as a string.
 */
export declare const getLiquityManagerAddress: (chainId: constants.StarknetChainId) => string;
/**
 * Retrieves the Oracle address for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns The Oracle address as a string.
 */
export declare const getOracleAddress: (chainId: constants.StarknetChainId) => string;
/**
 * Retrieves the ETH token address for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns The ETH token address as a string.
 */
export declare const getEthAddress: (chainId: constants.StarknetChainId) => string;
/**
 * Retrieves the LUSD token address for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns The LUSD token address as a string.
 */
export declare const getLusdAddress: (chainId: constants.StarknetChainId) => string;
/**
 * Retrieves Trove information for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns An array of TroveInfo objects.
 */
export declare const getTrovesByChainId: (chainId: constants.StarknetChainId) => TroveInfo[];
/**
 * Retrieves the Trove ID for a given Starknet chain ID and address.
 * @param chainId - The Starknet chain ID.
 * @param address - The address associated with the Trove.
 * @returns The Trove ID as a string, or undefined if not found.
 */
export declare const getTroveIdByChainIdAndAddress: (chainId: constants.StarknetChainId, address: string) => string | undefined;
/**
 * Retrieves the Trove address for a given Starknet chain ID and Trove ID.
 * @param chainId - The Starknet chain ID.
 * @param id - The Trove ID.
 * @returns The Trove address as a string, or undefined if not found.
 */
export declare const getTroveAddressByChainIdAndId: (chainId: constants.StarknetChainId, id: string) => string | undefined;
