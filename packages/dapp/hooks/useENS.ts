import { isAddress } from 'viem';
import { useCallback, useEffect, useState } from 'react';

import { ZERO_ADDRESS } from '@/utils/constants';
import { getEthersProvider } from '@/web3/providers';

export const fetchENSFromAddress = async (
  address: string | null | undefined,
): Promise<string | null> => {
  if (!address || !isAddress(address)) return null;
  const ethProvider = getEthersProvider('0x1');
  if (!ethProvider) return null;

  const ens = await ethProvider.lookupAddress(address);
  return ens;
};

export const useENS = (
  address: string | null | undefined,
): {
  ens: string | null | undefined;
  fetching: boolean;
} => {
  const [ens, setENS] = useState<string | null>(null);
  const [fetching, setFetching] = useState(false);

  const populateENS = useCallback(async () => {
    try {
      setFetching(true);
      const name = await fetchENSFromAddress(address);
      setENS(name);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error populating ENS', error);
    } finally {
      setFetching(false);
    }
  }, [address]);

  useEffect(() => {
    populateENS();
  }, [populateENS]);

  return {
    ens,
    fetching,
  };
};

export const fetchAddressFromENS = async (
  name: string | null | undefined,
): Promise<string | null> => {
  if (!name) return null;
  const ethProvider = getEthersProvider('0x1');
  if (!ethProvider) return null;

  const addr = await ethProvider.resolveName(name);
  return ZERO_ADDRESS === addr ? null : addr;
};

export const useAddressFromENS = (
  ens: string,
): {
  address: string | null;
  fetching: boolean;
} => {
  const [address, setAddress] = useState<string | null>(null);
  const [fetching, setFetching] = useState(false);

  const populateAddress = useCallback(async () => {
    try {
      setFetching(true);
      const addr = await fetchAddressFromENS(ens);
      setAddress(addr);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error populating ENS', error);
    } finally {
      setFetching(false);
    }
  }, [ens]);

  useEffect(() => {
    populateAddress();
  }, [populateAddress]);

  return {
    address,
    fetching,
  };
};

export const fetchAvatarFromAddressOrENS = async (
  name: string | null | undefined,
): Promise<string | null> => {
  if (!name) return null;
  const ethProvider = getEthersProvider('0x1');
  if (!ethProvider) return null;

  let ens: string | null = null;
  if (isAddress(name)) {
    ens = await ethProvider.lookupAddress(name);
  } else {
    ens = name;
  }

  const resolver = ens ? await ethProvider.getResolver(ens) : null;
  const avatar = resolver ? await resolver.getAvatar() : null;
  return avatar?.url ?? null;
};

export const useENSAvatar = (
  name: string | null | undefined,
): {
  avatar: string | null | undefined;
  fetching: boolean;
} => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [fetching, setFetching] = useState(false);

  const populateAvatar = useCallback(async () => {
    try {
      setFetching(true);
      const avatarUri = await fetchAvatarFromAddressOrENS(name);
      setAvatar(avatarUri);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error populating Avatar', error);
    } finally {
      setFetching(false);
    }
  }, [name]);

  useEffect(() => {
    populateAvatar();
  }, [populateAvatar]);

  return {
    avatar,
    fetching,
  };
};
