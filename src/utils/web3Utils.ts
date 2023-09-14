import { NimboraSDK } from "..";
import { ERROR_CODE, GetAllowanceProps, GetBalanceProps } from "../config/types";
import { ErrorWrapper } from '../utils/errorWrapper';
import { uint256 } from "starknet";

/**
 * Retrieves the allowance for a spender to spend tokens on behalf of a user.
 * @param props - The properties required for the operation.
 * @returns A promise that resolves to the allowance amount as a bigint.
 */
export async function getAllowance(this: NimboraSDK, props: GetAllowanceProps): Promise<bigint> {
    const { tokenAddress, userAddress, spender } = props
    const tokenContract = this.getTokenContract(tokenAddress)
    try {
        const { remaining } = await tokenContract.allowance(userAddress, spender);
        const allowanceBn = uint256.uint256ToBN(remaining)
        return allowanceBn;
    } catch (e) {
        throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
    }
}

/**
 * Retrieves the balance of tokens for a user.
 * @param props - The properties required for the operation.
 * @returns A promise that resolves to the balance amount as a bigint.
 */
export async function getBalance(this: NimboraSDK, props: GetBalanceProps): Promise<bigint> {
    const { tokenAddress, userAddress } = props
    const tokenContract = this.getTokenContract(tokenAddress)
    try {
        const { balance } = await tokenContract.balanceOf(userAddress);
        const balanceBn = uint256.uint256ToBN(balance)
        return balanceBn;
    } catch (e) {
        throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
    }
}

/**
 * Retrieves the total supply of tokens for a given token contract.
 * @param this - The NimboraSDK instance.
 * @param tokenAddress - The address of the token contract.
 * @returns A promise that resolves to the total supply amount as a bigint.
 */
export async function getTotalSupply(this: NimboraSDK, tokenAddress: string): Promise<bigint> {
    const tokenContract = this.getTokenContract(tokenAddress)
    try {
        const { totalSupply } = await tokenContract.totalSupply();
        const totalSupplyBn = uint256.uint256ToBN(totalSupply)
        return totalSupplyBn;
    } catch (e) {
        throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
    }
}


/**
 * Retrieves the current gas price from the oracle contract.
 * @param this - The NimboraSDK instance.
 * @returns A promise that resolves to the current gas price as a bigint.
 */
export async function getGasPrice(this: NimboraSDK): Promise<bigint> {
    const oracleContact = this.getOracleContract()
    try {
        const gasPrice = await oracleContact.get_l1_gas_price();
        return gasPrice;
    } catch (e) {
        throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
    }
}



/**
 * Checks if a given string is a valid Ethereum address.
 * @param address - The Ethereum address to validate.
 * @returns `true` if the address is valid, `false` otherwise.
 */
export function isValidEthereumAddress(address: string): boolean {
    // Ethereum addresses are 40-character hexadecimal strings
    const ethereumAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;

    return ethereumAddressRegex.test(address);
}




