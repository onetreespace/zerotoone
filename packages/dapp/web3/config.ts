import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { metaMaskWallet, rainbowWallet } from '@rainbow-me/rainbowkit/wallets';
import { mainnet, sepolia } from '@wagmi/core/chains';
import { http } from 'viem';

import { rainbowWeb3AuthConnector } from './auth';

export const config = getDefaultConfig({
  appName: 'ZeroToOne.fun',
  projectId: 'b502e765c08150ac7e9ee16666b0ec28',
  chains: [mainnet, sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  wallets: [
    {
      groupName: 'Recommended',
      wallets: [rainbowWallet, rainbowWeb3AuthConnector, metaMaskWallet],
    },
  ],
});
