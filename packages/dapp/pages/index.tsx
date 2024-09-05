import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import { Page } from '@/components/Layout/Page';
import { HeadComponent } from '@/components/Seo';

const Explore: React.FC = () => {
  return (
    <Page alignItems="flex-start" gap={4} flex={1}>
      <HeadComponent />
      <VStack w="100%">
        <Heading>Level up with Zero to One!</Heading>
        <Link href="/courses">
          <Button>Courses</Button>
        </Link>
        <Text>OR</Text>
        <Heading>Earn by doing Gigs</Heading>
        <Link href="/gigs">
          <Button>Gigs</Button>
        </Link>
      </VStack>
    </Page>
  );
};

export default Explore;
