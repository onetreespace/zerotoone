/* eslint-disable camelcase */
import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';

import { QuestChainTile } from '@/components/QuestChainTile';
import {
  OrderDirection,
  QuestChain_OrderBy,
  QuestChainFiltersInfo,
} from '@/graphql';
import { useDelay } from '@/hooks/useDelay';
import { useQuestChainSearchForAllChains } from '@/hooks/useQuestChainSearchForAllChains';

import { LoadingState } from '../LoadingState';

const SearchQuestChains: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [value, setValue] = useState('');
  const delayedSetValue = useDelay(setValue);

  const filters: QuestChainFiltersInfo = useMemo(() => {
    const f: QuestChainFiltersInfo = {};
    f.search = value.toLowerCase();

    f.orderBy = QuestChain_OrderBy.UpdatedAt;
    f.orderDirection = OrderDirection.Desc;

    f.onlyEnabled = true;

    return f;
  }, [value]);

  const { fetching, results, error } = useQuestChainSearchForAllChains(filters);

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error while searching for quest chains:', error);
  }

  return (
    <Flex alignItems="flex-start" gap={4} w="full" direction="column" mt={0}>
      <InputGroup
        maxW="2xl"
        size="lg"
        position="fixed"
        zIndex={1}
        w="calc(100% - 30px)"
      >
        <Flex
          position="absolute"
          w="calc(100% - 20px)"
          h="calc(100% - 24px)"
          bg="gray.700"
        />

        <InputLeftElement pointerEvents="none">
          {fetching ? (
            <Spinner size="sm" color="white" />
          ) : (
            <SearchIcon color="white" />
          )}
        </InputLeftElement>
        <Input
          backdropFilter="blur(40px)"
          color="white"
          border="none"
          boxShadow="inset 0px 0px 0px 1px gray"
          placeholder="Search chains by name or description"
          onChange={e => delayedSetValue(e.target.value)}
          mb={6}
          width="calc(100% - 20px)"
        />
      </InputGroup>

      {fetching && (
        <Flex w="100%" justify="center" align="center" py={12}>
          <LoadingState mt={12} />
        </Flex>
      )}
      {!fetching && !error && results.length > 0 && (
        <VStack w="full" gap={4} flex={1} position="relative" top={20}>
          <Grid
            gap={5}
            templateColumns={{
              base: 'repeat(1, 100%)',
              md: 'repeat(2,  minmax(0, 1fr))',
            }}
            maxW="full"
            pr={3}
          >
            {results.map(result => (
              <QuestChainTile
                {...{
                  onClick: onClose,
                  ...result,
                }}
                key={result.address}
              />
            ))}
          </Grid>
        </VStack>
      )}
    </Flex>
  );
};

export default SearchQuestChains;
