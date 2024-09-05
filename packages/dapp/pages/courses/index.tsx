// import { Featured } from '@/components/Explore/Featured';
import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

import QuestChains from '@/components/Explore/QuestChains';
import { Page } from '@/components/Layout/Page';
import { HeadComponent } from '@/components/Seo';
import { HOME_URL } from '@/utils/constants';

const Explore: React.FC = () => {
  // const {
  //   isOpen: isSearchOpen,
  //   onOpen: onSearchOpen,
  //   onClose: onSearchClose,
  // } = useDisclosure();
  return (
    <Page alignItems="flex-start" gap={12} flex={1}>
      <HeadComponent title="Explore courses" url={`${HOME_URL}/explore`} />
      {/* 
      <Button
        onClick={onSearchOpen}
        minW="7.5rem"
        justifyContent="flex-start"
        px={8}
        ml={16}
      >
        <SearchIcon color="black" mr={3} />
        <Text>Search by name or description</Text>
      </Button>
      <Featured /> */}
      <VStack
        w="100%"
        align="stretch"
        bg="blue.500"
        p={12}
        pt={8}
        borderRadius="16"
        spacing={8}
      >
        <Text fontFamily="heading" fontSize="xl">
          Level up in your career or learn a new skill today!
        </Text>
        <QuestChains />
      </VStack>
      <VStack
        w="100%"
        align="stretch"
        bg="midnightBlue.200"
        p={12}
        pt={8}
        borderRadius="16"
        spacing={8}
      >
        <Text fontFamily="heading" fontSize="xl">
          Create and design your own course with our course creator tool.
        </Text>
        <HStack justify="end" w="100%">
          <NextLink href="/courses/create">
            <Button bg="limeGreen.300">Create a Course</Button>
          </NextLink>
        </HStack>
      </VStack>
      {/*
      <Modal
        isOpen={isSearchOpen}
        onClose={onSearchClose}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent maxW="44rem">
          <ModalBody py={2} m={4} p={0}>
            <SearchQuestChains onClose={onSearchClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
      */}
    </Page>
  );
};

export default Explore;
