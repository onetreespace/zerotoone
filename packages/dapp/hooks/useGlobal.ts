import { useEffect, useState } from 'react';

import { getGlobalInfo, GlobalInfoFragment } from '@/graphql';

export const useGlobalInfo = () => {
  const [globalInfo, setGlobalInfo] = useState<
    Record<string, GlobalInfoFragment>
  >({});

  useEffect(() => {
    getGlobalInfo().then(setGlobalInfo);
  }, []);

  return globalInfo;
};
