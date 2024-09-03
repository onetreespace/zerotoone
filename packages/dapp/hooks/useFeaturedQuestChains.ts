import { useEffect, useState } from 'react';
import { Address } from 'viem';

import {
  getQuestChainsFromAddresses,
  QuestChainDisplayFragment,
} from '@/graphql';
import { isSupportedChain } from '@/web3';

const featuredQuestChains: { chainId: number; address: Address }[] = [];

const networkAddresses: Record<number, Address[]> = featuredQuestChains.reduce(
  (t: Record<number, Address[]>, a: { address: Address; chainId: number }) => {
    if (isSupportedChain(a.chainId)) {
      if (t[a.chainId]) {
        return { ...t, [a.chainId]: [...t[a.chainId], a.address] };
      }
      return { ...t, [a.chainId]: [a.address] };
    }
    return t;
  },
  {} as Record<number, Address[]>,
);

export const useFeaturedQuestChains = (): {
  error: unknown;
  fetching: boolean;
  results: QuestChainDisplayFragment[];
} => {
  const [error, setError] = useState<unknown>();
  const [fetching, setFetching] = useState<boolean>(false);
  const [results, setResults] = useState<QuestChainDisplayFragment[]>([]);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setFetching(true);
        const networks = Object.keys(networkAddresses).map(Number);
        const allResults = await Promise.all(
          networks.map(async chainId =>
            getQuestChainsFromAddresses(chainId, networkAddresses[chainId]),
          ),
        );

        const chains = allResults.reduce((t, a) => {
          t.push(...a);
          return t;
        }, []);

        // sort the array by the order of the featured quest chains
        const sortedChains = chains.sort((a, b) => {
          const aIndex = featuredQuestChains.findIndex(
            f => f.address === a.address && f.chainId === a.chainId,
          );
          const bIndex = featuredQuestChains.findIndex(
            f => f.address === b.address && f.chainId === b.chainId,
          );
          return aIndex - bIndex;
        });

        if (!isMounted) return;

        // max 6 featured quest chains
        setResults(sortedChains.slice(0, 6));
      } catch (err) {
        setError(err);
        setResults([]);
      } finally {
        setFetching(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    fetching,
    error,
    results,
  };
};
