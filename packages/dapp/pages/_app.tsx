// Do NOT change order of CSS files
import 'react-markdown-editor-lite/lib/index.css';
import '@/assets/styles/custom-markdown-editor.scss';
import '@/assets/styles/react-medium-image-zoom.css';
import '@/assets/styles/rainbowkit.css';

import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { WagmiProvider } from 'wagmi';

import { AppLayout } from '@/components/Layout/AppLayout';
import { globalStyles, rainbowkitTheme, theme } from '@/utils/theme';
import { config } from '@/web3/config';

const ForceLightMode = (): JSX.Element | null => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === 'light') return;
    toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return null;
};

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const queryClient: QueryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
          <ForceLightMode />
          <div className="background">
            <span />
            <span />
            <span />
          </div>
          <Global styles={globalStyles} />
          <RainbowKitProvider modalSize="compact" theme={rainbowkitTheme}>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </RainbowKitProvider>
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
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
