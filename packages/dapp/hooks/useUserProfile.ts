import useSWR from 'swr';

import { MongoUser } from '@/lib/mongodb/types';

export const fetchUserProfile = async (
  addressOrUsername: string,
): Promise<MongoUser | null> => {
  if (!addressOrUsername) return null;
  const res = await fetch(`/api/profile/${addressOrUsername}`);
  if (res.ok && res.status === 200) {
    return res.json();
  }
  return null;
};

export const useUserProfile = (
  addressOrUsername: string,
): {
  profile: MongoUser | null;
  refresh: () => void;
  fetching: boolean;
} => {
  const {
    data,
    isLoading: fetching,
    mutate: refresh,
  } = useSWR(addressOrUsername, fetchUserProfile);

  return {
    profile: data ?? null,
    refresh,
    fetching,
  };
};
