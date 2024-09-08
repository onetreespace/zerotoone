import {
  Button,
  Link as ChakraLink,
  Modal,
  ModalBody,
  ModalContent,
  Portal,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useAccount } from 'wagmi';

import { NavToggle } from './NavToggle';

export const MobileMenu: React.FC<{
  isOpen: boolean;
  toggleOpen: () => void;
  modalContainerRef: React.RefObject<HTMLDivElement | null>;
}> = ({ isOpen, toggleOpen, modalContainerRef }) => {
  const { asPath } = useRouter();
  const { isConnected, address } = useAccount();

  const isProfilePath = useMemo(() => {
    if (!asPath.startsWith('/profile/')) return false;
    const param = asPath.slice('/profile/'.length);
    return param.toLowerCase() === address?.toLowerCase();
  }, [asPath, address]);
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  if (!isSmallScreen) {
    return null;
  }

  return (
    <>
      <Portal>
        <NavToggle isOpen={isOpen} onClick={toggleOpen} />
      </Portal>
      <Modal
        isOpen={isOpen}
        onClose={toggleOpen}
        portalProps={{
          appendToParentPortal: false,
          containerRef: modalContainerRef,
        }}
      >
        <ModalContent
          minW="100%"
          h="100%"
          minH="100%"
          m={0}
          p={0}
          borderRadius={0}
        >
          <ModalBody h="100%">
            <VStack spacing={6} h="100%" w="100%" justify="center">
              <ConnectButton label="Sign Up" />
              <ChakraLink
                as={NextLink}
                href="/create"
                display="block"
                _hover={{}}
                onClick={toggleOpen}
              >
                <Button transition="0.25s" px={5} py={2}>
                  Create a chain
                </Button>
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="/explore"
                display="block"
                _hover={{}}
                onClick={toggleOpen}
              >
                <Text
                  color="main"
                  boxShadow={
                    asPath === '/explore' ? '0 4px 2px -2px #1f7165' : 'none'
                  }
                  _hover={{
                    boxShadow: '0 4px 2px -2px #1f7165',
                  }}
                  transition="0.25s"
                >
                  Explore
                </Text>
              </ChakraLink>
              {isConnected && (
                <NextLink
                  as={`/profile/${address}`}
                  href="/profile/[name]"
                  passHref
                >
                  <ChakraLink
                    display="block"
                    boxShadow={
                      isProfilePath ? '0 4px 2px -2px #1f7165' : 'none'
                    }
                    _hover={{
                      boxShadow: '0 4px 2px -2px #1f7165',
                    }}
                    transition="0.25s"
                    color="main"
                  >
                    My Profile
                  </ChakraLink>
                </NextLink>
              )}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
