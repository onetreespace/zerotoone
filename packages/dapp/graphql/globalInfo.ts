import { getClient, SUPPORTED_NETWORKS } from './client';
import {
  GlobalInfoDocument,
  GlobalInfoFragment,
  GlobalInfoQuery,
  GlobalInfoQueryVariables,
} from './generated';

export const getChainInfo = async (
  chainId: string,
): Promise<GlobalInfoFragment | null> => {
  const { data, error } = await getClient(chainId)
    .query<GlobalInfoQuery, GlobalInfoQueryVariables>(GlobalInfoDocument, {})
    .toPromise();
  if (!data || !data.globals.length || data.globals[0].network !== chainId) {
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
    SUPPORTED_NETWORKS.map(async chainId => {
      const info = await getChainInfo(chainId);
      if (info !== null) {
        globalInfo[chainId] = info;
      }
    }),
  );

  return globalInfo;
};
