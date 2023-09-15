import { NimboraSDK } from "..";
import { GetAllowanceLiquityProps, GetAllowanceLiquityRes, GetUserAmountInBatchLiquityProps, GetUserAmountInBatchLiquityRes, GetUsersInBatchLiquityProps, GetUsersInBatchLiquityRes, GetUserGasInBatchLiquityProps, GetUserDebtLiquityProps, GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps } from "../config/types";
/**
 * Retrieves the batch gas unit for a Trove
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the batch gas unit as a bigint.
 */
export declare function getBatchGasUnitLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint>;
/**
 * Retrieves the batch gas unit per user for a Trove
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the batch gas unit per user as a bigint.
 */
export declare function getBatchGasUnitPerUserLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint>;
/**
 * Retrieves the batch gas fee per user for a Trove
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the batch gas fee per user as a bigint.
 */
export declare function getBatchGasFeePerUserLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint>;
/**
 * Retrieves the gas tank balance of a specific Trove in Liquity.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the gas tank balance as a bigint.
 */
export declare function getGasTankLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint>;
/**
 * Retrieves the allowance for ETH and LUSD tokens for a user and a Trove
 * @param this - The NimboraSDK instance.
 * @param props - The GetAllowanceLiquityProps object containing troveAddress and userAddress.
 * @returns A promise that resolves to a GetAllowanceLiquityRes object.
 */
export declare function getAllowanceLiquity(this: NimboraSDK, props: GetAllowanceLiquityProps): Promise<GetAllowanceLiquityRes>;
/**
 * Retrieves the batch counter for a Trove
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the batch counter as a bigint.
 */
export declare function getBatchCounterLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint>;
/**
 * Retrieves the last handled batch nonce for a Trove
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the last handled batch nonce as a bigint.
 */
export declare function getLastHandledBatchNonceLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint>;
/**
 * Retrieves user borrow and repay lists for a specific batch nonce
 * @param this - The NimboraSDK instance.
 * @param props - The GetUsersInBatchLiquityProps object containing troveAddress and batchNonce.
 * @returns A promise that resolves to a GetUsersInBatchLiquityRes object.
 */
export declare function getUsersInBatchLiquity(this: NimboraSDK, props: GetUsersInBatchLiquityProps): Promise<GetUsersInBatchLiquityRes>;
/**
 * Retrieves user borrow and repay amounts for a specific batch nonce and user address
 * @param this - The NimboraSDK instance.
 * @param props - The GetUserAmountInBatchLiquityProps object containing troveAddress, batchNonce, and userAddress.
 * @returns A promise that resolves to a GetUserAmountInBatchLiquityRes object.
 */
export declare function getUserAmountInBatchLiquity(this: NimboraSDK, props: GetUserAmountInBatchLiquityProps): Promise<GetUserAmountInBatchLiquityRes>;
/**
 * Retrieves user gas consumption for a specific batch nonce and user address
 * @param this - The NimboraSDK instance.
 * @param props - The GetUserGasInBatchLiquityProps object containing troveAddress, batchNonce, and userAddress.
 * @returns A promise that resolves to the user's gas consumption as a bigint.
 */
export declare function getUserGasInBatchLiquity(this: NimboraSDK, props: GetUserGasInBatchLiquityProps): Promise<bigint>;
/**
 * Calculates the number of users required to close a batch for a specific Trove.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the number of users required to close a batch as a bigint.
 */
export declare function getNumberOfUsersToCloseBatchLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint>;
/**
 * Calculates the total required gas to close a batch for a specific Trove.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the total required gas as a bigint.
 */
export declare function getTotalRequiredGasFeeToCloseBatchLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint>;
/**
 * Calculates the remaining gas fee required to close a batch for a specific Trove in Liquity.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the remaining gas fee as a bigint.
 */
export declare function getRemainingGasFeeToCloseBatch(this: NimboraSDK, troveAddress: string): Promise<bigint>;
/**
 * Retrieves the total debt of a Trove
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the total Trove debt as a bigint.
 */
export declare function getTotalTroveDebtLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint>;
/**
 * Retrieves the debt of a specific user in a Trove
 * @param this - The NimboraSDK instance.
 * @param props - The GetUserDebtLiquityProps object containing troveAddress and userAddress.
 * @returns A promise that resolves to the user's debt in the Trove as a bigint.
 */
export declare function getUserDebtLiquity(this: NimboraSDK, props: GetUserDebtLiquityProps): Promise<bigint>;
/**
 * Retrieves the total supply of LUSD tokens.
 * @param this - The NimboraSDK instance.
 * @returns A promise that resolves to the total supply of LUSD tokens as a bigint.
 */
export declare function getLUSDTotalSupply(this: NimboraSDK): Promise<bigint>;
/**
 * Calculates the required gas fee to participate in the current batch in Liquity.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove and user information.
 * @returns A promise that resolves to the required gas fee as a bigint.
 */
export declare function getRequiredGasFeeToParticipateCurrrentBatchLiquity(this: NimboraSDK, props: GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps): Promise<bigint>;
