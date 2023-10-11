import { constants, Account, Provider, SignerInterface } from 'starknet';
export declare class NimboraSDK {
    provider: Account | Provider;
    signer: SignerInterface | undefined;
    chainId: constants.StarknetChainId;
    constructor(provider: Account | Provider | undefined, chainId: constants.StarknetChainId);
    getBalance: (props: import("./config/types").GetBalanceProps) => Promise<bigint>;
    getAllowance: (props: import("./config/types").GetAllowanceProps) => Promise<bigint>;
    getTotalSupply: (tokenAddress: string) => Promise<bigint>;
    getGasPrice: () => Promise<bigint>;
    buildApproveCall: (props: import("./config/types").BuildApproveCallProps) => import("starknet").Call;
    estimateInvokeFee: (calls: import("starknet").AllowArray<import("starknet").Call>) => Promise<bigint>;
    getLiquityManagerContract: () => import("starknet").Contract;
    getTokenContract: (tokenAddress: string) => import("starknet").Contract;
    getEthContract: () => import("starknet").Contract;
    getLusdContract: () => import("starknet").Contract;
    getTroveContract: (troveAddress: string) => import("starknet").Contract;
    getOracleContract: () => import("starknet").Contract;
    getBatchGasUnitLiquity: (troveAddress: string) => Promise<bigint>;
    getBatchGasUnitPerUserLiquity: (troveAddress: string) => Promise<bigint>;
    getBatchGasFeePerUserLiquity: (troveAddress: string) => Promise<bigint>;
    getGasTankLiquity: (troveAddress: string) => Promise<bigint>;
    getAllowanceLiquity: (props: import("./config/types").GetAllowanceLiquityProps) => Promise<import("./config/types").GetAllowanceLiquityRes>;
    getBatchCounterLiquity: (troveAddress: string) => Promise<bigint>;
    getLastHandledBatchNonceLiquity: (troveAddress: string) => Promise<bigint>;
    getUsersInBatchLiquity: (props: import("./config/types").GetUsersInBatchLiquityProps) => Promise<import("./config/types").GetUsersInBatchLiquityRes>;
    getUserAmountInBatchLiquity: (props: import("./config/types").GetUserAmountInBatchLiquityProps) => Promise<import("./config/types").GetUserAmountInBatchLiquityRes>;
    getUserGasInBatchLiquity: (props: import("./config/types").GetUserGasInBatchLiquityProps) => Promise<bigint>;
    getNumberOfUsersToCloseBatchLiquity: (troveAddress: string) => Promise<bigint>;
    getTotalRequiredGasFeeToCloseBatchLiquity: (troveAddress: string) => Promise<bigint>;
    getTotalTroveDebtLiquity: (troveAddress: string) => Promise<bigint>;
    getRemainingGasFeeToCloseBatch: (troveAddress: string) => Promise<bigint>;
    getUserDebtLiquity: (props: import("./config/types").GetUserDebtLiquityProps) => Promise<bigint>;
    getLUSDTotalSupply: () => Promise<bigint>;
    getRequiredGasFeeToParticipateCurrrentBatchLiquity: (props: import("./config/types").GetRequiredGasFeeToParticipateCurrrentBatchLiquityProps) => Promise<bigint>;
    getTimestampClosedBatchLiquity: (props: import("./config/types").GetTimestampClosedBatchProps) => Promise<bigint>;
    getTotalTroveSupplyLiquity: (troveAddress: string) => Promise<bigint>;
    isRedistributionLiquity: (troveAddress: string) => Promise<boolean>;
    checkTrove: (troveAddress: string) => boolean;
    checkBalanceBorrowLiquity: (props: import("./config/types").CheckBalanceBorrowLiquityProps) => Promise<boolean>;
    checkBalanceRepayLiquity: (props: import("./config/types").CheckBalanceRepayLiquityProps) => Promise<import("./config/types").CheckBalanceRepayLiquityRes>;
    checkAllowanceBorrowLiquity: (props: import("./config/types").CheckAllowanceBorrowLiquityProps) => Promise<boolean>;
    checkAllowanceRepayLiquity: (props: import("./config/types").CheckAllowanceRepayLiquityProps) => Promise<import("./config/types").CheckAllowanceRepayLiquityRes>;
    buildCallDataApproveBorrowLiquity: (props: import("./config/types").BuildCallDataApproveBorrowLiquityProps) => import("starknet").Call;
    buildCallDataApproveRepayLiquity: (props: import("./config/types").BuildCallDataApproveRepayLiquityProps) => import("./config/types").BuildCallDataApproveRepayLiquityRes;
    buildCallDataBorrowLiquity: (props: import("./config/types").BuildCallDataBorrowLiquityProps) => import("starknet").Call;
    buildCallDataRepayLiquity: (props: import("./config/types").BuildCallDataRepayLiquityProps) => import("starknet").Call;
    handleBorrowLiquity: (props: import("./config/types").HandleBorrowLiquityProps) => Promise<string>;
    handleRepayLiquity: (props: import("./config/types").HandleRepayLiquityProps) => Promise<string>;
    handleBorrowLiquityManual: (props: import("./config/types").HandleBorrowLiquityManualProps) => Promise<string>;
    handleRepayLiquityManual: (props: import("./config/types").HandleRepayLiquityManualProps) => Promise<string>;
}
