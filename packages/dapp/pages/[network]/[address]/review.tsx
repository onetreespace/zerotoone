import { ArrowBackIcon } from '@chakra-ui/icons';
import { Flex, Heading, Link as ChakraLink, Text } from '@chakra-ui/react';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { isAddress } from 'viem';
import { useAccount } from 'wagmi';

import { Page } from '@/components/Layout/Page';
import { LoadingState } from '@/components/LoadingState';
import { QuestChainReviewPage } from '@/components/Review/QuestChainReviewPage';
import { HeadComponent } from '@/components/Seo';
import {
  getQuestChainFromSlug,
  getQuestChainInfo,
  getStatusesForChain,
  QuestChainInfoFragment,
  QuestStatusInfoFragment,
} from '@/graphql';
import { useLatestQuestChainData } from '@/hooks/useLatestQuestChainData';
import { useLatestQuestStatusesForChainData } from '@/hooks/useLatestQuestStatusesForChainData';
import { getQuestChainURL } from '@/utils/uriHelpers';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Review: React.FC<Props> = ({
  questStatuses: inputQuestStatues,
  questChain: inputQuestChain,
}) => {
  const {
    questChain,
    fetching: fetchingQuests,
    refresh: refreshQuests,
  } = useLatestQuestChainData(inputQuestChain);

  const {
    questStatuses,
    fetching: fetchingStatuses,
    refresh: refreshStatuses,
  } = useLatestQuestStatusesForChainData(
    questChain?.chainId,
    questChain?.address,
    inputQuestStatues,
  );

  const refresh = useCallback(() => {
    refreshStatuses();
    refreshQuests();
  }, [refreshStatuses, refreshQuests]);
  const fetching = fetchingStatuses || fetchingQuests;

  const { isFallback } = useRouter();
  const { address, isConnecting } = useAccount();

  const isReviewer: boolean = useMemo(
    () =>
      questChain?.reviewers.some(
        ({ address: a }) => a === address?.toLowerCase(),
      ) ?? false,
    [questChain, address],
  );

  if (
    isFallback ||
    fetching ||
    isConnecting ||
    (!questChain && !!inputQuestChain)
  ) {
    return (
      <Page align="center">
        <LoadingState />
      </Page>
    );
  }

  if (!questChain) {
    return (
      <Page align="center">
        <Heading fontSize={36}>Quest chain not found!</Heading>
      </Page>
    );
  }

  if (!isReviewer) {
    return (
      <Page>
        <ReviewHead questChain={questChain} />
        <Text> Cannot review quest chain! </Text>
      </Page>
    );
  }

  return (
    <Page>
      <ReviewHead questChain={questChain} />
      <Text> Cannot review quest chain! </Text>
      <QuestChainReviewPage
        {...{ questChain, questStatuses, fetching, refresh }}
      />
    </Page>
  );
};

type QueryParams = { address: string; network: string };

export async function getStaticPaths() {
  const paths: { params: QueryParams }[] = [];

  return { paths, fallback: true };
}

export const getStaticProps = async (
  context: GetStaticPropsContext<QueryParams>,
) => {
  const network = Number(context.params?.network);
  const address = context.params?.address;

  let questStatuses: QuestStatusInfoFragment[] = [];
  let questChain = null;

  if (address && network) {
    if (isAddress(address)) {
      try {
        questStatuses = await getStatusesForChain(network, address);
        questChain = await getQuestChainInfo(network, address);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    } else {
      try {
        questChain = await getQuestChainFromSlug(network, address);
        if (questChain) {
          questStatuses = await getStatusesForChain(
            network,
            questChain.address,
          );
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
  }

  return {
    props: {
      questStatuses,
      questChain,
    },
    revalidate: 60,
  };
};

const ReviewHead = ({ questChain }: { questChain: QuestChainInfoFragment }) => {
  return (
    <>
      <HeadComponent
        title={`Review - ${questChain.address} - ${questChain.chainId}`}
        description="Review submissions for this quest chain"
        url={getQuestChainURL(questChain)}
      />
      <Flex w="full">
        <NextLink
          as={`/${questChain.chainId}/${questChain.address}`}
          href="/[chainId]/[address]"
          passHref
        >
          <ChakraLink display="block" _hover={{}} w="full">
            <Flex alignItems="center" _hover={{ textDecor: 'underline' }}>
              <ArrowBackIcon mr={2} />
              <Text fontSize={14}>Back to quest chain details</Text>
            </Flex>
          </ChakraLink>
        </NextLink>
      </Flex>
    </>
  );
};

export default Review;
