// Do NOT change order of CSS files
import '@/assets/styles/fonts.css';
import 'react-markdown-editor-lite/lib/index.css';
import '@/assets/styles/custom-markdown-editor.scss';
import '@/assets/styles/react-medium-image-zoom.css';
import '@rainbow-me/rainbowkit/styles.css';

import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { WagmiProvider } from 'wagmi';

import { AppLayout } from '@/components/Layout/AppLayout';
import { globalStyles, theme } from '@/utils/theme';
import { config } from '@/web3/config';

const ForceLightMode = (): JSX.Element | null => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === 'dark') return;
    toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return null;
};

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const queryClient: QueryClient = new QueryClient();

  return (
    <ChakraProvider resetCSS theme={theme}>
      <ForceLightMode />
      <div className="background">
        <span />
        <span />
        <span />
      </div>
      <Global styles={globalStyles} />
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            borderRadius: '1rem',
            maxWidth: '40rem',
            marginBottom: '2rem',
          },
        }}
      />
    </ChakraProvider>
  );
};

export default App;
