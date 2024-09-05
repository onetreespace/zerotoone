import { Flex, Stack, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

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
          <MobileMenu isOpen={isOpen} toggleOpen={toggleOpen} />
        ) : (
          <DesktopMenu />
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
    </Stack>
  );
};
