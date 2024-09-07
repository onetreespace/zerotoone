import { HStack, Text, useBreakpointValue } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import NextLink from 'next/link';
import { useAccount } from 'wagmi';

export const DesktopMenu: React.FC = () => {
  const isSmallerScreen = useBreakpointValue({ base: true, xl: false });
  const { isConnected, address } = useAccount();

  const name = address;

  return (
    <HStack gap={4} fontSize="sm" zIndex={2}>
      {isConnected && (
        <NextLink as={`/profile/${name}`} href="/profile/[name]" passHref>
          <Text
            px={1}
            fontFamily="heading"
            _hover={{
              textDecoration: 'underline',
            }}
          >
            {isSmallerScreen ? 'Profile' : 'My Profile'}
          </Text>
        </NextLink>
      )}
      <NextLink href="/courses">
        <Text
          // fontSize="20px"
          px={1}
          fontFamily="heading"
          _hover={{
            textDecoration: 'underline',
          }}
        >
          Courses
        </Text>
      </NextLink>
      <NextLink href="/gigs">
        <Text
          // fontSize="20px"
          px={2}
          fontFamily="heading"
          _hover={{
            textDecoration: 'underline',
          }}
        >
          Gigs
        </Text>
      </NextLink>
      <ConnectButton label="Sign Up" />
    </HStack>
  );
};
