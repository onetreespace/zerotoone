import { CHAINS } from '@/web3';

import { getClient } from './client';
import {
  GlobalInfoDocument,
  GlobalInfoFragment,
  GlobalInfoQuery,
  GlobalInfoQueryVariables,
} from './generated';

export const getChainInfo = async (
  chainId: number,
): Promise<GlobalInfoFragment | null> => {
  const { data, error } = await getClient(chainId)
    .query<GlobalInfoQuery, GlobalInfoQueryVariables>(GlobalInfoDocument, {})
    .toPromise();
  if (!data || !data.globals.length) {
    if (error) {
      throw error;
    }
    return null;
  }

  return data.globals[0];
};

export const getGlobalInfo = async (): Promise<
  Record<string, GlobalInfoFragment>
> => {
  const globalInfo: Record<string, GlobalInfoFragment> = {};

  await Promise.all(
    CHAINS.map(async chain => {
      const info = await getChainInfo(chain.id);
      if (info !== null) {
        globalInfo[chain.id] = info;
      }
    }),
  );

  return globalInfo;
};
