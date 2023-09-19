import { NimboraSDK } from "..";
import { BuildApproveCallProps, ERROR_CODE, GetAllowanceProps, GetBalanceProps } from "../config/types";
import { ErrorWrapper } from '../utils/errorWrapper';
import { Account, AllowArray, Call, Uint256, uint256 } from "starknet";

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
 * Estimate the transaction fee for invoking a set of calls on the blockchain.
 *
 * @param calls - An array of calls to be executed.
 * @returns A promise that resolves to the estimated transaction fee as a bigint.
 * @throws {ErrorWrapper} Throws an error with an error code and the underlying error if the fee estimation fails.
 * @throws {ErrorWrapper} Throws an error with the code ERROR_CODE.PROVIDER_REQUIRED if the SDK instance does not have a signer set.
 */
export async function estimateInvokeFee(this: NimboraSDK, calls: AllowArray<Call>): Promise<bigint> {
    if (!this.signer) throw new ErrorWrapper({ code: ERROR_CODE.PROVIDER_REQUIRED });
    try {
        const { suggestedMaxFee } = await (this.provider as Account).estimateInvokeFee(calls);
        return suggestedMaxFee;
    } catch (e) {
        throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
    }
}



/**
 * Build an 'approve' call to grant permission for a spender to transfer a specific amount of tokens on behalf of the owner.
 *
 * @param props - An object containing the necessary properties to build the 'approve' call.
 * @returns A promise that resolves to a Call object representing the 'approve' call.
 */
export function buildApproveCall(this: NimboraSDK, props: BuildApproveCallProps): Call {
    const { tokenAddress, spenderAddress, amount } = props;
    const amountUint256: Uint256 = uint256.bnToUint256(amount);
    let approveCall: Call = {
        contractAddress: tokenAddress,
        entrypoint: "approve",
        calldata: [
            spenderAddress,
            amountUint256.low,
            amountUint256.high
        ]
    };

    return approveCall;
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




