export const networksConfig = {
  hederaTestnet: {
    name: 'Hedera Testnet',
    chain: 'Hedera',
    icon: 'hedera',
    rpc: ['https://testnet.hashio.io/api'],
    features: [
      {
        name: 'EIP155',
      },
      {
        name: 'EIP1559',
      },
    ],
    faucets: ['https://portal.hedera.com'],
    nativeCurrency: {
      name: 'hbar',
      symbol: 'HBAR',
      decimals: 18,
    },
    infoURL: 'https://hedera.com',
    shortName: 'hedera-testnet',
    chainId: 296,
    networkId: 296,
    slip44: 1,
    explorers: [
      {
        name: 'HashScan',
        url: 'https://hashscan.io/testnet',
        standard: 'EIP3091',
      },
      {
        name: 'Arkhia Explorer',
        url: 'https://explorer.arkhia.io',
        standard: 'none',
      },
      {
        name: 'DragonGlass',
        url: 'https://app.dragonglass.me',
        standard: 'none',
      },
      {
        name: 'Hedera Explorer',
        url: 'https://hederaexplorer.io',
        standard: 'none',
      },
      {
        name: 'Ledger Works Explore',
        url: 'https://explore.lworks.io',
        standard: 'none',
      },
    ],
  },
  hederaMainnet: {
    name: 'Hedera Mainnet',
    chain: 'Hedera',
    icon: 'hedera',
    rpc: ['https://mainnet.hashio.io/api'],
    features: [
      {
        name: 'EIP155',
      },
      {
        name: 'EIP1559',
      },
    ],
    faucets: [],
    nativeCurrency: {
      name: 'hbar',
      symbol: 'HBAR',
      decimals: 18,
    },
    infoURL: 'https://hedera.com',
    shortName: 'hedera-mainnet',
    chainId: 295,
    networkId: 295,
    slip44: 3030,
    explorers: [
      {
        name: 'HashScan',
        url: 'https://hashscan.io/mainnet',
        standard: 'EIP3091',
      },
      {
        name: 'Arkhia Explorer',
        url: 'https://explorer.arkhia.io',
        standard: 'none',
      },
      {
        name: 'DragonGlass',
        url: 'https://app.dragonglass.me',
        standard: 'none',
      },
      {
        name: 'Hedera Explorer',
        url: 'https://hederaexplorer.io',
        standard: 'none',
      },
      {
        name: 'Ledger Works Explore',
        url: 'https://explore.lworks.io',
        standard: 'none',
      },
    ],
  },
};
