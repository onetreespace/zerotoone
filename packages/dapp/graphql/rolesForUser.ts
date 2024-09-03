import { getClient } from './client';
import {
  QuestChainDisplayFragment,
  RolesForUserDocument,
  RolesForUserQuery,
  RolesForUserQueryVariables,
} from './generated';

export type UserRoles = {
  ownerOf: QuestChainDisplayFragment[];
  adminOf: QuestChainDisplayFragment[];
  editorOf: QuestChainDisplayFragment[];
  reviewerOf: QuestChainDisplayFragment[];
  chainId: number;
};

export const getRolesForUser = async (
  chainId: number,
  address: string,
): Promise<UserRoles | null> => {
  const { data, error } = await getClient(chainId)
    .query<RolesForUserQuery, RolesForUserQueryVariables>(
      RolesForUserDocument,
      {
        address: address.toLowerCase(),
      },
    )
    .toPromise();
  if (!data?.user) {
    if (error) {
      throw error;
    }
    return null;
  }

  const { user } = data;

  return {
    chainId,
    ...user,
  };
};
