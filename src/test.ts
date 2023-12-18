import { RpcProvider, constants } from 'starknet';
import { NimboraSDK } from '.';

describe('NimboraSDK Integration Tests', () => {
    let sdk: NimboraSDK;
    let accountSdk: NimboraSDK;
    let token = "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
    let ad1 = "0x0259cdc9a9a43ac8ce627a8341c3687cc1e6e97b9e6a1a4b80dbc3d6e9ce734b";
    let ad2 = "0x02fa12e47978C846C5731A3cAa0Cc6e87cA4059993b0d92Fad6C8c47EA77894F";
    // let trove = "0x057f1197af14b203fd3839bfb4e3830d636ac8502c3fcc639b98279deb059087";
    // let trove_mainnet = "0x03580a65260563b5511ddf2eafb83d6b309dce7fc25271df8c040a437f09a399";

    let trove = "0x057f1197af14b203fd3839bfb4e3830d636ac8502c3fcc639b98279deb059087"
    beforeAll(() => {
        const provider_testnet = new RpcProvider({
            nodeUrl: constants.StarknetChainId.SN_GOERLI
        });
        // const provider_mainnet = new Provider({
        //     rpc: {
        //         nodeUrl: "https://starknet-mainnet.infura.io/v3/b084e10c633d411db2ecc557100fc3ab"
        //     }
        // });
        sdk = new NimboraSDK(provider_testnet, constants.StarknetChainId.SN_GOERLI);



        // const accountAddress = ""
        // const accountPk = ""
        // const account: Account = new Account(provider_testnet, accountAddress, accountPk)
        // accountSdk = new NimboraSDK(account, constants.StarknetChainId.SN_GOERLI);



    });

    it('balance defined', async () => {
        const balance = await sdk.getBalance({ tokenAddress: token, userAddress: ad1 });
        expect(balance).toBeDefined();
    });

    it('total Supply defined', async () => {
        const totalSupply = await sdk.getTotalSupply(token);
        expect(totalSupply).toBeDefined();
    });

    it('allowance defined', async () => {
        const allowance = await sdk.getAllowance({ tokenAddress: token, userAddress: ad1, spender: ad2 });
        expect(allowance).toBeDefined();
    });

    it('gas price defined defined', async () => {
        const gasPrice = await sdk.getGasPrice();
        expect(gasPrice).toBeDefined();
    });

    it('lusd supply defined', async () => {
        const lusdSupply = await sdk.getLUSDTotalSupply();
        expect(lusdSupply).toBeDefined();
    });

    it('totalTroveDebtLiquity defined', async () => {
        const totalTroveDebtLiquity = await sdk.getTotalTroveDebtLiquity(trove);
        expect(totalTroveDebtLiquity).toBeDefined();
    });

    it('getBatchGasUnitLiquity defined', async () => {
        const batchGasUnitLiquity = await sdk.getBatchGasUnitLiquity(trove);
        expect(batchGasUnitLiquity).toBeDefined();
    });

    it('getBatchGasUnitPerUserLiquity defined', async () => {
        const batchGasUnitPerUserLiquity = await sdk.getBatchGasUnitPerUserLiquity(trove);
        expect(batchGasUnitPerUserLiquity).toBeDefined();
    });

    it('getBatchGasFeePerUserLiquity defined', async () => {
        const batchGasFeePerUserLiquity = await sdk.getBatchGasFeePerUserLiquity(trove);
        expect(batchGasFeePerUserLiquity).toBeDefined();
    });


    it('chain id  defined', async () => {
        const chainId = sdk.chainId;
        expect(chainId).toBeDefined();
    });

    it('getGasTankLiquity defined', async () => {
        const gasTankLiquity = await sdk.getGasTankLiquity(trove);
        expect(gasTankLiquity).toBeDefined();
    });

    it('getAllowanceLiquity defined', async () => {
        const allowanceLiquity = await sdk.getAllowanceLiquity({ troveAddress: trove, userAddress: ad1 });
        expect(allowanceLiquity).toBeDefined();
    });

    it('getBatchCounterLiquity defined', async () => {
        const batchCounterLiquity = await sdk.getBatchCounterLiquity(trove);
        expect(batchCounterLiquity).toBeDefined();
    });

    it('getLastHandledBatchNonceLiquity defined', async () => {
        const lastHandledBatchNonceLiquity = await sdk.getLastHandledBatchNonceLiquity(trove);
        expect(lastHandledBatchNonceLiquity).toBeDefined();
    });

    it('getUsersInBatchLiquity defined', async () => {
        const usersInBatchLiquity = await sdk.getUsersInBatchLiquity({ troveAddress: trove, batchNonce: 123 });
        expect(usersInBatchLiquity).toBeDefined();
    });

    it('getUserAmountInBatchLiquity defined', async () => {
        const userAmountInBatchLiquity = await sdk.getUserAmountInBatchLiquity({ troveAddress: trove, batchNonce: 123, userAddress: ad1 });
        expect(userAmountInBatchLiquity).toBeDefined();
    });

    it('getUserGasInBatchLiquity defined', async () => {
        const userGasInBatchLiquity = await sdk.getUserGasInBatchLiquity({ troveAddress: trove, batchNonce: 123, userAddress: ad1 });
        expect(userGasInBatchLiquity).toBeDefined();
    });

    it('getNumberOfUsersToCloseBatchLiquity defined', async () => {
        const numberOfUsersToCloseBatchLiquity = await sdk.getNumberOfUsersToCloseBatchLiquity(trove);
        expect(numberOfUsersToCloseBatchLiquity).toBeDefined();
    });

    it('getTotalRequiredGasFeeToCloseBatchLiquity defined', async () => {
        const totalRequiredGasFeeToCloseBatchLiquity = await sdk.getTotalRequiredGasFeeToCloseBatchLiquity(trove);
        expect(totalRequiredGasFeeToCloseBatchLiquity).toBeDefined();
    });

    it('getRemainingGasFeeToCloseBatch defined', async () => {
        const remainingGasFeeToCloseBatch = await sdk.getRemainingGasFeeToCloseBatch(trove);
        expect(remainingGasFeeToCloseBatch).toBeDefined();
    });

    it('getUserDebtLiquity defined', async () => {
        const userDebtLiquity = await sdk.getUserDebtLiquity({ troveAddress: trove, userAddress: ad1 });
        expect(userDebtLiquity).toBeDefined();
    });

    it('getRequiredGasFeeToParticipateCurrrentBatchLiquity defined', async () => {
        const requiredGasFeeToParticipateCurrrentBatchLiquity = await sdk.getRequiredGasFeeToParticipateCurrrentBatchLiquity({ troveAddress: trove, closeBatch: false, userAddress: ad1 });
        expect(requiredGasFeeToParticipateCurrrentBatchLiquity).toBeDefined();
    });

    it('getEthContract defined', async () => {
        const ethContract = sdk.getEthContract();
        expect(ethContract.address).toBeDefined();
    });

    it('getTimestampClosedBatchLiquity defined', async () => {
        const ts = await sdk.getTimestampClosedBatchLiquity({ troveAddress: trove, batchNonce: 8 });
        expect(ts).toBeDefined();
    });

    it('getTotalTroveSupplyLiquity defined', async () => {
        const tsupply = await sdk.getTotalTroveSupplyLiquity(trove);
        expect(tsupply).toBeDefined();
    });

    it('isRedistributionLiquity defined', async () => {
        const isRedistribution = await sdk.isRedistributionLiquity(trove);
        expect(isRedistribution).toBeDefined();
    });


    // it('Get borrow invoke fees defined', async () => {
    //     let callsToExecute: Call[] = [];
    //     const ethAmount = BigInt("1000000000000000")
    //     const requiredGasFeeToParticipateCurrrentBatchLiquity = await accountSdk.getRequiredGasFeeToParticipateCurrrentBatchLiquity({ troveAddress: trove, closeBatch: false, userAddress: ad1 });
    //     let buildCallDataApproveBorrowLiquityProps: BuildCallDataApproveBorrowLiquityProps = {
    //         troveAddress: trove,
    //         ethAmount: ethAmount,
    //         gasRequired: requiredGasFeeToParticipateCurrrentBatchLiquity
    //     };
    //     let ethApproveCall = accountSdk.buildCallDataApproveBorrowLiquity(buildCallDataApproveBorrowLiquityProps);
    //     callsToExecute.push(ethApproveCall);
    //     let buildCallDataBorrowLiquityProps: BuildCallDataBorrowLiquityProps = {
    //         troveAddress: trove,
    //         ethAmount: ethAmount,
    //         gasRequired: requiredGasFeeToParticipateCurrrentBatchLiquity
    //     };
    //     let borrowCall = accountSdk.buildCallDataBorrowLiquity(buildCallDataBorrowLiquityProps);
    //     callsToExecute.push(borrowCall);

    //     const maxGasFeeInvoke = await accountSdk.estimateInvokeFee(callsToExecute)
    //     console.log(maxGasFeeInvoke)
    //     expect(maxGasFeeInvoke).toBeDefined();
    // });

    // it('Get repay invoke fees defined', async () => {
    //     let callsToExecute: Call[] = [];
    //     const lusdAmount = BigInt("1000000000000000")
    //     const requiredGasFeeToParticipateCurrrentBatchLiquity = await accountSdk.getRequiredGasFeeToParticipateCurrrentBatchLiquity({ troveAddress: trove, closeBatch: false, userAddress: ad1 });

    //     let buildCallDataApproveRepayLiquityProps: BuildCallDataApproveRepayLiquityProps = {
    //         troveAddress: trove,
    //         lusdAmount: lusdAmount,
    //         gasRequired: requiredGasFeeToParticipateCurrrentBatchLiquity,
    //     };

    //     let buildCallDataApproveRepayLiquityRes: BuildCallDataApproveRepayLiquityRes = accountSdk.buildCallDataApproveRepayLiquity(buildCallDataApproveRepayLiquityProps);
    //     if (buildCallDataApproveRepayLiquityRes.ethApproveCall) {
    //         callsToExecute.push(buildCallDataApproveRepayLiquityRes.ethApproveCall);
    //     }
    //     if (buildCallDataApproveRepayLiquityRes.lusdApproveCall) {
    //         callsToExecute.push(buildCallDataApproveRepayLiquityRes.lusdApproveCall);
    //     }

    //     let buildCallDataBorrowLiquityProps: BuildCallDataRepayLiquityProps = {
    //         troveAddress: trove,
    //         lusdAmount: lusdAmount,
    //         gasRequired: requiredGasFeeToParticipateCurrrentBatchLiquity
    //     };

    //     let repayCall = accountSdk.buildCallDataRepayLiquity(buildCallDataBorrowLiquityProps);
    //     callsToExecute.push(repayCall);

    //     const maxGasFeeInvoke = await accountSdk.estimateInvokeFee(callsToExecute)

    //     console.log(maxGasFeeInvoke)
    //     expect(maxGasFeeInvoke).toBeDefined();
    // });



});