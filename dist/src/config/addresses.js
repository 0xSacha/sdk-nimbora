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
    _a[starknet_1.constants.StarknetChainId.SN_MAIN] = '0x025731f5f9629ff74d1c5f787ad1ea0ebb9157210047f6c9e3a974f771550cf4',
    _a[starknet_1.constants.StarknetChainId.SN_GOERLI2] = '0x025731f5f9629ff74d1c5f787ad1ea0ebb9157210047f6c9e3a974f771550cf4',
    _a);
/**
 * Mapping of Trove information arrays by Starknet chain ID.
 */
exports.TROVES_BY_CHAIN_ID = (_b = {},
    // Add descriptions for each chain ID
    _b[starknet_1.constants.StarknetChainId.SN_GOERLI] = [{
            id: '1',
            address: '0x57f1197af14b203fd3839bfb4e3830d636ac8502c3fcc639b98279deb059087'
        },
        {
            id: '2',
            address: '0x04dd6b946dd8fea888c92c514106bd5c45db017c631c28d34d87f091dc8a2f38'
        },
    ],
    _b[starknet_1.constants.StarknetChainId.SN_MAIN] = [{
            id: '1',
            address: '0x6ea2c0991d8be3795466a9a52f81d3a3438f83ef89ebba1588e463de7be1aae'
        },
        {
            id: '2',
            address: '0x6ea2c0991d8be3795466a9a52f81d3a3438f83ef89ebba1588e463de7be1aae'
        },
    ],
    _b[starknet_1.constants.StarknetChainId.SN_GOERLI2] = [{
            id: '1',
            address: '0x6ea2c0991d8be3795466a9a52f81d3a3438f83ef89ebba1588e463de7be1aae'
        },
        {
            id: '2',
            address: '0x6ea2c0991d8be3795466a9a52f81d3a3438f83ef89ebba1588e463de7be1aae'
        },
    ],
    _b);
/**
 * Mapping of Liquity Manager addresses by Starknet chain ID.
 */
exports.LIQUITY_MANAGER_BY_CHAIN_ID = (_c = {},
    // Add descriptions for each chain ID
    _c[starknet_1.constants.StarknetChainId.SN_GOERLI] = '0x7d62ab0cbdcab12bf4fc261caddd481fde3695b3689d43b35099806b50c719b',
    _c[starknet_1.constants.StarknetChainId.SN_MAIN] = '0x7d62ab0cbdcab12bf4fc261caddd481fde3695b3689d43b35099806b50c719b',
    _c[starknet_1.constants.StarknetChainId.SN_GOERLI2] = '0x7d62ab0cbdcab12bf4fc261caddd481fde3695b3689d43b35099806b50c719b',
    _c);
/**
 * Mapping of Oracle addresses by Starknet chain ID.
 */
exports.ORACLE_BY_CHAIN_ID = (_d = {},
    // Add descriptions for each chain ID
    _d[starknet_1.constants.StarknetChainId.SN_GOERLI] = '0x5dd007c4a506f804c9f3cf3032ac14fa9efa6f1067c7cf20a7ff32351fea268',
    _d[starknet_1.constants.StarknetChainId.SN_MAIN] = '0x5dd007c4a506f804c9f3cf3032ac14fa9efa6f1067c7cf20a7ff32351fea268',
    _d[starknet_1.constants.StarknetChainId.SN_GOERLI2] = '0x5dd007c4a506f804c9f3cf3032ac14fa9efa6f1067c7cf20a7ff32351fea268',
    _d);
/**
 * Mapping of ETH token addresses by Starknet chain ID.
 */
exports.ETH_BY_CHAIN_ID = (_e = {},
    // Add descriptions for each chain ID
    _e[starknet_1.constants.StarknetChainId.SN_GOERLI] = '0x9ee91F9f426fA633d227f7a9b000E28b9dfd8599',
    _e[starknet_1.constants.StarknetChainId.SN_MAIN] = '',
    _e[starknet_1.constants.StarknetChainId.SN_GOERLI2] = '',
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
var getTrovesByChainId = function (chainId) { return exports.TROVES_BY_CHAIN_ID[chainId]; };
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
