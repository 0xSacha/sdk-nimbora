"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_INVOKE_FEES_REPAY = exports.MAX_INVOKE_FEES_BORROW = exports.ERROR_MESSAGE = exports.ERROR_CODE_DESC = void 0;
var types_1 = require("./types");
exports.ERROR_CODE_DESC = (_a = {},
    _a[types_1.ERROR_CODE.CANNOT_EXECUTE_TRANSACTION] = 'CANNOT_CONFIRM_TRANSACTION',
    _a[types_1.ERROR_CODE.CANNOT_EXECUTE_CALL] = 'CANNOT_EXECUTE_CALL',
    _a[types_1.ERROR_CODE.UNSUPPORTED_CHAIN_ID] = 'UNSUPPORTED_CHAIN_ID',
    _a[types_1.ERROR_CODE.PROVIDER_REQUIRED] = 'PROVIDER_REQUIRED',
    _a[types_1.ERROR_CODE.AMOUNT_NUL] = 'AMOUNT_NUL',
    _a[types_1.ERROR_CODE.NOT_SUPPORTED_TROVE] = 'NOT_SUPPORTED_TROVE',
    _a[types_1.ERROR_CODE.NOT_ENOUGHT_LUSD] = 'NOT_ENOUGHT_LUSD',
    _a[types_1.ERROR_CODE.NOT_ENOUGHT_ETH] = 'NOT_ENOUGHT_ETH',
    _a[types_1.ERROR_CODE.APPROVAL_REQUIRED] = 'APPROVAL_REQUIRED',
    _a[types_1.ERROR_CODE.NOTHING_TO_APPROVE] = 'NOTHING_TO_APPROVE',
    _a);
exports.ERROR_MESSAGE = (_b = {},
    _b[types_1.ERROR_CODE.CANNOT_EXECUTE_TRANSACTION] = 'Issue when executing transactions',
    _b[types_1.ERROR_CODE.CANNOT_EXECUTE_CALL] = 'Issue when calling contract',
    _b[types_1.ERROR_CODE.UNSUPPORTED_CHAIN_ID] = 'Starknet Chain id not supported',
    _b[types_1.ERROR_CODE.PROVIDER_REQUIRED] = 'The Provider has to be passed as Account to the constructor to enable execution',
    _b[types_1.ERROR_CODE.AMOUNT_NUL] = 'The amount provided must not be nul',
    _b[types_1.ERROR_CODE.NOT_SUPPORTED_TROVE] = 'Unknow trove address for chain id',
    _b[types_1.ERROR_CODE.NOT_ENOUGHT_LUSD] = 'The account provider lusd balance is lower than the desired amount',
    _b[types_1.ERROR_CODE.NOT_ENOUGHT_ETH] = 'The account provider eth token balance is lower than the amount to pay in gas (+ the amount in eth if if borrow)',
    _b[types_1.ERROR_CODE.APPROVAL_REQUIRED] = 'Insuficient allowance, you have to allow the approve',
    _b[types_1.ERROR_CODE.NOTHING_TO_APPROVE] = 'Nothing to be approved',
    _b);
exports.MAX_INVOKE_FEES_BORROW = BigInt("24340500219064");
exports.MAX_INVOKE_FEES_REPAY = BigInt("25340500219064"); // to update
