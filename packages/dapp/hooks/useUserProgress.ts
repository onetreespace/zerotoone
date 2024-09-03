import { useMemo } from 'react';

import { QuestChainInfoFragment, Status } from '@/graphql';

import { UserStatusType } from './useUserStatus';

type UserProgresstype = {
  progress: {
    total: number;
    inReviewCount: number;
    completeCount: number;
  };
  canMint: boolean;
};

export const useUserProgress = (
  address: string | undefined | null,
  questChain: QuestChainInfoFragment | null,
  userStatus: UserStatusType,
): UserProgresstype => {
  const progress = useMemo(() => {
    if (!questChain?.quests)
      return {
        total: 0,
        inReviewCount: 0,
        completeCount: 0,
      };
    const inReviewCount = questChain.quests.filter(
      quest =>
        !quest.paused && userStatus[quest.questId]?.status === Status.Review,
    ).length;
    const completeCount = questChain.quests.filter(
      quest =>
        !quest.paused && userStatus[quest.questId]?.status === Status.Pass,
    ).length;

    return {
      inReviewCount: inReviewCount || 0,
      completeCount: completeCount || 0,
      total: questChain.quests.filter(q => !q.paused).length || 0,
    };
  }, [questChain, userStatus]);

  const canMint = useMemo(() => {
    if (!address) return false;
    if (!questChain?.token) return false;
    if (questChain.token.owners.find(o => o.id === address.toLowerCase()))
      return false;

    let atLeastOnePassed = false;

    for (let i = 0; i < questChain.quests.length; i += 1) {
      const quest = questChain.quests[i];
      const status = userStatus[quest.questId]?.status;

      if (!(quest.optional || quest.paused || status === Status.Pass))
        return false;

      if (!atLeastOnePassed && status === Status.Pass) atLeastOnePassed = true;
    }

    return atLeastOnePassed;
  }, [questChain, address, userStatus]);

  return { progress, canMint };
};
