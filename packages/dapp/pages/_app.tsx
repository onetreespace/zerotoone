// Do NOT change order of CSS files
import '@/assets/styles/bg.scss';
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
import Script from 'next/script';
import React, { PropsWithChildren, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { hotjar } from 'react-hotjar';
import { WagmiProvider } from 'wagmi';

import { AppLayout } from '@/components/Layout/AppLayout';
import { PLAUSIBLE_DATA_DOMAIN } from '@/utils/constants';
import { globalStyles, theme } from '@/utils/theme';
import { WalletProvider } from '@/web3';
import { config } from '@/web3/config';

// const ForceDarkMode: React.FC<PropsWithChildren> = ({ children }) => {
//   const { colorMode, toggleColorMode } = useColorMode();

//   useEffect(() => {
//     hotjar.initialize(3408137, 6);

//   }, []);

//   useEffect(() => {
//     if (colorMode === 'dark') return;
//     toggleColorMode();
//   }, [colorMode, toggleColorMode]);

//   return <>{children}</>;
// };

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const queryClient: QueryClient = new QueryClient();

  return (
    <ChakraProvider resetCSS theme={theme}>
      {/* <ForceDarkMode> */}
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Script
        type="text/javascript"
        defer
        data-domain={PLAUSIBLE_DATA_DOMAIN}
        data-api="/jjmahtdkrp/api/event"
        src="/jjmahtdkrp/js/script.js"
      />
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
      {/* </ForceDarkMode> */}
    </ChakraProvider>
  );
};

export default App;
