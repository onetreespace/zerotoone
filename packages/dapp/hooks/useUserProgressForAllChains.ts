import { graphql } from '@quest-chains/sdk';
import { useEffect, useState } from 'react';

import { CHAINS } from '@/web3';

export const useUserProgressForAllChains = (
  address: string,
): {
  error: unknown;
  fetching: boolean;
  results: graphql.UserStatus[];
} => {
  const [error, setError] = useState<unknown>();
  const [fetching, setFetching] = useState<boolean>(false);
  const [results, setResults] = useState<graphql.UserStatus[]>([]);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setFetching(true);
        const allResults = await Promise.all(
          CHAINS.map(async ({ id: chainId }) =>
            graphql.getStatusForUser(chainId.toString(), address ?? ''),
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
  }, [address]);

  return {
    fetching,
    error,
    results,
  };
};
