import { Account, Provider } from 'starknet';
import { NimboraSDK } from './src';

describe('NimboraSDK Integration Tests', () => {
    let sdk: NimboraSDK;
    let token = "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
    let ad1 = "0x0259CDc9a9a43ac8Ce627A8341c3687Cc1E6E97b9E6A1A4b80dBC3d6E9ce734b";
    let ad2 = "0x02fa12e47978C846C5731A3cAa0Cc6e87cA4059993b0d92Fad6C8c47EA77894F";
    let trove = "0x57f1197af14b203fd3839bfb4e3830d636ac8502c3fcc639b98279deb059087";

    beforeAll(() => {
        const provider_testnet = new Provider({
            rpc: {
                nodeUrl: "https://starknet-goerli.infura.io/v3/b084e10c633d411db2ecc557100fc3ab"
            }
        });
        sdk = new NimboraSDK(provider_testnet);
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

    it('allowance defined', async () => {
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

    // it('getBatchGasUnitPerUserLiquity defined', async () => {
    //     const batchGasUnitPerUserLiquity = await sdk.getBatchGasUnitPerUserLiquity(trove);
    //     expect(batchGasUnitPerUserLiquity).toBeDefined();
    // });

    // it('getBatchGasFeePerUserLiquity defined', async () => {
    //     const batchGasFeePerUserLiquity = await sdk.getBatchGasFeePerUserLiquity(trove);
    //     expect(batchGasFeePerUserLiquity).toBeDefined();
    // });

    // it('getGasTankLiquity defined', async () => {
    //     const gasTankLiquity = await sdk.getGasTankLiquity(trove);
    //     expect(gasTankLiquity).toBeDefined();
    // });

    // it('getAllowanceLiquity defined', async () => {
    //     const allowanceLiquity = await sdk.getAllowanceLiquity({ troveAddress: trove, userAddress: ad1 });
    //     expect(allowanceLiquity).toBeDefined();
    // });

    // it('getBatchCounterLiquity defined', async () => {
    //     const batchCounterLiquity = await sdk.getBatchCounterLiquity(trove);
    //     expect(batchCounterLiquity).toBeDefined();
    // });

    // it('getLastHandledBatchNonceLiquity defined', async () => {
    //     const lastHandledBatchNonceLiquity = await sdk.getLastHandledBatchNonceLiquity(trove);
    //     expect(lastHandledBatchNonceLiquity).toBeDefined();
    // });

    // it('getUsersInBatchLiquity defined', async () => {
    //     const usersInBatchLiquity = await sdk.getUsersInBatchLiquity({ troveAddress: trove, batchNonce: 123 });
    //     expect(usersInBatchLiquity).toBeDefined();
    // });

    // it('getUserAmountInBatchLiquity defined', async () => {
    //     const userAmountInBatchLiquity = await sdk.getUserAmountInBatchLiquity({ troveAddress: trove, batchNonce: 123, userAddress: ad1 });
    //     expect(userAmountInBatchLiquity).toBeDefined();
    // });

    // it('getUserGasInBatchLiquity defined', async () => {
    //     const userGasInBatchLiquity = await sdk.getUserGasInBatchLiquity({ troveAddress: trove, batchNonce: 123, userAddress: ad1 });
    //     expect(userGasInBatchLiquity).toBeDefined();
    // });

    // it('getNumberOfUsersToCloseBatchLiquity defined', async () => {
    //     const numberOfUsersToCloseBatchLiquity = await sdk.getNumberOfUsersToCloseBatchLiquity(trove);
    //     expect(numberOfUsersToCloseBatchLiquity).toBeDefined();
    // });

    // it('getTotalRequiredGasFeeToCloseBatchLiquity defined', async () => {
    //     const totalRequiredGasFeeToCloseBatchLiquity = await sdk.getTotalRequiredGasFeeToCloseBatchLiquity(trove);
    //     expect(totalRequiredGasFeeToCloseBatchLiquity).toBeDefined();
    // });

    // it('getRemainingGasFeeToCloseBatch defined', async () => {
    //     const remainingGasFeeToCloseBatch = await sdk.getRemainingGasFeeToCloseBatch(trove);
    //     expect(remainingGasFeeToCloseBatch).toBeDefined();
    // });

    // it('getUserDebtLiquity defined', async () => {
    //     const userDebtLiquity = await sdk.getUserDebtLiquity({ troveAddress: trove, userAddress: ad1 });
    //     expect(userDebtLiquity).toBeDefined();
    // });


    // it('getRequiredGasFeeToParticipateCurrrentBatchLiquity defined', async () => {
    //     const requiredGasFeeToParticipateCurrrentBatchLiquity = await sdk.getRequiredGasFeeToParticipateCurrrentBatchLiquity({ troveAddress: trove, closeBatch: false, userAddress: ad1 });
    //     expect(requiredGasFeeToParticipateCurrrentBatchLiquity).toBeDefined();
    // });






    // Add more integration tests for other functions in a similar manner
});