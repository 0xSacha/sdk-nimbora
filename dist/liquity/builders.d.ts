import { NimboraSDK } from "..";
import { BuildCallDataApproveRepayLiquityProps, BuildCallDataApproveBorrowLiquityProps, BuildCallDataApproveRepayLiquityRes, BuildCallDataBorrowLiquityProps, BuildCallDataRepayLiquityProps } from "../config/types";
import { Call } from "starknet";
export declare function buildCallDataApproveBorrowLiquity(this: NimboraSDK, props: BuildCallDataApproveBorrowLiquityProps): Call;
export declare function buildCallDataApproveRepayLiquity(this: NimboraSDK, props: BuildCallDataApproveRepayLiquityProps): BuildCallDataApproveRepayLiquityRes;
export declare function buildCallDataBorrowLiquity(this: NimboraSDK, props: BuildCallDataBorrowLiquityProps): Call;
export declare function buildCallDataRepayLiquity(this: NimboraSDK, props: BuildCallDataRepayLiquityProps): Call;
