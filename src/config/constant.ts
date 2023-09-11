import { ERROR_CODE } from './types';

export const ERROR_CODE_DESC: Record<ERROR_CODE, string> = {
    [ERROR_CODE.CANNOT_EXECUTE_TRANSACTION]: 'CANNOT_CONFIRM_TRANSACTION',
    [ERROR_CODE.CANNOT_EXECUTE_CALL]: 'CANNOT_EXECUTE_CALL',
    [ERROR_CODE.UNSUPPORTED_CHAIN_ID]: 'UNSUPPORTED_CHAIN_ID',
    [ERROR_CODE.PROVIDER_REQUIRED]: 'PROVIDER_REQUIRED',
    [ERROR_CODE.AMOUNT_NUL]: 'AMOUNT_NUL',
    [ERROR_CODE.NOT_SUPPORTED_TOKEN]: 'NOT_SUPPORTED_TOKEN',
    [ERROR_CODE.INVALID_ETHEREUM_ADDRESS]: 'INVALID_ETHEREUM_ADDRESS',
    [ERROR_CODE.NOT_ENOUGHT_TOKEN]: 'NOT_ENOUGHT_TOKEN',
    [ERROR_CODE.NOT_ENOUGHT_ETH]: 'NOT_ENOUGHT_ETH',
    [ERROR_CODE.AMOUNT_TO_LOW_LIMIT]: 'AMOUNT_TO_LOW_LIMIT',
    [ERROR_CODE.AMOUNT_TO_HIGH_LIMIT]: 'AMOUNT_TO_HIGH_LIMIT',
    [ERROR_CODE.APPROVAL_REQUIRED]: 'APPROVAL_REQUIRED',
    [ERROR_CODE.NOTHING_TO_APPROVE]: 'NOTHING_TO_APPROVE',
};

export const ERROR_MESSAGE: Partial<Record<ERROR_CODE, string>> = {
    [ERROR_CODE.CANNOT_EXECUTE_TRANSACTION]: 'Issue when executing transactions',
    [ERROR_CODE.CANNOT_EXECUTE_CALL]: 'Issue when calling contract',
    [ERROR_CODE.UNSUPPORTED_CHAIN_ID]: 'Starknet Chain id not supported',
    [ERROR_CODE.PROVIDER_REQUIRED]: 'The Provider has to be passed as Account to the constructor to enable execution',
    [ERROR_CODE.AMOUNT_NUL]: 'The amount provided must not be nul',
    [ERROR_CODE.NOT_SUPPORTED_TOKEN]: 'The token provided is not supported',
    [ERROR_CODE.INVALID_ETHEREUM_ADDRESS]: 'The L1 recipient address is invalid',
    [ERROR_CODE.NOT_ENOUGHT_TOKEN]: 'The account provider token balance is lower than the desired amount (plus the gas if token is eth)',
    [ERROR_CODE.NOT_ENOUGHT_ETH]: 'The account provider eth token balance is lower than the amount to pay in gas',
    [ERROR_CODE.AMOUNT_TO_LOW_LIMIT]: 'The amount provided is too low',
    [ERROR_CODE.AMOUNT_TO_HIGH_LIMIT]: 'The amount provided is too high',
    [ERROR_CODE.APPROVAL_REQUIRED]: 'Insuficient allowance, you have to allow the approve',
    [ERROR_CODE.NOTHING_TO_APPROVE]: 'Nothing to be approved',
};

export const FEES_PRECISION: bigint = BigInt("1000000000000000000");
export const BRIDGE_DELAY_TIMESTAMP: number = 5 * 60 * 1000 // 1000 ms
