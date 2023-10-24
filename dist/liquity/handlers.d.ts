import { NimboraSDK } from '../.';
import { HandleBatchLiquityManualProps, HandleBorrowLiquityManualProps, HandleBorrowLiquityProps, HandleRepayLiquityManualProps, HandleRepayLiquityProps } from '../config/types';
export declare function handleBorrowLiquity(this: NimboraSDK, props: HandleBorrowLiquityProps): Promise<string>;
export declare function handleBorrowLiquityManual(this: NimboraSDK, props: HandleBorrowLiquityManualProps): Promise<string>;
export declare function handleRepayLiquity(this: NimboraSDK, props: HandleRepayLiquityProps): Promise<string>;
export declare function handleRepayLiquityManual(this: NimboraSDK, props: HandleRepayLiquityManualProps): Promise<string>;
export declare function handleBatchLiquityManual(this: NimboraSDK, props: HandleBatchLiquityManualProps): Promise<string>;
