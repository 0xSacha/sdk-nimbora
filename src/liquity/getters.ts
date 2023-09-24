import { NimboraSDK } from "..";
import { ERROR_CODE, GetAllowanceLiquityProps, GetAllowanceLiquityRes, GetAllowanceProps, GetUserAmountInBatchLiquityProps, GetUserAmountInBatchLiquityRes, GetUsersInBatchLiquityProps, GetUsersInBatchLiquityRes, GetUserGasInBatchLiquityProps, GetUserDebtLiquityProps, GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps } from "../config/types";
import { ErrorWrapper } from '../utils/errorWrapper';
import { uint256 } from "starknet";
import { getEthAddress, getLusdAddress } from "../config/addresses";
import { BigNumber } from 'ethers';



/**
 * Retrieves the batch gas unit for a Trove 
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the batch gas unit as a bigint.
 */
export async function getBatchGasUnitLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint> {
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  const troveContract = this.getTroveContract(troveAddress)
  try {
    const batchGasUnit = await troveContract.get_batch_gas_unit();
    return batchGasUnit;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}



/**
 * Retrieves the batch gas unit per user for a Trove 
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the batch gas unit per user as a bigint.
 */
export async function getBatchGasUnitPerUserLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint> {
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  const troveContract = this.getTroveContract(troveAddress)
  try {
    const batchGasUnit = await troveContract.get_batch_gas_unit_per_user();
    return batchGasUnit;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}

/**
 * Retrieves the batch gas fee per user for a Trove 
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the batch gas fee per user as a bigint.
 */
export async function getBatchGasFeePerUserLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint> {
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  const troveContract = this.getTroveContract(troveAddress)
  try {
    const batchGasFee = await troveContract.get_batch_gas_fee_per_user();
    return batchGasFee;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}


/**
 * Retrieves the gas tank balance of a specific Trove in Liquity.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the gas tank balance as a bigint.
 */
export async function getGasTankLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint> {
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  const troveContract = this.getTroveContract(troveAddress)
  try {
    const gasTank = await troveContract.get_gas_tank();
    return gasTank;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}



/**
 * Retrieves the allowance for ETH and LUSD tokens for a user and a Trove 
 * @param this - The NimboraSDK instance.
 * @param props - The GetAllowanceLiquityProps object containing troveAddress and userAddress.
 * @returns A promise that resolves to a GetAllowanceLiquityRes object.
 */
export async function getAllowanceLiquity(this: NimboraSDK, props: GetAllowanceLiquityProps): Promise<GetAllowanceLiquityRes> {
  const { troveAddress, userAddress } = props;
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  const getAllowanceEthProps: GetAllowanceProps = {
    tokenAddress: getEthAddress(this.chainId),
    userAddress: userAddress,
    spender: troveAddress
  };
  const getAllowanceLusdProps: GetAllowanceProps = {
    tokenAddress: getLusdAddress(this.chainId),
    userAddress: userAddress,
    spender: troveAddress
  };
  try {
    const allowanceEth = await this.getAllowance(getAllowanceEthProps);
    const allowanceLusd = await this.getAllowance(getAllowanceLusdProps)
    const getAllowanceLiquityRes: GetAllowanceLiquityRes = {
      allowanceEth: allowanceEth,
      allowanceLusd: allowanceLusd
    }
    return getAllowanceLiquityRes;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}


/**
 * Retrieves the batch counter for a Trove 
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the batch counter as a bigint.
 */
export async function getBatchCounterLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint> {
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  const troveContract = this.getTroveContract(troveAddress)
  try {
    const batchCounter = await troveContract.get_batch_counter();
    return batchCounter;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}



/**
 * Retrieves the last handled batch nonce for a Trove 
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the last handled batch nonce as a bigint.
 */
export async function getLastHandledBatchNonceLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint> {
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  const troveContract = this.getTroveContract(troveAddress)
  try {
    const lastHandledBatchNonce = await troveContract.get_last_handled_batch();
    return lastHandledBatchNonce;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}


/**
 * Retrieves user borrow and repay lists for a specific batch nonce 
 * @param this - The NimboraSDK instance.
 * @param props - The GetUsersInBatchLiquityProps object containing troveAddress and batchNonce.
 * @returns A promise that resolves to a GetUsersInBatchLiquityRes object.
 */
export async function getUsersInBatchLiquity(this: NimboraSDK, props: GetUsersInBatchLiquityProps): Promise<GetUsersInBatchLiquityRes> {
  const { troveAddress, batchNonce } = props
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  const troveContract = this.getTroveContract(troveAddress)
  const batchNonceUint256 = uint256.bnToUint256(batchNonce);
  try {
    const usersForNonce = await troveContract.get_users_for_nonce(batchNonceUint256);
    const userBorrowList = usersForNonce[0].map(
      (user: bigint) => user && BigNumber.from(user).toHexString(),
    );
    const userRepayList = usersForNonce[1].map(
      (user: bigint) => user && BigNumber.from(user).toHexString(),
    );
    const getUsersInBatchLiquityRes: GetUsersInBatchLiquityRes = {
      borrowList: userBorrowList,
      repayList: userRepayList
    }
    return getUsersInBatchLiquityRes;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}



/**
 * Retrieves user borrow and repay amounts for a specific batch nonce and user address 
 * @param this - The NimboraSDK instance.
 * @param props - The GetUserAmountInBatchLiquityProps object containing troveAddress, batchNonce, and userAddress.
 * @returns A promise that resolves to a GetUserAmountInBatchLiquityRes object.
 */
export async function getUserAmountInBatchLiquity(this: NimboraSDK, props: GetUserAmountInBatchLiquityProps): Promise<GetUserAmountInBatchLiquityRes> {
  const { troveAddress, batchNonce, userAddress } = props
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  const troveContract = this.getTroveContract(troveAddress)
  const batchNonceUint256 = uint256.bnToUint256(batchNonce);
  try {
    const userAmountForNounce = await troveContract.get_user_amount_for_nonce(batchNonceUint256, userAddress);
    const userBorrowAmount = userAmountForNounce[0]
    const userRepayAmount = userAmountForNounce[1]
    const getUserAmountInBatchLiquityRes: GetUserAmountInBatchLiquityRes = {
      borrowAmount: userBorrowAmount,
      repayAmount: userRepayAmount
    }
    return getUserAmountInBatchLiquityRes;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}


/**
 * Retrieves user gas consumption for a specific batch nonce and user address 
 * @param this - The NimboraSDK instance.
 * @param props - The GetUserGasInBatchLiquityProps object containing troveAddress, batchNonce, and userAddress.
 * @returns A promise that resolves to the user's gas consumption as a bigint.
 */
export async function getUserGasInBatchLiquity(this: NimboraSDK, props: GetUserGasInBatchLiquityProps): Promise<bigint> {
  const { troveAddress, batchNonce, userAddress } = props
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  const troveContract = this.getTroveContract(troveAddress)
  const batchNonceUint256 = uint256.bnToUint256(batchNonce);
  try {
    const gasForNounce = await troveContract.get_user_gas_for_nonce(batchNonceUint256, userAddress);
    return gasForNounce;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}


/**
 * Calculates the number of users required to close a batch for a specific Trove.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the number of users required to close a batch as a bigint.
 */
export async function getNumberOfUsersToCloseBatchLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint> {
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }

  const batchGasUnitBn = await this.getBatchGasUnitLiquity(troveAddress);
  const batchGasPerUserUnitBn = await this.getBatchGasUnitPerUserLiquity(troveAddress);
  const numberOfUsersToClose = batchGasUnitBn / batchGasPerUserUnitBn

  return (numberOfUsersToClose)
}


/**
 * Calculates the total required gas to close a batch for a specific Trove.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the total required gas as a bigint.
 */
export async function getTotalRequiredGasFeeToCloseBatchLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint> {
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  const numberOfUsersBn = await this.getNumberOfUsersToCloseBatchLiquity(troveAddress);
  const batchGasFeePerUser = await this.getBatchGasFeePerUserLiquity(troveAddress)
  return (numberOfUsersBn * batchGasFeePerUser)
}

/**
 * Calculates the remaining gas fee required to close a batch for a specific Trove in Liquity.
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the remaining gas fee as a bigint.
 */
export async function getRemainingGasFeeToCloseBatch(this: NimboraSDK, troveAddress: string): Promise<bigint> {
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  const totalRequiredGasFeeToCloseBatchLiquity = await this.getTotalRequiredGasFeeToCloseBatchLiquity(troveAddress)
  const gasTank = await this.getGasTankLiquity(troveAddress);
  return (totalRequiredGasFeeToCloseBatchLiquity - gasTank)
}


/**
 * Retrieves the total debt of a Trove 
 * @param this - The NimboraSDK instance.
 * @param troveAddress - The address of the Trove.
 * @returns A promise that resolves to the total Trove debt as a bigint.
 */
export async function getTotalTroveDebtLiquity(this: NimboraSDK, troveAddress: string): Promise<bigint> {
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }

  console.log("trove foundddd ")
  const troveContract = this.getTroveContract(troveAddress)
  console.log("trove contreze ")

  try {
    const l1TotalDebt = await troveContract.get_l1_total_debt();
    return l1TotalDebt;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}


/**
 * Retrieves the debt of a specific user in a Trove 
 * @param this - The NimboraSDK instance.
 * @param props - The GetUserDebtLiquityProps object containing troveAddress and userAddress.
 * @returns A promise that resolves to the user's debt in the Trove as a bigint.
 */
export async function getUserDebtLiquity(this: NimboraSDK, props: GetUserDebtLiquityProps): Promise<bigint> {
  const { troveAddress, userAddress } = props
  if (!this.checkTrove(troveAddress)) {
    throw new ErrorWrapper({ code: ERROR_CODE.NOT_SUPPORTED_TROVE });
  }
  const troveContract = this.getTroveContract(troveAddress)
  try {
    const userDebt = await troveContract.get_user_debt(userAddress);
    return userDebt;
  } catch (e) {
    throw new ErrorWrapper({ code: ERROR_CODE.CANNOT_EXECUTE_CALL, error: e });
  }
}


/**
 * Retrieves the total supply of LUSD tokens.
 * @param this - The NimboraSDK instance.
 * @returns A promise that resolves to the total supply of LUSD tokens as a bigint.
 */
export async function getLUSDTotalSupply(this: NimboraSDK): Promise<bigint> {
  const lusdAddress = getLusdAddress(this.chainId)
  const lusdTotalSupply = this.getTotalSupply(lusdAddress)
  return lusdTotalSupply
}


/**
 * Calculates the required gas fee to participate in the current batch in Liquity.
 * @param this - The NimboraSDK instance.
 * @param props - An object containing Trove and user information.
 * @returns A promise that resolves to the required gas fee as a bigint.
 */
export async function getRequiredGasFeeToParticipateCurrrentBatchLiquity(this: NimboraSDK, props: GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps): Promise<bigint> {
  const { troveAddress, closeBatch, userAddress } = props
  const currentNounce = await this.getBatchCounterLiquity(troveAddress)
  const zeroBigInt: bigint = BigInt(0);

  if (closeBatch == true) {
    const totalRequiredGasFeeToCloseBatch = await this.getTotalRequiredGasFeeToCloseBatchLiquity(troveAddress)
    return (totalRequiredGasFeeToCloseBatch)
  } else {
    const getUserGasInBatchLiquityProps: GetUserGasInBatchLiquityProps = {
      troveAddress: troveAddress,
      batchNonce: parseFloat(currentNounce.toString()),
      userAddress: userAddress
    }
    const gasFeesSpent = await this.getUserGasInBatchLiquity(getUserGasInBatchLiquityProps)
    if (gasFeesSpent == zeroBigInt) {
      const batchGasFeePerUserLiquity = await this.getBatchGasFeePerUserLiquity(troveAddress)
      return (batchGasFeePerUserLiquity)
    } else {
      return (zeroBigInt)
    }
  }
}
