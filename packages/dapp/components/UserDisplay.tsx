import { Button, HStack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useMemo } from 'react';
import { Address } from 'viem';
import { useEnsName } from 'wagmi';
import { mainnet } from 'wagmi/chains';

import { useUserProfile } from '@/hooks/useUserProfile';
import { formatAddress } from '@/web3';

import { UserAvatar } from './UserAvatar';

export const UserDisplay: React.FC<{
  address?: string | undefined | null;
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xs';
  noLink?: boolean;
}> = ({ address, color = 'black', size = 'md', noLink }) => {
  const result = useEnsName({
    chainId: mainnet.id,
    address: address as Address,
  });
  const displayENS = result.data ?? '';

  const { profile } = useUserProfile(address ?? '');
  const displayProfile = profile;

  const displayName =
    displayProfile?.username ?? formatAddress(address, displayENS);

  const avatarSize = useMemo(() => {
    switch (size) {
      case 'lg':
        return 24;
      case 'md':
        return 20;
      case 'sm':
      case 'xs':
        return 16;
      default:
        return 20;
    }
  }, [size]);

  if (!address) return null;

  const name = profile?.username ?? address;

  const inner = (
    <Button
      variant="ghost"
      size={size}
      height={8}
      px={2}
      borderRadius="full"
      fontFamily="heading"
      fontSize={10}
      _hover={noLink ? {} : undefined}
    >
      <HStack position="relative" color={color}>
        <UserAvatar address={address} profile={profile} size={avatarSize} />
        <Text transition="opacity 0.25s" textAlign="left" fontWeight={700}>
          {displayName}
        </Text>
      </HStack>
    </Button>
  );
  return noLink ? (
    inner
  ) : (
    <NextLink as={`/profile/${name}`} href="/profile/[name]">
      {inner}
    </NextLink>
  );
};
