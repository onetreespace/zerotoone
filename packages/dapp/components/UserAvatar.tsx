import { Box } from '@chakra-ui/react';
import { Address, zeroAddress } from 'viem';
import { useEnsName } from 'wagmi';

import { MongoUser } from '@/lib/mongodb/types';
import { ipfsUriToHttp } from '@/utils/uriHelpers';

import { Jazzicon } from './Jazzicon';

export const UserAvatar: React.FC<{
  address: string | null | undefined;
  profile: MongoUser | null | undefined;
  size: number;
}> = ({ address, profile, size }) => {
  const { data: ensAvatar } = useEnsName({ address: address as Address });

  const avatarUri = profile?.avatarUri ?? ensAvatar;

  if (avatarUri)
    return (
      <Box
        width={`${size}px`}
        height={`${size}px`}
        borderRadius="50%"
        bgColor="whiteAlpha.300"
        bgImage={`url(${ipfsUriToHttp(avatarUri)})`}
        bgPos="center"
        bgSize="cover"
      />
    );

  // fallback to jazzicon
  return <Jazzicon address={address ?? zeroAddress} size={size} />;
};
