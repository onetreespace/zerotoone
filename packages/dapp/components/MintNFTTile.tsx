import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';

import VictoryCupImage from '@/assets/victory-cup.svg';
import { QuestChainInfoFragment } from '@/graphql';
import { waitUntilBlock } from '@/utils/graphHelpers';
import { handleError, handleTxLoading } from '@/utils/helpers';
import { ipfsUriToHttp } from '@/utils/uriHelpers';

type QuestChainTileProps = {
  questChain: QuestChainInfoFragment;
  onSuccess?: () => void;
};

export const MintNFTTile: React.FC<QuestChainTileProps> = ({
  questChain,
  onSuccess,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isMinting, setMinting] = useState(false);

  /*
  const onMint = useCallback(async () => {
    if (!chainId || questChain.chainId !== chainId || !address || !provider)
      return;
    setMinting(true);
    let tid = toast.loading(
      'Waiting for Confirmation - Confirm the transaction in your Wallet',
    );
    try {
      const contract = getQuestChainContract(
        questChain.address,
        questChain.version,
        provider.getSigner(),
      );

      const tx = await (Number(questChain.version) > 0
        ? (contract as contracts.V1.QuestChain).mintToken()
        : (contract as contracts.V0.QuestChain).mintToken(address));
      toast.dismiss(tid);
      tid = handleTxLoading(tx.hash, questChain.chainId);
      const receipt = await tx.wait(1);
      toast.dismiss(tid);
      tid = toast.loading(
        'Transaction confirmed. Waiting for The Graph to index the transaction data.',
      );
      await waitUntilBlock(questChain.chainId, receipt.blockNumber);
      toast.dismiss(tid);
      toast.success(`Successfully minted your NFT`);
      onOpen();
    } catch (error) {
      toast.dismiss(tid);
      handleError(error);
    } finally {
      setMinting(false);
    }
  }, [questChain, address, chainId, onOpen, provider]);

  */

  const QCmessage =
    'Woohoo! Just minted my soulbound NFT for completing a quest chain 🤩 Check it out!';

  return (
    <VStack
      w="100%"
      p={8}
      borderRadius={8}
      bg="rgba(255,255,255, 0.1)"
      color="white"
      textAlign="center"
      spacing={4}
    >
      <Image src={VictoryCupImage.src} alt="Success" />
      <Text>
        You have successfully completed all required quests from this quest
        chain.
      </Text>
      <Button
        w="100%"
        isLoading={isMinting}
        // onClick={onMint}
        borderRadius="full"
        _hover={{
          bg: 'main.100',
        }}
        bg="main"
        color="black"
      >
        MINT YOUR NFT
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onSuccess?.();
          onClose();
        }}
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay bg="rgba(3, 12, 10, 0.8)" backdropFilter="blur(8px)" />
        <ModalContent
          maxW="34rem"
          bg="linear-gradient(180deg, #0E251F 0%, rgba(14, 37, 31, 0.4) 100%)"
        >
          <ModalCloseButton />
          <ModalBody textAlign="center" py={12}>
            <Flex justifyContent="center" flexDir="column" alignItems="center">
              <Image
                w="14rem"
                // src={ipfsUriToHttp(questChain.token.imageUrl)}
                alt="Quest chain NFT badge"
              />
            </Flex>

            <Text fontSize={20} mb={2} mt={4} fontWeight="semibold">
              Congrats on minting your NFT!
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
};
