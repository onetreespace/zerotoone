import { Heading } from '@chakra-ui/react';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { isAddress } from 'viem';

import { Page } from '@/components/Layout/Page';
import { LoadingState } from '@/components/LoadingState';
import { QuestChainPage } from '@/components/QuestChain/QuestChainPage';
import {
  getQuestChainFromSlug,
  getQuestChainInfo,
  getStatusesForChain,
  QuestStatusInfoFragment,
  Status,
} from '@/graphql';
import { useLatestQuestChainData } from '@/hooks/useLatestQuestChainData';
import { useLatestQuestStatusesForChainData } from '@/hooks/useLatestQuestStatusesForChainData';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

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

const QuestChainMainPage: React.FC<Props> = ({
  questChain: inputQuestChain,
  questStatuses: inputQuestStatuses,
}) => {
  const { isFallback } = useRouter();

  const {
    questChain,
    fetching: fetchingQuests,
    refresh: refreshQuests,
  } = useLatestQuestChainData(inputQuestChain);

  const {
    questStatuses,
    fetching: fetchingStatus,
    refresh: refreshStatus,
  } = useLatestQuestStatusesForChainData(
    questChain?.chainId,
    questChain?.address,
    inputQuestStatuses,
  );

  const fetching = fetchingStatus || fetchingQuests;

  const refresh = useCallback(() => {
    refreshStatus();
    refreshQuests();
  }, [refreshQuests, refreshStatus]);

  if (isFallback || fetching || (!questChain && !!inputQuestChain)) {
    return (
      <Page align="center">
        <LoadingState my={20} />
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

  return (
    <QuestChainPage {...{ questChain, questStatuses, fetching, refresh }} />
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
        console.error('Error fetching quest chain', error);
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
        console.error('Error fetching quest chain', error);
      }
    }
  }

  return {
    props: {
      questChain,
      questStatuses,
    },
    revalidate: 60,
  };
};

export default QuestChainMainPage;
