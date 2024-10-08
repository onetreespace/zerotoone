import { Flex, Stack, useBreakpointValue } from '@chakra-ui/react';
import { useRef, useState } from 'react';

import { Footer } from '@/components/Layout/Footer';
import { Header } from '@/components/Layout/Header';

import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export const AppLayout: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(o => !o);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Stack
      align="center"
      fontFamily="body"
      minH="100vh"
      w="100%"
      justify="space-between"
      ref={ref}
    >
      <Header>
        <MobileMenu
          isOpen={isOpen}
          toggleOpen={toggleOpen}
          modalContainerRef={ref}
        />
        <DesktopMenu />
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
