import { getClient } from './client';
import {
  GetMetaDocument,
  GetMetaQuery,
  GetMetaQueryVariables,
} from './generated';

export const getSubgraphLatestBlock = async (
  chainId: string,
): Promise<number> => {
  try {
    const { data, error } = await getClient(chainId)
      .query<GetMetaQuery, GetMetaQueryVariables>(GetMetaDocument, {})
      .toPromise();

    if (error) {
      console.error('Error querying subgraph meta', error);
      return 0;
    }

    return Number(data?._meta?.block?.number);
  } catch (e) {
    console.error(
      `Failed to get subgraph block number for chain ${chainId}`,
      e,
    );
    return 0;
  }
};
