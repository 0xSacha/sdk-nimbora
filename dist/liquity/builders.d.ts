import { NimboraSDK } from "..";
import { BuildCallDataApproveRepayLiquityProps, BuildCallDataApproveBorrowLiquityProps, BuildCallDataApproveRepayLiquityRes, BuildCallDataBorrowLiquityProps, BuildCallDataRepayLiquityProps } from "../config/types";
import { Call } from "starknet";
export declare function buildCallDataApproveBorrowLiquity(this: NimboraSDK, props: BuildCallDataApproveBorrowLiquityProps): Promise<Call>;
export declare function buildCallDataApproveRepayLiquity(this: NimboraSDK, props: BuildCallDataApproveRepayLiquityProps): Promise<BuildCallDataApproveRepayLiquityRes>;
export declare function buildCallDataBorrowLiquity(this: NimboraSDK, props: BuildCallDataBorrowLiquityProps): Promise<Call>;
export declare function buildCallDataRepayLiquity(this: NimboraSDK, props: BuildCallDataRepayLiquityProps): Promise<Call>;
