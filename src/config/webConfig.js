
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { wyzthTestnet,OWCT } from "./chain";

export const config = getDefaultConfig({
  appName: "Web3 Test",
  projectId: "0xAeB0a43fba46E0e2CC2aB3B53e02dc2234ecd704",
  chains: [wyzthTestnet, mainnet, polygon, optimism, arbitrum, base,OWCT],
  ssr: true,
});
