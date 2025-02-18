export const wyzthTestnet = {
  id: 309,
  name: "Wyzth Testnet",
  network: "wyzth-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Wyzth",
    symbol: "WYZ",
  },
  rpcUrls: {
    default: { http: ["https://rpc-testnet3.wyzthchain.org"] },
  },
  blockExplorers: {
    default: { name: "WyzthScan", url: "https://rpc-testnet3.wyzthchain.org" },
  },
  testnet: true,
};

export const OWCT = {
  id: 309075,
  name: "One World Chain Mainnet",
  network: "oneworldchain",
  nativeCurrency: {
    decimals: 18,
    name: "One World Chain",
    symbol: "OWCT",
  },
  rpcUrls: {
    default: { http: ["https://mainnet-rpc.oneworldchain.org"] },
    public: { http: ["https://mainnet-rpc.oneworldchain.org"] },
  },
  blockExplorers: {
    default: { name: "OWCTScan", url: "https://mainnet-rpc.oneworldchain.org" },
  },

  testnet: false,
};

