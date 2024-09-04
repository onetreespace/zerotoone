/* eslint-disable camelcase */
import { CloseIcon } from '@chakra-ui/icons';
import { Button, Flex, Grid, HStack, Text, VStack } from '@chakra-ui/react';
import { graphql } from '@quest-chains/sdk';
import {
  OrderDirection,
  QuestChain_OrderBy,
} from '@quest-chains/sdk/dist/graphql';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Chain } from 'viem';

import { QuestChainTile } from '@/components/QuestChainTile';
import { useCategories } from '@/hooks/useCategories';
import { useFilteredQuestChains } from '@/hooks/useFilteredQuestChains';
import { CHAINS } from '@/web3';

import { LoadingState } from '../LoadingState';
import { FilterDropdown, FilterOption } from './FilterDropdown';

export enum SortBy {
  POPULARITY = 'POPULARITY',
  NEWEST = 'NEWEST',
  OLDEST = 'OLDEST',
  MOST_QUESTS = 'MOST_QUESTS',
  FEWEST_QUESTS = 'FEWEST_QUESTS',
}

const SortOptions: FilterOption[] = [
  { label: 'Popularity', value: SortBy.POPULARITY },
  { label: 'Newest first', value: SortBy.NEWEST },
  { label: 'Oldest first', value: SortBy.OLDEST },
  { label: 'Most quests first', value: SortBy.MOST_QUESTS },
  { label: 'Fewest quests first', value: SortBy.FEWEST_QUESTS },
];

const getSorter = (sortValue: string): graphql.QuestChainFiltersInfo => {
  switch (sortValue) {
    case SortBy.POPULARITY:
      return {
        orderBy: QuestChain_OrderBy.NumCompletedQuesters,
        orderDirection: OrderDirection.Desc,
      };
    case SortBy.NEWEST:
      return {
        orderBy: QuestChain_OrderBy.UpdatedAt,
        orderDirection: OrderDirection.Desc,
      };
    case SortBy.OLDEST:
      return {
        orderBy: QuestChain_OrderBy.UpdatedAt,
        orderDirection: OrderDirection.Desc,
      };
    case SortBy.MOST_QUESTS:
      return {
        orderBy: QuestChain_OrderBy.QuestCount,
        orderDirection: OrderDirection.Desc,
      };
    case SortBy.FEWEST_QUESTS:
      return {
        orderBy: QuestChain_OrderBy.QuestCount,
        orderDirection: OrderDirection.Desc,
      };
    default:
      return {};
  }
};

const networkOptions: FilterOption[] = CHAINS.map(n => ({
  value: n.id.toString(),
  label: n.name,
}));

