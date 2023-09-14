import { getEthAddress, getLusdAddress, getTroveIdByChainIdAndAddress } from "../config/addresses";
import { NimboraSDK } from "..";
import { CheckBalanceBorrowLiquityProps, CheckBalanceRepayLiquityProps, CheckBalanceRepayLiquityRes, GetBalanceProps, GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps, CheckAllowanceBorrowLiquityProps, GetAllowanceProps, CheckAllowanceRepayLiquityProps, CheckAllowanceRepayLiquityRes, ERROR_CODE } from "../config/types";
import { ErrorWrapper } from "../utils/errorWrapper";

/**
 * Checks if a Trove exists based on its address.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove to check.
 * @returns True if the Trove exists; otherwise, false.
 */
export function checkTrove(this: NimboraSDK, troveAddress: string): boolean {
    if (getTroveIdByChainIdAndAddress(this.chainId, troveAddress)) {
        return (true)
    }
    return false
}



/**
 * Checks if the user has a sufficient balance to borrow ETH.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove, ETH amount, batch close flag, and user information.
 * @returns A promise that resolves to true if the user has a sufficient balance; otherwise, false.
 */
export async function checkBalanceBorrowLiquity(this: NimboraSDK, props: CheckBalanceBorrowLiquityProps): Promise<boolean> {
    const { troveAddress, ethAmount, closeBatch, userAddress } = props
    if (!this.checkTrove(troveAddress)) {
        throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    const ethAddress: string = getEthAddress(this.chainId)
    let tokenBalanceProps: GetBalanceProps = {
        tokenAddress: ethAddress,
        userAddress: userAddress
    }
    const userTokenBalance = await this.getBalance(tokenBalanceProps)

    const getRequiredGasFeeToParticipateCurrrentBatchLiquityProps: GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
        troveAddress: troveAddress,
        userAddress: userAddress,
        closeBatch: closeBatch
    }
    const gasRequired = await this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)
    let ethRequired = ethAmount + gasRequired;
    if (userTokenBalance < ethRequired) {
        return (false)
    } else {
        return (true)
    }
}


/**
 * Checks if the user has a sufficient balance and allowance to repay LUSD.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove, LUSD amount, batch close flag, and user information.
 * @returns A promise that resolves to an object indicating if the user has enough LUSD and ETH balance.
 */
export async function checkBalanceRepayLiquity(this: NimboraSDK, props: CheckBalanceRepayLiquityProps): Promise<CheckBalanceRepayLiquityRes> {
    const { troveAddress, lusdAmount, closeBatch, userAddress } = props
    if (!this.checkTrove(troveAddress)) {
        throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    const ethAddress: string = getEthAddress(this.chainId)
    const lusdAddress: string = getLusdAddress(this.chainId)

    let ethBalanceProps: GetBalanceProps = {
        tokenAddress: ethAddress,
        userAddress: userAddress
    }
    const userEthBalance = await this.getBalance(ethBalanceProps)


    let lusdAmountBalanceProps: GetBalanceProps = {
        tokenAddress: lusdAddress,
        userAddress: userAddress
    }
    const userLusdBalance = await this.getBalance(lusdAmountBalanceProps)


    const getRequiredGasFeeToParticipateCurrrentBatchLiquityProps: GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
        troveAddress: troveAddress,
        userAddress: userAddress,
        closeBatch: closeBatch
    }
    const gasRequired = await this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)

    let isEnoughLusd: boolean = true;
    let isEnoughEth: boolean = true;

    if (userLusdBalance < lusdAmount) {
        isEnoughLusd = false
    }
    if (userEthBalance < gasRequired) {
        isEnoughEth = false
    }

    const checkBalanceRepayLiquityRes: CheckBalanceRepayLiquityRes = {
        isEnoughLusd: isEnoughLusd,
        isEnoughEth: isEnoughEth
    }

    return (checkBalanceRepayLiquityRes)
}



/**
 * Checks if the user has a sufficient ETH allowance to borrow.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove, ETH amount, batch close flag, and user information.
 * @returns A promise that resolves to true if the user has a sufficient ETH allowance; otherwise, false.
 */
export async function checkAllowanceBorrowLiquity(this: NimboraSDK, props: CheckAllowanceBorrowLiquityProps): Promise<boolean> {
    const { troveAddress, ethAmount, closeBatch, userAddress } = props
    if (!this.checkTrove(troveAddress)) {
        throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    const ethAddress: string = getEthAddress(this.chainId)
    let ethAllowanceProps: GetAllowanceProps = {
        tokenAddress: ethAddress,
        userAddress: userAddress,
        spender: troveAddress
    }
    const userEthAllowance = await this.getAllowance(ethAllowanceProps)

    const getRequiredGasFeeToParticipateCurrrentBatchLiquityProps: GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
        troveAddress: troveAddress,
        userAddress: userAddress,
        closeBatch: closeBatch
    }
    const gasRequired = await this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)
    let ethAllowanceRequired = ethAmount + gasRequired;
    if (userEthAllowance < ethAllowanceRequired) {
        return (false)
    } else {
        return (true)
    }
}



/**
 * Checks if the user has sufficient allowances to repay LUSD and ETH.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove, LUSD amount, batch close flag, and user information.
 * @returns A promise that resolves to an object indicating if the user has enough allowances for LUSD and ETH.
 */
export async function checkAllowanceRepayLiquity(this: NimboraSDK, props: CheckAllowanceRepayLiquityProps): Promise<CheckAllowanceRepayLiquityRes> {
    const { troveAddress, lusdAmount, closeBatch, userAddress } = props
    if (!this.checkTrove(troveAddress)) {
        throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
    }
    const ethAddress: string = getEthAddress(this.chainId)
    const lusdAddress: string = getLusdAddress(this.chainId)

    let ethAllowanceProps: GetAllowanceProps = {
        tokenAddress: ethAddress,
        userAddress: userAddress,
        spender: troveAddress
    }
    const userEthAllowance = await this.getAllowance(ethAllowanceProps)


    let lusdAllowanceProps: GetAllowanceProps = {
        tokenAddress: lusdAddress,
        userAddress: userAddress,
        spender: troveAddress
    }
    const userLusdAllowance = await this.getAllowance(lusdAllowanceProps)


    const getRequiredGasFeeToParticipateCurrrentBatchLiquityProps: GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
        troveAddress: troveAddress,
        userAddress: userAddress,
        closeBatch: closeBatch
    }
    const gasRequired = await this.getRequiredGasFeeToParticipateCurrrentBatchLiquity(getRequiredGasFeeToParticipateCurrrentBatchLiquityProps)

    let isEnoughAllowanceLusd: boolean = true;
    let isEnoughAllowanceEth: boolean = true;

    if (userLusdAllowance < lusdAmount) {
        isEnoughAllowanceLusd = false
    }

    if (userEthAllowance < gasRequired) {
        isEnoughAllowanceEth = false
    }

    const checkBalanceRepayLiquityRes: CheckAllowanceRepayLiquityRes = {
        isEnoughAllowanceLusd: isEnoughAllowanceLusd,
        isEnoughAllowanceEth: isEnoughAllowanceEth
    }

    return (checkBalanceRepayLiquityRes)
}



