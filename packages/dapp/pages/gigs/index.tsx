import { Heading, VStack } from '@chakra-ui/react';

import { Page } from '@/components/Layout/Page';

const Explore: React.FC = () => {
  return (
    <Page alignItems="flex-start" gap={4} flex={1}>
      <VStack>
        <Heading>Earn by doing Gigs</Heading>
      </VStack>
    </Page>
  );
};

export default Explore;
