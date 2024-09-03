/* eslint-disable no-await-in-loop */
import { Address, GetTransactionReceiptReturnType, parseEventLogs } from 'viem';

import { getSubgraphLatestBlock } from '@/graphql';
import { iQuestChainFactoryAbi, SupportedChainId } from '@/web3';

import { sleep } from './helpers';

const UPDATE_INTERVAL = 10000;

const MAX_RETRIES = 6;

export const waitUntilBlock = async (
  chainId: SupportedChainId,
  block: number | bigint,
): Promise<boolean> => {
  let latestBlock = await getSubgraphLatestBlock(chainId);
  let tries = 0;
  while (latestBlock < Number(block) && tries < MAX_RETRIES) {
    await sleep(UPDATE_INTERVAL);
    tries += 1;
    latestBlock = await getSubgraphLatestBlock(chainId);
  }
  return latestBlock >= Number(block);
};

export const parseQuestChainAddress = async (
  receipt: GetTransactionReceiptReturnType,
): Promise<Address | null> => {
  if (!receipt || !receipt.logs) return null;
  const logs = parseEventLogs({
    abi: iQuestChainFactoryAbi,
    logs: receipt.logs,
    eventName: 'QuestChainCreated',
  });
  return (logs[0]?.args.questChainAddress as Address) ?? null;
};
