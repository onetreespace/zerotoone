import { defineConfig } from '@wagmi/cli';
import { foundry, react } from '@wagmi/cli/plugins';

export default defineConfig({
  out: 'web3/generated.ts',
  plugins: [
    foundry({
      project: '../contracts',
    }),
    react(),
  ],
});
