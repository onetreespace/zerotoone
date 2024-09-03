import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';

import { QuestChainInfoFragment } from '@/graphql';
import { waitUntilBlock } from '@/utils/graphHelpers';
import { handleError, handleTxLoading } from '@/utils/helpers';

export const useToggleQuestChainPauseStatus = (
  questChain: QuestChainInfoFragment,
  refresh: () => void | Promise<void>,
): { isTogglingPauseStatus: boolean; togglePause: () => Promise<void> } => {
  const [isLoading, setLoading] = useState(false);

  const togglePause = useCallback(async () => {
    /*
    if (!chainId || chainId !== questChain.chainId || !provider) {
      toast.error(
        `Incorrect Network. Please switch your wallet to ${
          AVAILABLE_NETWORK_INFO[questChain.chainId].name
        }`,
      );
      return;
    }
    let tid;
    try {
      setLoading(true);
      tid = toast.loading(
        'Waiting for Confirmation - Confirm the transaction in your Wallet',
      );
      const contract = getQuestChainContract(
        questChain.address,
        questChain.version,
        provider.getSigner(),
      );

      const tx = await (questChain.paused
        ? contract.unpause()
        : contract.pause());
      toast.dismiss(tid);
      tid = handleTxLoading(tx.hash, chainId);
      const receipt = await tx.wait(1);
      toast.dismiss(tid);
      tid = toast.loading(
        'Transaction confirmed. Waiting for The Graph to index the transaction data.',
      );
      await waitUntilBlock(chainId, receipt.blockNumber);
      toast.dismiss(tid);
      toast.success(
        `Successfully ${
          questChain.paused ? 'enabled' : 'disabled'
        } the quest chain`,
      );
      refresh();
    } catch (error) {
      toast.dismiss(tid);
      handleError(error);
    } finally {
      setLoading(false);
    }
    */
  }, []);

  return { isTogglingPauseStatus: isLoading, togglePause };
};
