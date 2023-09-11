
// 1xx - blockchain error
// 2xx - sdk error

import { Call } from "starknet";


// 4xx - user's errors
export enum ERROR_CODE {
  CANNOT_EXECUTE_TRANSACTION = 100,
  CANNOT_EXECUTE_CALL = 101,
  UNSUPPORTED_CHAIN_ID = 200,
  PROVIDER_REQUIRED = 400,
  AMOUNT_NUL = 401,
  NOT_SUPPORTED_TOKEN = 402,
  INVALID_ETHEREUM_ADDRESS = 403,
  NOT_ENOUGHT_TOKEN = 404,
  NOT_ENOUGHT_ETH = 405,
  AMOUNT_TO_LOW_LIMIT = 406,
  AMOUNT_TO_HIGH_LIMIT = 407,
  APPROVAL_REQUIRED = 408,
  NOTHING_TO_APPROVE = 409
}

// Handle Fast Withdraw
export type RequestWithdrawalProps = {
  token: string,
  amount: bigint,
  l1Recipient: string,
  allowApprove?: boolean,
  referral?: string;
};


// Getters
export type ExecutFastWithdrawalProps = {
  token: string,
  amount: bigint,
  l1Recipient: string
};
export type GetAllowanceFwProps = {
  tokenAddress: string,
  userAddress: string,
};
export type GetBalanceProps = {
  tokenAddress: string,
  userAddress: string,
};
export type GetLimitRes = {
  limitLow: bigint,
  limitHigh: bigint,
};

export type QuoteFwResProps = {
  tokenAddress: string,
  desiredAmount: bigint,
};

export type QuoteFwRes = {
  gasCost: bigint,
  receiveAmount: bigint,
  bridgeDelay: number,
  refundDelay: number
};

// Checkers
export type CheckBalanceFwProps = {
  tokenAddress: string,
  userAddress: string,
  desiredAmount: bigint
};
export type CheckBalanceFwRes = {
  isEnoughtToken: boolean,
  isEnoughtEth: boolean,
};
export type CheckAllowanceFwProps = {
  tokenAddress: string,
  userAddress: string,
  desiredAmount: bigint
};
export type CheckAllowanceFwRes = {
  isEnoughtAllowanceToken: boolean,
  isEnoughtAllowanceEth: boolean,
};
export type CheckLimitFwProps = {
  tokenAddress: string,
  desiredAmount: bigint
};
export type CheckLimitFwRes = {
  isLowThresholdReached: boolean,
  isHighThresholdReached: boolean,
};


// CallData builders
export type BuildCallDataApproveFwProps = {
  tokenAddress: string,
  userAddress: string,
  desiredAmount: bigint,
  isEnoughtAllowanceToken?: boolean,
  isEnoughtAllowanceEth?: boolean,
};

// CallData builders
export type BuildCallDataApproveFwRes = {
  tokenApproveCall: Call,
  ethApproveCall?: Call,
};

export type BuildCallDataDepositFwProps = {
  tokenAddress: string,
  desiredAmount: bigint,
  l1Recipient: string
};


