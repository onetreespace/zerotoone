import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';

import SearchQuestChains from '@/components/Explore/SearchQuestChains';
import { Footer } from '@/components/Layout/Footer';
import { Header } from '@/components/Layout/Header';

import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export const AppLayout: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(o => !o);
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  const {
    isOpen: isSearchOpen,
    onOpen: onSearchOpen,
    onClose: onSearchClose,
  } = useDisclosure();

  const handleUserKeyPress = useCallback(
    (event: { key: string; metaKey: boolean }) => {
      const { key, metaKey } = event;
      if (metaKey && key === 'k') {
        if (isSearchOpen) onSearchClose();
        else onSearchOpen();
      }
    },
    [isSearchOpen, onSearchClose, onSearchOpen],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <Stack
      align="center"
      fontFamily="body"
      minH="100vh"
      w="100%"
      justify="space-between"
    >
      <Header>
        {isSmallScreen ? (
          <MobileMenu
            isOpen={isOpen}
            toggleOpen={toggleOpen}
            onSearchOpen={onSearchOpen}
          />
        ) : (
          <DesktopMenu onSearchOpen={onSearchOpen} />
        )}
      </Header>
      <Flex
        direction="column"
        w="100%"
        pt="6rem"
        pb={8}
        px={{ base: 4, md: 4, lg: 12, xl: 32 }}
        maxW={{ base: '100rem', '4xl': '125rem' }}
        flex={1}
      >
        {children}
      </Flex>

      <Footer />
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
    </Stack>
  );
};
