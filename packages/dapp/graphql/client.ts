import { Client, createClient, dedupExchange, fetchExchange } from 'urql';

import { SupportedChainId } from '@/web3';

export type NetworkInfo = {
  [chainId: SupportedChainId]: {
    chainId: SupportedChainId;
    prodSubgraphUrl: string;
    devSubgraphUrl: string;
  };
};

const GRAPH_API_KEY =
  process.env.REACT_APP_GRAPH_API_KEY ||
  process.env.NEXT_PUBLIC_GRAPH_API_KEY ||
  process.env.GRAPH_API_KEY;

export const SUPPORTED_NETWORK_INFO: NetworkInfo = {
  // '0xa': {
  //   chainId: '0xa',
  //   prodSubgraphUrl: `https://gateway-arbitrum.network.thegraph.com/api/${GRAPH_API_KEY}/subgraphs/id/9GTxhTXaiJqgYGuSsMjH3KWdEQfFf8BzrTQKWNKZBMzB`,
  //   devSubgraphUrl:
  //     'https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest',
  // },
  // '0x64': {
  //   chainId: '0x64',
  //   prodSubgraphUrl: `https://gateway-arbitrum.network.thegraph.com/api/${GRAPH_API_KEY}/subgraphs/id/EdGKgTZKUfZnWmG3rPAirBis6xUJpAJ8dgvMts9Aiixb`,
  //   devSubgraphUrl:
  //     'https://api.studio.thegraph.com/query/71457/quest-chains-gnosis/version/latest',
  // },
  // '0x89': {
  //   chainId: '0x89',
  //   prodSubgraphUrl: `https://gateway-arbitrum.network.thegraph.com/api/${GRAPH_API_KEY}/subgraphs/id/29xgvK1yyJkcq3zM1wqTvFh3riMzpTFjLqu3PYZ1ZSv5`,
  //   devSubgraphUrl:
  //     'https://api.studio.thegraph.com/query/71457/quest-chains-polygon/version/latest',
  // },
  // '0xa4b1': {
  //   chainId: '0xa4b1',
  //   prodSubgraphUrl: `https://gateway-arbitrum.network.thegraph.com/api/${GRAPH_API_KEY}/subgraphs/id/J3V2pB7DFYaMVNyU7GbrQNsiptNfuk9MZ3GNjLHYmcpD`,
  //   devSubgraphUrl:
  //     'https://api.studio.thegraph.com/query/71457/quest-chains-arbitrum/version/latest',
  // },
  // '0x4268': {
  //   chainId: '0x4268',
  //   prodSubgraphUrl: `https://gateway-testnet-arbitrum.network.thegraph.com/api/${GRAPH_API_KEY}/subgraphs/id/9ZDv6YDBRyxPBeLvbHz8oTmjci2FTySbx8v3fko4MEso`,
  //   devSubgraphUrl:
  //     'https://api.studio.thegraph.com/query/71457/quest-chains-holesky/version/latest',
  // },
  // '0xaa36a7': {
  //   chainId: '0xaa36a7',
  //   prodSubgraphUrl: `https://gateway-testnet-arbitrum.network.thegraph.com/api/${GRAPH_API_KEY}/subgraphs/id/5fRc469U46WVkH9WWYQ2wUuS3cdrX14WNmHGyaqg87Fe`,
  //   devSubgraphUrl:
  //     'https://api.studio.thegraph.com/query/71457/quest-chains-sepolia/version/latest',
  // },
  31337: {
    chainId: 31337,
    prodSubgraphUrl: 'http://localhost:8000/subgraphs/name/zerotoone',
    devSubgraphUrl: 'http://localhost:8000/subgraphs/name/zerotoone',
  },
};

export const getClient = (chainId: SupportedChainId): Client => {
  const info = SUPPORTED_NETWORK_INFO[chainId];
  return createClient({
    url: GRAPH_API_KEY ? info.prodSubgraphUrl : info.devSubgraphUrl,
    exchanges: [dedupExchange, fetchExchange],
  });
};
