import { CopyIcon } from '@chakra-ui/icons';
import {
  Button,
  Divider,
  Grid,
  Heading,
  HStack,
  IconButton,
  Link,
  Text,
  Tooltip,
  useClipboard,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { getAddress, isAddress } from 'viem';
import { normalize } from 'viem/ens';
import { useAccount, useChainId } from 'wagmi';

import { Page } from '@/components/Layout/Page';
import { LoadingState } from '@/components/LoadingState';
import { EditProfileModal } from '@/components/ProfileView/EditProfileModal';
import { UserActionsNeeded } from '@/components/ProfileView/UserActionsNeeded';
import { UserBadges } from '@/components/ProfileView/UserBadges';
import { UserProgress } from '@/components/ProfileView/UserProgress';
import { UserRoles } from '@/components/ProfileView/UserRoles';
import { HeadComponent } from '@/components/Seo';
import { UserAvatar } from '@/components/UserAvatar';
import { useUserProfile } from '@/hooks/useUserProfile';
import { fetchProfileFromName } from '@/lib/profile';
import { HOME_URL } from '@/utils/constants';
import { formatAddress, getAddressUrl, getPublicClient } from '@/web3';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Profile: React.FC<Props> = ({
  name,
  displayName,
  profileAddress,
  profile: inputProfile,
}) => {
  const { fetching, profile } = useUserProfile(profileAddress);

  const { isFallback } = useRouter();

  const { address } = useAccount();
  const chainId = useChainId();

  const isLoggedInUser = profileAddress === address?.toLowerCase();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { onCopy, hasCopied } = useClipboard(
    isAddress(profileAddress) ? getAddress(profileAddress) : '',
  );

  if (isFallback || fetching || (!profile && !!inputProfile))
    return (
      <Page align="center">
        <LoadingState my={20} />
      </Page>
    );

  if (!profileAddress)
    return (
      <Page align="center">
        <Heading fontSize={36}>Profile not found!</Heading>
      </Page>
    );

  return (
    <Page>
      <HeadComponent title="Profile" url={`${HOME_URL}/profile/${name}`} />
      <VStack spacing={6} pb={8}>
        <Heading color="white" fontSize={50}>
          Profile
        </Heading>
        {isLoggedInUser && (
          <>
            <Button onClick={onOpen}>Edit Profile</Button>
            <EditProfileModal isOpen={isOpen} onClose={onClose} />
          </>
        )}

        <UserAvatar address={profileAddress} profile={profile} size={150} />

        <VStack spacing={2}>
          {displayName && (
            <>
              <HStack spacing={0}>
                <Text fontSize={20} fontWeight="bold">
                  {displayName}
                </Text>
              </HStack>
              <Divider w="2rem" />
            </>
          )}
          <HStack spacing={3}>
            <Link isExternal href={getAddressUrl(profileAddress, chainId)}>
              {formatAddress(profileAddress, '')}
            </Link>
            <Tooltip
              label={hasCopied ? 'Copied!' : 'Click to copy address'}
              closeOnClick={false}
            >
              <IconButton
                bg="none"
                onClick={onCopy}
                size="sm"
                icon={<CopyIcon fontSize="1rem" />}
                aria-label="Copy address"
              />
            </Tooltip>
          </HStack>
        </VStack>
      </VStack>

      <Grid templateColumns="repeat(1, 1fr)" gap={20}>
        <UserBadges address={profileAddress} />
        {isLoggedInUser && <UserActionsNeeded />}
        <UserProgress address={profileAddress} />
        <UserRoles address={profileAddress} />
      </Grid>
    </Page>
  );
};

type QueryParams = { name: string };

export async function getStaticPaths() {
  // const names = await fetchProfileNames();
  const names: string[] = [];
  const paths: { params: QueryParams }[] = names.map(name => ({
    params: {
      name,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async (
  context: GetStaticPropsContext<QueryParams>,
) => {
  const name = context.params?.name ?? '';

  const publicClient = getPublicClient(1);

  const profileAddress =
    (isAddress(name)
      ? name
      : await publicClient.getEnsAddress({
          name: normalize(name),
        })) ?? '';
  const profileENS = !isAddress(name)
    ? name
    : await publicClient.getEnsName({
        address: getAddress(name),
      });

  const isENS = name.endsWith('.eth');

  const { user: profile } = await fetchProfileFromName(
    isAddress(profileAddress) ? profileAddress : name,
  );

  const displayName = profile?.username ?? (isENS ? name : (profileENS ?? ''));

  const props = {
    name,
    profileAddress,
    profileENS,
    displayName,
    profile: profile ? { ...profile, _id: profile._id.toString() } : null,
  };

  return {
    props,
    revalidate: 60,
  };
};

export default Profile;
