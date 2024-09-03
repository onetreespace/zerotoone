/* eslint-disable camelcase */
import { useEffect, useState } from 'react';

import {
  getQuestChainsFromFilters,
  OrderDirection,
  QuestChain_OrderBy,
  QuestChainDisplayFragment,
  QuestChainFiltersInfo,
} from '@/graphql';
import { CHAINS } from '@/web3';

const getSortKey = (
  orderBy: QuestChain_OrderBy = QuestChain_OrderBy.UpdatedAt,
): keyof QuestChainDisplayFragment => {
  switch (orderBy) {
    case QuestChain_OrderBy.NumCompletedQuesters:
      return 'numCompletedQuesters';
    case QuestChain_OrderBy.QuestCount:
      return 'numQuests';
    case QuestChain_OrderBy.UpdatedAt:
    default:
      return 'updatedAt';
  }
};

export const useFilteredQuestChains = (
  filters: QuestChainFiltersInfo,
  networksMap: Record<string, boolean> = {},
): {
  error: unknown;
  fetching: boolean;
  results: QuestChainDisplayFragment[];
} => {
  const [error, setError] = useState<unknown>();
  const [fetching, setFetching] = useState<boolean>(true);
  const [results, setResults] = useState<QuestChainDisplayFragment[]>([]);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setFetching(true);
        let chains: QuestChainDisplayFragment[] = [];
        const networksList = Object.entries(networksMap)
          .filter(([_, value]) => value)
          .map(([key]) => key);

        if (networksList.length > 0) {
          const allResults = await Promise.all(
            networksList.map(async n => getQuestChainsFromFilters(n, filters)),
          );
          chains = allResults.reduce((t, a) => {
            t.push(...a);
            return t;
          }, []);
        } else {
          const allResults = await Promise.all(
            CHAINS.map(async c =>
              getQuestChainsFromFilters(c.id.toString(), filters),
            ),
          );
          chains = allResults.reduce((t, a) => {
            t.push(...a);
            return t;
          }, []);
        }

        const sortKey = getSortKey(filters.orderBy);
        const sortValue =
          filters.orderDirection === OrderDirection.Asc ? 1 : -1;

        chains = chains.sort((a, b) =>
          a[sortKey] > b[sortKey] ? sortValue : -1 * sortValue,
        );

        if (!isMounted) return;

        setResults(chains);
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
  }, [filters, networksMap]);

  return {
    fetching,
    error,
    results,
  };
};
