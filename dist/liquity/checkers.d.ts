import { NimboraSDK } from "..";
import { CheckBalanceBorrowLiquityProps, CheckBalanceRepayLiquityProps, CheckBalanceRepayLiquityRes, CheckAllowanceBorrowLiquityProps, CheckAllowanceRepayLiquityProps, CheckAllowanceRepayLiquityRes } from "../config/types";
/**
 * Checks if a Trove exists based on its address.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove to check.
 * @returns True if the Trove exists; otherwise, false.
 */
export declare function checkTrove(this: NimboraSDK, troveAddress: string): boolean;
/**
 * Checks if the user has a sufficient balance to borrow ETH.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove, ETH amount, batch close flag, and user information.
 * @returns A promise that resolves to true if the user has a sufficient balance; otherwise, false.
 */
export declare function checkBalanceBorrowLiquity(this: NimboraSDK, props: CheckBalanceBorrowLiquityProps): Promise<boolean>;
/**
 * Checks if the user has a sufficient balance and allowance to repay LUSD.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove, LUSD amount, batch close flag, and user information.
 * @returns A promise that resolves to an object indicating if the user has enough LUSD and ETH balance.
 */
export declare function checkBalanceRepayLiquity(this: NimboraSDK, props: CheckBalanceRepayLiquityProps): Promise<CheckBalanceRepayLiquityRes>;
/**
 * Checks if the user has a sufficient ETH allowance to borrow.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove, ETH amount, batch close flag, and user information.
 * @returns A promise that resolves to true if the user has a sufficient ETH allowance; otherwise, false.
 */
export declare function checkAllowanceBorrowLiquity(this: NimboraSDK, props: CheckAllowanceBorrowLiquityProps): Promise<boolean>;
/**
 * Checks if the user has sufficient ETH and LUSD allowances to repay LUSD.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove, LUSD amount, batch close flag, and user information.
 * @returns A promise that resolves to an object indicating if the user has enough allowances for LUSD and ETH.
 */
export declare function checkAllowanceRepayLiquity(this: NimboraSDK, props: CheckAllowanceRepayLiquityProps): Promise<CheckAllowanceRepayLiquityRes>;
