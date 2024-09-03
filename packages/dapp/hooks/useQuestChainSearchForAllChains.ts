import { useEffect, useState } from 'react';

import {
  getQuestChainsFromFilters,
  QuestChainDisplayFragment,
  QuestChainFiltersInfo,
} from '@/graphql';
import { CHAINS } from '@/web3';

export const useQuestChainSearchForAllChains = (
  search: QuestChainFiltersInfo,
): {
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
        const allResults = await Promise.all(
          CHAINS.map(async ({ id: chainId }) =>
            getQuestChainsFromFilters(chainId, search),
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
  }, [search]);

  return {
    fetching,
    error,
    results,
  };
};
