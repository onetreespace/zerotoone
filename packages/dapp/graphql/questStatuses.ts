import { getClient } from './client';
import {
  QuestsRejectedDocument,
  QuestsRejectedQuery,
  QuestsRejectedQueryVariables,
  QuestStatusInfoFragment,
  StatusForChainDocument,
  StatusForChainQuery,
  StatusForChainQueryVariables,
  StatusForUserAndChainDocument,
  StatusForUserAndChainQuery,
  StatusForUserAndChainQueryVariables,
} from './generated';

export const getStatusesForChain = async (
  chainId: number,
  chain: string,
): Promise<QuestStatusInfoFragment[]> => {
  const { data, error } = await getClient(chainId)
    .query<StatusForChainQuery, StatusForChainQueryVariables>(
      StatusForChainDocument,
      {
        address: chain.toLowerCase(),
        limit: 1000,
      },
    )
    .toPromise();
  if (!data) {
    if (error) {
      throw error;
    }
    return [];
  }
  return data.questStatuses;
};

export const getStatusesForUserAndChain = async (
  chainId: number,
  chain: string,
  user: string,
): Promise<QuestStatusInfoFragment[]> => {
  const { data, error } = await getClient(chainId)
    .query<StatusForUserAndChainQuery, StatusForUserAndChainQueryVariables>(
      StatusForUserAndChainDocument,
      {
        address: chain.toLowerCase(),
        user: user.toLowerCase(),
        limit: 1000,
      },
    )
    .toPromise();
  if (!data) {
    if (error) {
      throw error;
    }
    return [];
  }
  return data.questStatuses;
};

export const getQuestsRejectedForUserAndChain = async (
  chainId: number,
  address: string,
): Promise<QuestStatusInfoFragment[]> => {
  const { data, error } = await getClient(chainId)
    .query<QuestsRejectedQuery, QuestsRejectedQueryVariables>(
      QuestsRejectedDocument,
      {
        address: address.toLowerCase(),
      },
    )
    .toPromise();
  if (!data) {
    if (error) {
      throw error;
    }
    return [];
  }

  return data.user?.questsFailed || [];
};
