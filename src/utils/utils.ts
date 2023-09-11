export function isValidEthereumAddress(address: string): boolean {
    // Ethereum addresses are 40-character hexadecimal strings
    const ethereumAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;

    return ethereumAddressRegex.test(address);
}