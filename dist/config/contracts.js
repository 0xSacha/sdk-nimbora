"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenContract = exports.getLusdContract = exports.getEthContract = exports.getOracleContract = exports.getTroveContract = exports.getLiquityManagerContract = void 0;
var addresses_1 = require("./addresses");
var starknet_1 = require("starknet");
var erc20_json_1 = __importDefault(require("../abi/erc20.json"));
var trove_json_1 = __importDefault(require("../abi/trove.json"));
var liquity_manager_json_1 = __importDefault(require("../abi/liquity_manager.json"));
var oracle_json_1 = __importDefault(require("../abi/oracle.json"));
function getLiquityManagerContract() {
    var _a = this, chainId = _a.chainId, provider = _a.provider;
    var liquityManagerAddress = (0, addresses_1.getLiquityManagerAddress)(chainId);
    var liquityManagerContract = new starknet_1.Contract(liquity_manager_json_1.default, liquityManagerAddress, provider);
    return liquityManagerContract;
}
exports.getLiquityManagerContract = getLiquityManagerContract;
function getTroveContract(troveAddress) {
    var provider = this.provider;
    var troveContract = new starknet_1.Contract(trove_json_1.default, troveAddress, provider);
    return troveContract;
}
exports.getTroveContract = getTroveContract;
function getOracleContract() {
    var _a = this, chainId = _a.chainId, provider = _a.provider;
    var oracleAddress = (0, addresses_1.getOracleAddress)(chainId);
    var oracleContract = new starknet_1.Contract(oracle_json_1.default, oracleAddress, provider);
    return oracleContract;
}
exports.getOracleContract = getOracleContract;
function getEthContract() {
    var chainId = this.chainId;
    var ethAddress = (0, addresses_1.getEthAddress)(chainId);
    return this.getTokenContract(ethAddress);
}
exports.getEthContract = getEthContract;
function getLusdContract() {
    var chainId = this.chainId;
    var lusdAddress = (0, addresses_1.getLusdAddress)(chainId);
    return this.getTokenContract(lusdAddress);
}
exports.getLusdContract = getLusdContract;
function getTokenContract(tokenAddress) {
    var provider = this.provider;
    var erc20Contract = new starknet_1.Contract(erc20_json_1.default, tokenAddress, provider);
    return erc20Contract;
}
exports.getTokenContract = getTokenContract;
