import { ERROR_CODE } from './types';

export const ERROR_CODE_DESC: Record<ERROR_CODE, string> = {
    [ERROR_CODE.CANNOT_EXECUTE_TRANSACTION]: 'CANNOT_CONFIRM_TRANSACTION',
    [ERROR_CODE.CANNOT_EXECUTE_CALL]: 'CANNOT_EXECUTE_CALL',
    [ERROR_CODE.UNSUPPORTED_CHAIN_ID]: 'UNSUPPORTED_CHAIN_ID',
    [ERROR_CODE.PROVIDER_REQUIRED]: 'PROVIDER_REQUIRED',
    [ERROR_CODE.AMOUNT_NUL]: 'AMOUNT_NUL',
    [ERROR_CODE.NOT_SUPPORTED_TROVE]: 'NOT_SUPPORTED_TROVE',
    [ERROR_CODE.NOT_ENOUGHT_LUSD]: 'NOT_ENOUGHT_LUSD',
    [ERROR_CODE.NOT_ENOUGHT_ETH]: 'NOT_ENOUGHT_ETH',
    [ERROR_CODE.APPROVAL_REQUIRED]: 'APPROVAL_REQUIRED',
    [ERROR_CODE.NOTHING_TO_APPROVE]: 'NOTHING_TO_APPROVE',
};

export const ERROR_MESSAGE: Partial<Record<ERROR_CODE, string>> = {
    [ERROR_CODE.CANNOT_EXECUTE_TRANSACTION]: 'Issue when executing transactions',
    [ERROR_CODE.CANNOT_EXECUTE_CALL]: 'Issue when calling contract',
    [ERROR_CODE.UNSUPPORTED_CHAIN_ID]: 'Starknet Chain id not supported',
    [ERROR_CODE.PROVIDER_REQUIRED]: 'The Provider has to be passed as Account to the constructor to enable execution',
    [ERROR_CODE.AMOUNT_NUL]: 'The amount provided must not be nul',
    [ERROR_CODE.NOT_SUPPORTED_TROVE]: 'Unknow trove address for chain id',
    [ERROR_CODE.NOT_ENOUGHT_LUSD]: 'The account provider lusd balance is lower than the desired amount',
    [ERROR_CODE.NOT_ENOUGHT_ETH]: 'The account provider eth token balance is lower than the amount to pay in gas (+ the amount in eth if if borrow)',
    [ERROR_CODE.APPROVAL_REQUIRED]: 'Insuficient allowance, you have to allow the approve',
    [ERROR_CODE.NOTHING_TO_APPROVE]: 'Nothing to be approved',
};

