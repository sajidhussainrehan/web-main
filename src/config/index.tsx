import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import {
  Address,
  Chain,
  createPublicClient,
  createWalletClient,
  http,
} from "viem";

import { cookieStorage, createStorage } from "wagmi";
import { arbitrum, arbitrumSepolia } from "wagmi/chains";

import { SmartWhalesPresaleABI } from "@/abi/abi";
import { erc20Abi } from "viem";

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

export const activeChain: Chain = arbitrumSepolia;
const chains = [activeChain] as const;

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://smartwhales.ai", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const smartWhalesTokenContractAddress: Address =
  "0xD58e23614c49128B4F7BA0d98DeDBF368000e073";
export const smartWhalesTokenContract = {
  address: smartWhalesTokenContractAddress,
  abi: erc20Abi,
} as const;

const smartWhalesPresaleContractAddress: Address =
  "0xf2839447F85C3E4643ABF19572D39e2143D28EEC";
export const smartWhalesPresaleContract = {
  address: smartWhalesPresaleContractAddress,
  abi: SmartWhalesPresaleABI,
} as const;

// If acticeChain is mainnet, it'll automatically use USDT contract address (0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9)
// If you're testing on the testnet, deploy a dummy erc20 token and plug in its address here
const usdtContractAddress: Address =
  activeChain === arbitrum
    ? "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
    : "0x722266970CB05434E94c00d72cf487F27ec52A50";
export const usdtContract = {
  address: usdtContractAddress,
  abi: erc20Abi,
} as const;

const transportUrl: string =
  activeChain.id === arbitrum.id
    ? "https://1rpc.io/arb"
    : "https://endpoints.omniatech.io/v1/arbitrum/sepolia/public";
const transport = http(transportUrl);
export const publicClient = createPublicClient({
  chain: activeChain,
  transport: http(transportUrl),
});

// Create wagmiConfig
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  // ...wagmiOptions // Optional - Override createConfig parameters
});
