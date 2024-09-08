import { Button, Heading, Image, SimpleGrid, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import { Page } from '@/components/Layout/Page';
import { HeadComponent } from '@/components/Seo';

const Explore: React.FC = () => {
  return (
    <Page alignItems="flex-start" gap={4} flex={1}>
      <HeadComponent />
      <VStack w="100%" spacing={16}>
        <Image src="/banner.png" alt="banner" />
        <SimpleGrid columns={{ base: 1, md: 2 }} w="100%" spacing={16}>
          <VStack
            spacing={4}
            bg="purplePlop.400"
            p={20}
            justify="space-between"
          >
            <Heading>Level up with our Zero to One!</Heading>
            <Link href="/courses">
              <Button size="lg">Explore Courses</Button>
            </Link>
          </VStack>
          <VStack spacing={4} bg="blue.600" p={20} justify="space-between">
            <Heading>Earn by doing!</Heading>
            <Link href="/gigs">
              <Button size="lg">Browse Gigs</Button>
            </Link>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Page>
  );
};

export default Explore;
