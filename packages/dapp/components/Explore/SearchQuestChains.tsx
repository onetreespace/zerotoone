/* eslint-disable camelcase */
import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
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
    <Flex alignItems="flex-start" gap={4} w="full" direction="column">
      <InputGroup border="1px solid" boxShadow="5px 5px 0px 0px #000000">
        <InputRightElement pointerEvents="none">
          {fetching ? <Spinner size="sm" /> : <SearchIcon />}
        </InputRightElement>
        <Input
          backdropFilter="blur(40px)"
          border="none"
          placeholder="Search by name or description"
          onChange={e => delayedSetValue(e.target.value)}
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
