import {
  getDefaultConfig,
  Wallet,
  WalletDetailsParams,
} from '@rainbow-me/rainbowkit';
import { metaMaskWallet, rainbowWallet } from '@rainbow-me/rainbowkit/wallets';
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from '@web3auth/base';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import { Web3Auth } from '@web3auth/modal';
import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector';
import { createConnector as createWagmiConnector } from 'wagmi';
import { sepolia } from 'wagmi/chains';

import { CHAINS } from './chains';

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: `0x${sepolia.id.toString(16)}`,
  rpcTarget: sepolia.rpcUrls.default.http[0], // This is the public RPC we have added, please pass on your own endpoint while creating an app
  displayName: sepolia.name,
  tickerName: sepolia.nativeCurrency?.name,
  ticker: sepolia.nativeCurrency?.symbol,
  blockExplorerUrl: sepolia.blockExplorers?.default.url[0] as string,
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

const web3AuthInstance = new Web3Auth({
  clientId:
    'BIhkOlDrTtu7K7Vn8IWXWm8-eed7fJLwYoabmrALMxzePFblLbkpOEJ5Ii4uCaL6lCf7OePglcFJp1KX6mmUCgk',
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  chainConfig,
  privateKeyProvider,
  uiConfig: {
    // mode: 'dark',
    // useLogoLoader: true,
    // logoLight: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    // logoDark: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    // defaultLanguage: 'en',
    // theme: {
    //   primary: '#768729',
    // },
    // uxMode: UX_MODE.REDIRECT,
    modalZIndex: '2147483647',
  },
});

const web3AuthWallet = (): Wallet => ({
  id: 'web3auth',
  name: 'Web3auth',
  rdns: 'web3auth',
  iconUrl: 'https://web3auth.io/images/web3authlog.png',
  iconBackground: '#fff',
  installed: true,
  downloadUrls: {},
  createConnector: (walletDetails: WalletDetailsParams) =>
    createWagmiConnector(config => ({
      ...Web3AuthConnector({
        web3AuthInstance,
      })(config),
      ...walletDetails,
    })),
});

export const config = getDefaultConfig({
  appName: 'ZeroToOne.fun',
  projectId: 'b502e765c08150ac7e9ee16666b0ec28',
  chains: CHAINS,
  ssr: true, // If your dApp uses server side rendering (SSR)
  wallets: [
    {
      groupName: 'Recommended',
      wallets: [rainbowWallet, web3AuthWallet, metaMaskWallet],
    },
  ],
});
