import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

import { getCreatedQuestChains, QuestChainDisplayFragment } from '@/graphql';
import { useRefresh } from '@/hooks/useRefresh';
import { CHAINS } from '@/web3';

export const useLatestCreatedQuestChainsDataForAllChains = (): {
  questChains: QuestChainDisplayFragment[];
  refresh: () => void;
  fetching: boolean;
  error: unknown;
} => {
  const [error, setError] = useState<unknown>();
  const [fetching, setFetching] = useState<boolean>(false);
  const [results, setResults] = useState<QuestChainDisplayFragment[]>([]);

  const { address } = useAccount();
  const [refreshCount, refresh] = useRefresh();

  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (!address) return;
      try {
        setFetching(true);
        const allResults = await Promise.all(
          CHAINS.map(async ({ id: chainId }) =>
            getCreatedQuestChains(chainId, address),
          ),
        );
        if (!isMounted) return;

        setResults(
          allResults
            .reduce((t, a) => {
              t.push(...a);
              return t;
            }, [])
            .sort((a, b) => Number(b.updatedAt) - Number(a.updatedAt)),
        );
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
  }, [address, refreshCount]);

  return {
    questChains: results,
    fetching,
    refresh,
    error,
  };
};
