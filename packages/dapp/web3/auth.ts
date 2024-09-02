import { Chain, Wallet, WalletDetailsParams } from '@rainbow-me/rainbowkit';
import {
  CHAIN_NAMESPACES,
  IProvider,
  UX_MODE,
  WALLET_ADAPTERS,
  WEB3AUTH_NETWORK,
} from '@web3auth/base';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import { Web3Auth, Web3AuthOptions } from '@web3auth/modal';
import { WalletServicesPlugin } from '@web3auth/wallet-services-plugin';
import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector';
import { getAddress, WalletClient } from 'viem';
import { createConnector as createWagmiConnector } from 'wagmi';

import { createToken, verifyToken } from '@/lib/auth';
import {
  getFromStorage,
  removeFromStorage,
  setInStorage,
  STORAGE_KEYS,
} from '@/utils/storageHelpers';

const getExistingToken = async (
  walletClient: WalletClient,
): Promise<string | null> => {
  const tokenFromStorage = getFromStorage(STORAGE_KEYS.AUTH_TOKEN);
  if (!tokenFromStorage) return null;

  const token = tokenFromStorage.split(' ')[1];
  if (!token) return null;

  const [signerAddress] = await walletClient.getAddresses();
  const verifiedAddress = verifyToken(token);

  if (
    !verifiedAddress ||
    verifiedAddress.toLowerCase() !== signerAddress.toLowerCase()
  ) {
    removeFromStorage(STORAGE_KEYS.AUTH_TOKEN);
    return null;
  }

  return token;
};

export const authenticateWallet = async (
  walletClient: WalletClient,
): Promise<string> => {
  const existingToken = await getExistingToken(walletClient);
  const token = existingToken ?? (await createToken(walletClient));
  setInStorage(STORAGE_KEYS.AUTH_TOKEN, `Bearer ${token}`);
  return token;
};

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: '0x1', // Please use 0x1 for Mainnet
  rpcTarget: 'https://rpc.ankr.com/eth',
  displayName: 'Ethereum Mainnet',
  blockExplorerUrl: 'https://etherscan.io/',
  ticker: 'ETH',
  tickerName: 'Ethereum',
  logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});
const clientId =
  'BIhkOlDrTtu7K7Vn8IWXWm8-eed7fJLwYoabmrALMxzePFblLbkpOEJ5Ii4uCaL6lCf7OePglcFJp1KX6mmUCgk';

const web3AuthInstance = new Web3Auth({
  clientId: clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  privateKeyProvider,
  uiConfig: {
    mode: 'dark',
    useLogoLoader: true,
    logoLight: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    logoDark: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    defaultLanguage: 'en',
    theme: {
      primary: '#768729',
    },
    uxMode: UX_MODE.REDIRECT,
    modalZIndex: '2147483647',
  },
});

export const rainbowWeb3AuthConnector = (): Wallet => ({
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
