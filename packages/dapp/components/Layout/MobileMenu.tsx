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
                href="/courses"
                display="block"
                onClick={toggleOpen}
              >
                Explore Courses
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="/gigs"
                display="block"
                onClick={toggleOpen}
              >
                Browse Gigs
              </ChakraLink>
              {isConnected && (
                <NextLink
                  as={`/profile/${address}`}
                  href="/profile/[name]"
                  passHref
                >
                  <ChakraLink display="block">My Profile</ChakraLink>
                </NextLink>
              )}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
