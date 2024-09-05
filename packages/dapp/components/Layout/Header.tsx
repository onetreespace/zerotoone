import { Flex, HStack, Image, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Header: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <HStack
      w="100%"
      h={20}
      zIndex={1000}
      pos="fixed"
      background="limeGreen.300"
      justifyContent="center"
    >
      <Flex
        justify="space-between"
        w="100%"
        maxW={{ base: '100rem', '4xl': '125rem' }}
        px={{ base: 4, md: 4, lg: 12, xl: 32 }}
      >
        <ChakraLink as={NextLink} href="/" display="block" _hover={{}} w={16}>
          <Image src="/logo.svg" alt="Zero To One" height={9} />
        </ChakraLink>

        {children}
      </Flex>
    </HStack>
  );
};
