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
  11155111: {
    chainId: 11155111,
    prodSubgraphUrl:
      'https://api.studio.thegraph.com/query/71457/zerotoone-sepolia/version/latest',
    devSubgraphUrl:
      'https://api.studio.thegraph.com/query/71457/zerotoone-sepolia/version/latest',
  },
  31337: {
    chainId: 31337,
    prodSubgraphUrl: 'http://localhost:8000/subgraphs/name/zerotoone',
    devSubgraphUrl: 'http://localhost:8000/subgraphs/name/zerotoone',
  },
};

const cache = new Map<SupportedChainId, Client>();

export const getClient = (chainId: SupportedChainId): Client => {
  const info = SUPPORTED_NETWORK_INFO[chainId];
  if (!info) throw new Error(`Unsupported chainId: ${chainId}`);
  if (cache.has(chainId)) return cache.get(chainId)!;
  const newClient = createClient({
    url: GRAPH_API_KEY ? info.prodSubgraphUrl : info.devSubgraphUrl,
    exchanges: [dedupExchange, fetchExchange],
  });
  cache.set(chainId, newClient);
  return newClient;
};
