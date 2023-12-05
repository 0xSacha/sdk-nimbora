"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTroveAddressByChainIdAndId = exports.getTroveIdByChainIdAndAddress = exports.getTrovesByChainId = exports.getLusdAddress = exports.getEthAddress = exports.getOracleAddress = exports.getLiquityManagerAddress = exports.ETH_BY_CHAIN_ID = exports.ORACLE_BY_CHAIN_ID = exports.LIQUITY_MANAGER_BY_CHAIN_ID = exports.TROVES_BY_CHAIN_ID = exports.LUSD_BY_CHAIN_ID = void 0;
var starknet_1 = require("starknet");
/**
 * Mapping of LUSD token addresses by Starknet chain ID.
 */
exports.LUSD_BY_CHAIN_ID = (_a = {},
    // Add descriptions for each chain ID
    _a[starknet_1.constants.StarknetChainId.SN_GOERLI] = '0x025731f5f9629ff74d1c5f787ad1ea0ebb9157210047f6c9e3a974f771550cf4',
    _a[starknet_1.constants.StarknetChainId.SN_MAIN] = '0x070a76fd48ca0ef910631754d77dd822147fe98a569b826ec85e3c33fde586ac',
    _a);
/**
 * Mapping of Trove information arrays by Starknet chain ID.
 */
exports.TROVES_BY_CHAIN_ID = (_b = {},
    _b[starknet_1.constants.StarknetChainId.SN_GOERLI] = [{
            id: '1',
            address: '0x03b3e6f26fa0b0e932a356d5394d3bc43b098962bf7982f4204350c561aada2f'
        },
        {
            id: '2',
            address: '0x043acb79a8436b35d98a9231be51ee69e7aaea6e0feb3eaf186ef0d3ba4d8c7f'
        }
    ],
    _b[starknet_1.constants.StarknetChainId.SN_MAIN] = [{
            id: '1',
            address: '0x03580a65260563b5511ddf2eafb83d6b309dce7fc25271df8c040a437f09a399'
        },
        {
            id: '2',
            address: '0x02a67288e48a8c4e2881aee422da7841fc11fef195e0a81f929871c77f07509d'
        }
    ],
    _b);
/**
 * Mapping of Liquity Manager addresses by Starknet chain ID.
 */
exports.LIQUITY_MANAGER_BY_CHAIN_ID = (_c = {},
    // Add descriptions for each chain ID
    _c[starknet_1.constants.StarknetChainId.SN_GOERLI] = '0x7d62ab0cbdcab12bf4fc261caddd481fde3695b3689d43b35099806b50c719b',
    _c[starknet_1.constants.StarknetChainId.SN_MAIN] = '0x7d62ab0cbdcab12bf4fc261caddd481fde3695b3689d43b35099806b50c719b',
    _c);
/**
 * Mapping of Oracle addresses by Starknet chain ID.
 */
exports.ORACLE_BY_CHAIN_ID = (_d = {},
    // Add descriptions for each chain ID
    _d[starknet_1.constants.StarknetChainId.SN_GOERLI] = '0x5dd007c4a506f804c9f3cf3032ac14fa9efa6f1067c7cf20a7ff32351fea268',
    _d[starknet_1.constants.StarknetChainId.SN_MAIN] = '0x4b062835dc8e8249f0e0f54b77aeb2b83ec423d0148fa5d73cc9d49b2171756',
    _d);
/**
 * Mapping of ETH token addresses by Starknet chain ID.
 */
exports.ETH_BY_CHAIN_ID = (_e = {},
    // Add descriptions for each chain ID
    _e[starknet_1.constants.StarknetChainId.SN_GOERLI] = '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    _e[starknet_1.constants.StarknetChainId.SN_MAIN] = '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    _e);
/**
 * Retrieves the Liquity Manager address for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns The Liquity Manager address as a string.
 */
var getLiquityManagerAddress = function (chainId) { return exports.LIQUITY_MANAGER_BY_CHAIN_ID[chainId]; };
exports.getLiquityManagerAddress = getLiquityManagerAddress;
/**
 * Retrieves the Oracle address for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns The Oracle address as a string.
 */
var getOracleAddress = function (chainId) { return exports.ORACLE_BY_CHAIN_ID[chainId]; };
exports.getOracleAddress = getOracleAddress;
/**
 * Retrieves the ETH token address for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns The ETH token address as a string.
 */
var getEthAddress = function (chainId) { return exports.ETH_BY_CHAIN_ID[chainId]; };
exports.getEthAddress = getEthAddress;
/**
 * Retrieves the LUSD token address for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns The LUSD token address as a string.
 */
var getLusdAddress = function (chainId) { return exports.LUSD_BY_CHAIN_ID[chainId]; };
exports.getLusdAddress = getLusdAddress;
/**
 * Retrieves Trove information for a given Starknet chain ID.
 * @param chainId - The Starknet chain ID.
 * @returns An array of TroveInfo objects.
 */
// export const getTrovesByChainId = (chainId: constants.StarknetChainId): TroveInfo[] => TROVES_BY_CHAIN_ID[chainId];
var getTrovesByChainId = function (chainId) {
    var troves = exports.TROVES_BY_CHAIN_ID[chainId];
    if (!troves) {
        throw new Error("Trove information not found for chain ID: ".concat(chainId));
    }
    return troves;
};
exports.getTrovesByChainId = getTrovesByChainId;
/**
 * Retrieves the Trove ID for a given Starknet chain ID and address.
 * @param chainId - The Starknet chain ID.
 * @param address - The address associated with the Trove.
 * @returns The Trove ID as a string, or undefined if not found.
 */
var getTroveIdByChainIdAndAddress = function (chainId, address) {
    var _a;
    var troves = (0, exports.getTrovesByChainId)(chainId);
    return (_a = troves.find(function (elem) { return elem.address === address; })) === null || _a === void 0 ? void 0 : _a.id;
};
exports.getTroveIdByChainIdAndAddress = getTroveIdByChainIdAndAddress;
/**
 * Retrieves the Trove address for a given Starknet chain ID and Trove ID.
 * @param chainId - The Starknet chain ID.
 * @param id - The Trove ID.
 * @returns The Trove address as a string, or undefined if not found.
 */
var getTroveAddressByChainIdAndId = function (chainId, id) {
    var _a;
    var troves = (0, exports.getTrovesByChainId)(chainId);
    return (_a = troves.find(function (elem) { return elem.address === id; })) === null || _a === void 0 ? void 0 : _a.address;
};
exports.getTroveAddressByChainIdAndId = getTroveAddressByChainIdAndId;
