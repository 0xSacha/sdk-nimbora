import { NimboraSDK } from "..";
import { BuildApproveCallProps, GetAllowanceProps, GetBalanceProps } from "../config/types";
import { AllowArray, Call } from "starknet";
/**
 * Retrieves the allowance for a spender to spend tokens on behalf of a user.
 * @param props - The properties required for the operation.
 * @returns A promise that resolves to the allowance amount as a bigint.
 */
export declare function getAllowance(this: NimboraSDK, props: GetAllowanceProps): Promise<bigint>;
/**
 * Retrieves the balance of tokens for a user.
 * @param props - The properties required for the operation.
 * @returns A promise that resolves to the balance amount as a bigint.
 */
export declare function getBalance(this: NimboraSDK, props: GetBalanceProps): Promise<bigint>;
/**
 * Retrieves the total supply of tokens for a given token contract.
 * @param this - The NimboraSDK instance.
 * @param tokenAddress - The address of the token contract.
 * @returns A promise that resolves to the total supply amount as a bigint.
 */
export declare function getTotalSupply(this: NimboraSDK, tokenAddress: string): Promise<bigint>;
/**
 * Retrieves the current gas price from the oracle contract.
 * @param this - The NimboraSDK instance.
 * @returns A promise that resolves to the current gas price as a bigint.
 */
export declare function getGasPrice(this: NimboraSDK): Promise<bigint>;
/**
 * Estimate the transaction fee for invoking a set of calls on the blockchain.
 *
 * @param calls - An array of calls to be executed.
 * @returns A promise that resolves to the estimated transaction fee as a bigint.
 * @throws {ErrorWrapper} Throws an error with an error code and the underlying error if the fee estimation fails.
 * @throws {ErrorWrapper} Throws an error with the code ERROR_CODE.PROVIDER_REQUIRED if the SDK instance does not have a signer set.
 */
export declare function estimateInvokeFee(this: NimboraSDK, calls: AllowArray<Call>): Promise<bigint>;
/**
 * Build an 'approve' call to grant permission for a spender to transfer a specific amount of tokens on behalf of the owner.
 *
 * @param props - An object containing the necessary properties to build the 'approve' call.
 * @returns A promise that resolves to a Call object representing the 'approve' call.
 */
export declare function buildApproveCall(this: NimboraSDK, props: BuildApproveCallProps): Call;
/**
 * Checks if a given string is a valid Ethereum address.
 * @param address - The Ethereum address to validate.
 * @returns `true` if the address is valid, `false` otherwise.
 */
export declare function isValidEthereumAddress(address: string): boolean;
