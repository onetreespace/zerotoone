import { createPublicClient, http, PublicClient } from 'viem';
import { anvil, Chain, mainnet } from 'wagmi/chains';

type _chains = readonly [Chain, ...Chain[]];

export const CHAINS: _chains = [anvil];

export type SupportedChainId = (typeof CHAINS)[number]['id'];

export const getPublicClient = (
  chainId: SupportedChainId | 1,
): PublicClient => {
  const chain = chainId === 1 ? mainnet : CHAINS.find(c => c.id === chainId)!;
  return createPublicClient({
    chain,
    transport: http(),
  });
};
