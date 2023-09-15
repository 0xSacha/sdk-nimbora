import { NimboraSDK } from '..';
import { Contract } from 'starknet';
export declare function getLiquityManagerContract(this: NimboraSDK): Contract;
export declare function getTroveContract(this: NimboraSDK, troveAddress: string): Contract;
export declare function getOracleContract(this: NimboraSDK): Contract;
export declare function getEthContract(this: NimboraSDK): Contract;
export declare function getLusdContract(this: NimboraSDK): Contract;
export declare function getTokenContract(this: NimboraSDK, tokenAddress: string): Contract;