const QuestChains: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [sortBy, setSortBy] = useState<Record<string, boolean>>({});

  const [categories, setCategories] = useState<Record<string, boolean>>({});

  const [networks, setNetworks] = useState<Record<string, boolean>>({});

  const { categories: categoryOptions } = useCategories();

  const resetFilters = useCallback(() => {
    setCategories(
      categoryOptions.reduce((t: Record<string, boolean>, v: FilterOption) => {
        // eslint-disable-next-line no-param-reassign
        t[v.value] = false;
        return t;
      }, {}),
    );

    setNetworks(
      CHAINS.reduce((t: Record<string, boolean>, v: Chain) => {
        // eslint-disable-next-line no-param-reassign
        t[v.id.toString()] = false;
        return t;
      }, {}),
    );

    setSortBy(
      SortOptions.reduce((t: Record<string, boolean>, v: FilterOption) => {
        // eslint-disable-next-line no-param-reassign
        t[v.value] = v.value === SortBy.NEWEST;
        return t;
      }, {}),
    );
  }, [categoryOptions]);

  useEffect(resetFilters, [resetFilters]);

  const filters: graphql.QuestChainFiltersInfo = useMemo(() => {
    const f: graphql.QuestChainFiltersInfo = {};

    const selectedCategories = Object.entries(categories)
      .filter(([_, value]) => value)
      .map(([key]) => key);

    f.categories =
      selectedCategories.length > 0 ? selectedCategories : undefined;

    const selectedSort = Object.entries(sortBy)
      .filter(([_, value]) => value)
      .map(([key]) => key);

    const sorter = getSorter(selectedSort[0] ?? '');

    f.orderBy = sorter.orderBy;
    f.orderDirection = sorter.orderDirection;

    f.onlyEnabled = true;

    return f;
  }, [categories, sortBy]);

  const { fetching, results, error } = useFilteredQuestChains(
    filters,
    networks,
  );
  const numFilters = useMemo(
    () =>
      [...Object.values(categories), ...Object.values(networks)].filter(v => v)
        .length,
    [categories, networks],
  );

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error while searching for quest chains:', error);
  }

  return (
    <Flex
      alignItems="flex-start"
      gap={4}
      w="full"
      direction="column"
      mt={0}
      flex={1}
    >
      <Flex
        w="full"
        justifyContent="space-between"
        direction={{
          base: 'column',
          md: 'row',
        }}
        gap={4}
      >
        <HStack>
          <FilterDropdown
            filter={categories}
            options={categoryOptions}
            setFilters={setCategories}
            label="Categories"
          />
          <FilterDropdown
            filter={networks}
            options={networkOptions}
            setFilters={setNetworks}
            label="Networks"
          />
        </HStack>
        <FilterDropdown
          filter={sortBy}
          options={SortOptions}
          setFilters={setSortBy}
          label="Sort by"
          isMultiple={false}
          placement="bottom-end"
        />
      </Flex>

      <HStack mb={4} wrap="wrap">
        {categoryOptions.map(opt =>
          categories[opt.value] ? (
            <FilterButton
              key={opt.value}
              label={opt.label}
              onClick={() =>
                setCategories({ ...categories, [opt.value]: false })
              }
            />
          ) : null,
        )}
        {networkOptions.map(opt =>
          networks[opt.value] ? (
            <FilterButton
              key={opt.value}
              label={opt.label}
              onClick={() => setNetworks({ ...networks, [opt.value]: false })}
            />
          ) : null,
        )}
        {numFilters > 1 && (
          <FilterButton
            onClick={resetFilters}
            label="Clear all"
            showIcon={false}
          />
        )}
      </HStack>

      {(fetching || error || results.length === 0) && (
        <VStack width="100%" justify="center" flex={1} className="test">
          <>
            {fetching && <LoadingState />}
            {!fetching && error && (
              <Text>Something went wrong. Please refresh and try again.</Text>
            )}

            {!fetching && !error && results.length === 0 && (
              <Text>
                No quest chains found for the given search criteria. Please
                remove some filters and try again.
              </Text>
            )}
          </>
        </VStack>
      )}
      {!fetching && !error && results.length > 0 && (
        <Grid
          gap={5}
          templateColumns={{
            base: 'repeat(1, 100%)',
            md: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(3, minmax(0, 1fr))',
            '2xl': 'repeat(4, minmax(0, 1fr))',
          }}
          w="100%"
        >
          {results.map(
            ({
              address,
              name,
              description,
              slug,
              chainId,
              numQuests,
              imageUrl,
              createdBy,
            }) => (
              <QuestChainTile
                {...{
                  address,
                  name,
                  description,
                  slug,
                  chainId,
                  createdBy: createdBy.id,
                  quests: numQuests,
                  imageUrl,
                  onClick: onClose,
                }}
                key={address}
              />
            ),
          )}
        </Grid>
      )}
    </Flex>
  );
};

const FilterButton: React.FC<{
  label: string;
  onClick: () => void;
  showIcon?: boolean;
  bgColor?: string;
}> = ({ label, onClick, bgColor = '#0F2E27', showIcon = true }) => (
  <Button
    bgColor={bgColor}
    borderRadius="full"
    borderColor="green.900"
    borderWidth={1}
    alignItems="center"
    onClick={onClick}
    px={{ base: 4, md: 6 }}
    size={{ base: 'sm', md: 'md' }}
    leftIcon={showIcon ? <CloseIcon boxSize={2} /> : undefined}
  >
    <Text fontSize={{ base: 'xs', md: 'sm' }}>{label} </Text>
  </Button>
);

export default QuestChains;
