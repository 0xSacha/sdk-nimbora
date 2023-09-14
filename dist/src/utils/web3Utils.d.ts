import { NimboraSDK } from "..";
import { GetAllowanceProps, GetBalanceProps } from "../config/types";
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
 * Checks if a given string is a valid Ethereum address.
 * @param address - The Ethereum address to validate.
 * @returns `true` if the address is valid, `false` otherwise.
 */
export declare function isValidEthereumAddress(address: string): boolean;
