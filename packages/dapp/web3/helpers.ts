import { getAddress } from 'viem';

import { CHAINS, SupportedChainId } from './chains';

type ChainBlockExplorer = {
  name: string;
  url: string;
  apiUrl?: string | undefined;
};

export const formatAddress = (
  address: string | null | undefined,
  ensName?: string | null,
  chars = 5,
): string => {
  if (ensName) return ensName;
  if (address) {
    address = getAddress(address); // eslint-disable-line no-param-reassign
    return `${address.slice(0, chars)}...${address.slice(
      address.length - chars,
    )}`;
  }
  return '';
};

const getBlockExplorer = (
  chainId: SupportedChainId,
): ChainBlockExplorer | undefined => {
  const chain = CHAINS.find(c => c.id === chainId);
  return chain!.blockExplorers?.default;
};

export const isSupportedChain = (
  chainId: number | undefined | null,
): chainId is SupportedChainId => {
  if (!chainId) return false;
  return CHAINS.some(chain => chain.id === chainId);
};

export const getTxUrl = (
  txHash: string,
  chainId: number | null | undefined,
): string => {
  if (!txHash || !isSupportedChain(chainId)) return '';
  const { url: explorer } = getBlockExplorer(chainId) ?? {};
  if (!explorer) return '';
  return `${explorer}/tx/${txHash}`;
};

export const getAddressUrl = (
  address: string,
  chainId: number | null | undefined,
): string => {
  if (!address || !isSupportedChain(chainId)) return '';
  const { url: explorer } = getBlockExplorer(chainId) ?? {};
  if (!explorer) return '';
  return `${explorer}/address/${address}`;
};

export const getExplorerLabel = (
  chainId: number | null | undefined,
): string => {
  if (!isSupportedChain(chainId)) return '';
  const { name: explorerLabel } = getBlockExplorer(chainId) ?? {};
  return explorerLabel ?? '';
};
