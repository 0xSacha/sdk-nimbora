import { Call } from "starknet";
export declare enum ERROR_CODE {
    CANNOT_EXECUTE_TRANSACTION = 100,
    CANNOT_EXECUTE_CALL = 101,
    UNSUPPORTED_CHAIN_ID = 200,
    PROVIDER_REQUIRED = 400,
    AMOUNT_NUL = 401,
    NOT_SUPPORTED_TROVE = 402,
    NOT_ENOUGHT_LUSD = 403,
    NOT_ENOUGHT_ETH = 404,
    APPROVAL_REQUIRED = 405,
    NOTHING_TO_APPROVE = 406
}
export type GetAllowanceProps = {
    tokenAddress: string;
    userAddress: string;
    spender: string;
};
export type GetBalanceProps = {
    tokenAddress: string;
    userAddress: string;
};
export type BuildApproveCallProps = {
    tokenAddress: string;
    spenderAddress: string;
    amount: bigint;
};
export type GetAllowanceLiquityProps = {
    troveAddress: string;
    userAddress: string;
};
export type GetAllowanceLiquityRes = {
    allowanceEth: bigint;
    allowanceLusd: bigint;
};
export type GetUsersInBatchLiquityProps = {
    troveAddress: string;
    batchNonce: number;
};
export type GetUsersInBatchLiquityRes = {
    borrowList: string[];
    repayList: string[];
};
export type GetUserAmountInBatchLiquityProps = {
    troveAddress: string;
    batchNonce: number;
    userAddress: string;
};
export type GetUserAmountInBatchLiquityRes = {
    borrowAmount: bigint;
    repayAmount: bigint;
};
export type GetUserGasInBatchLiquityProps = {
    troveAddress: string;
    batchNonce: number;
    userAddress: string;
};
export type GetTimestampClosedBatchProps = {
    troveAddress: string;
    batchNonce: number;
};
export type GetUserDebtLiquityProps = {
    troveAddress: string;
    userAddress: string;
};
export type GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps = {
    troveAddress: string;
    userAddress: string;
    closeBatch: boolean;
};
export type CheckBalanceBorrowLiquityProps = {
    troveAddress: string;
    ethAmount: bigint;
    gasRequired: bigint;
    userAddress: string;
};
export type CheckBalanceRepayLiquityProps = {
    troveAddress: string;
    lusdAmount: bigint;
    gasRequired: bigint;
    userAddress: string;
};
export type CheckBalanceRepayLiquityRes = {
    isEnoughLusd: boolean;
    isEnoughEth: boolean;
};
export type CheckAllowanceBorrowLiquityProps = {
    troveAddress: string;
    ethAmount: bigint;
    gasRequired: bigint;
    userAddress: string;
};
export type CheckAllowanceRepayLiquityProps = {
    troveAddress: string;
    lusdAmount: bigint;
    gasRequired: bigint;
    userAddress: string;
};
export type CheckAllowanceRepayLiquityRes = {
    isEnoughAllowanceLusd: boolean;
    isEnoughAllowanceEth: boolean;
};
export type BuildCallDataApproveBorrowLiquityProps = {
    troveAddress: string;
    ethAmount: bigint;
    gasRequired: bigint;
};
export type BuildCallDataApproveRepayLiquityProps = {
    troveAddress: string;
    lusdAmount: bigint;
    gasRequired: bigint;
    isEnoughAllowanceLusd?: boolean;
    isEnoughAllowanceEth?: boolean;
};
export type BuildCallDataApproveRepayLiquityRes = {
    lusdApproveCall?: Call;
    ethApproveCall?: Call;
};
export type BuildCallDataBorrowLiquityProps = {
    troveAddress: string;
    ethAmount: bigint;
    gasRequired: bigint;
};
export type BuildCallDataRepayLiquityProps = {
    troveAddress: string;
    lusdAmount: bigint;
    gasRequired: bigint;
};
export type HandleBorrowLiquityProps = {
    troveAddress: string;
    ethAmount: bigint;
    closeBatch?: boolean;
    allowApprove?: boolean;
    referral?: string;
};
export type HandleBorrowLiquityManualProps = {
    troveAddress: string;
    ethAmount: bigint;
    gas: bigint;
    approveEth?: boolean;
    referral?: string;
};
export type HandleRepayLiquityProps = {
    troveAddress: string;
    lusdAmount: bigint;
    closeBatch?: boolean;
    allowApprove?: boolean;
    referral?: string;
};
export type HandleRepayLiquityManualProps = {
    troveAddress: string;
    lusdAmount: bigint;
    gas: bigint;
    approveLusd?: boolean;
    approveEth?: boolean;
    referral?: string;
};
export type TroveInfo = {
    id: string;
    address: string;
};
