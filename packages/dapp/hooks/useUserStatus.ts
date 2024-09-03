import { useMemo } from 'react';

import { QuestStatusInfoFragment, Status } from '@/graphql';

export type UserStatusType = {
  [questId: string]: {
    submissions: {
      description: string | undefined | null;
      externalUrl: string | undefined | null;
      timestamp: string;
    }[];
    reviews: {
      description: string | undefined | null;
      externalUrl: string | undefined | null;
      timestamp: string;
      reviewer: string;
      accepted: boolean;
    }[];
    status: Status;
  };
};

export const useUserStatus = (
  questStatuses: QuestStatusInfoFragment[],
  address: string,
): UserStatusType => {
  const userStatus: UserStatusType = useMemo(() => {
    const userStat: UserStatusType = {};
    questStatuses
      .filter(item => item.user.id === address.toLowerCase())
      .forEach(item => {
        userStat[item.quest.questId] = {
          status: item.status,
          submissions: item.submissions.map(sub => ({
            description: undefined,
            externalUrl: undefined,
            timestamp: sub.timestamp,
          })),
          reviews: item.reviews.map(sub => ({
            description: undefined,
            externalUrl: undefined,
            timestamp: sub.timestamp,
            accepted: sub.accepted,
            reviewer: sub.reviewer.id,
          })),
        };
      });
    return userStat;
  }, [questStatuses, address]);

  return userStatus;
};
