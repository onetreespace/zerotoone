import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';

import { QuestChainDisplayFragment, QuestInfoFragment } from '@/graphql';
import { useDropFiles, useDropImage } from '@/hooks/useDropFiles';
import { useInputText } from '@/hooks/useInputText';

import { MarkdownEditor } from './MarkdownEditor';
import { UploadFilesForm } from './UploadFilesForm';
import { UploadImageForm } from './UploadImageForm';

export const UploadProof: React.FC<{
  refresh: () => void;
  quest: QuestInfoFragment;
  questChain: QuestChainDisplayFragment;
  profile?: boolean;
}> = ({ refresh, quest, questChain, profile }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isSubmitting, setSubmitting] = useState(false);

  const [proofDescRef, setProofDescription] = useInputText();

  const dropFilesProps = useDropFiles();

  const { files, onResetFiles } = dropFilesProps;

  const dropImageProps = useDropImage();

  const { imageFile, onResetImage } = dropImageProps;

  const onModalClose = useCallback(() => {
    setProofDescription('');
    onResetFiles();
    onResetImage();
    onClose();
  }, [onClose, onResetFiles, onResetImage, setProofDescription]);

  /*
  const onSubmit = useCallback(async () => {
    if (
      !chainId ||
      chainId !== questChain.chainId ||
      !provider ||
      !proofDescRef.current
    )
      return;

    setSubmitting(true);
    let tid = toast.loading('Uploading metadata to IPFS via web3.storage');
    try {
      const [filesUrl, imageUrl] = await Promise.all([
        files.length ? await uploadFiles(files) : undefined,
        imageFile ? await uploadFiles([imageFile]) : undefined,
      ]);
      const metadata: Metadata = {
        name: `Submission - QuestChain - ${questChain.name} - Quest - ${quest.questId}. ${quest.name} User - ${address}`,
        description: proofDescRef.current,
        image_url: imageUrl,
        external_url: filesUrl,
      };

      const metadataUrl = await uploadMetadata(metadata);
      const details = metadataUrl;
      toast.dismiss(tid);
      tid = toast.loading(
        'Waiting for Confirmation - Confirm the transaction in your Wallet',
      );

      const contract = getQuestChainContract(
        questChain.address,
        questChain.version,
        provider.getSigner(),
      );

      const tx = await (Number(questChain.version) > 0
        ? (contract as contracts.V1.QuestChain).submitProofs(
            [quest.questId],
            [details],
          )
        : (contract as contracts.V0.QuestChain).submitProof(
            quest.questId,
            details,
          ));
      toast.dismiss(tid);
      tid = handleTxLoading(tx.hash, chainId);
      const receipt = await tx.wait(1);
      toast.dismiss(tid);
      tid = toast.loading(
        'Transaction confirmed. Waiting for The Graph to index the transaction data.',
      );
      await waitUntilBlock(chainId, receipt.blockNumber);
      toast.dismiss(tid);
      toast.success('Successfully submitted proof');
      onModalClose();
      setProofDescription('');
      refresh();
    } catch (error) {
      toast.dismiss(tid);
      handleError(error);
    }

    setSubmitting(false);
  }, [
    chainId,
    questChain,
    proofDescRef,
    files,
    imageFile,
    quest,
    onModalClose,
    refresh,
    address,
    provider,
    setProofDescription,
  ]);
  */

  return (
    <Box>
      <Tooltip
        shouldWrapChildren
        label={`Please connect or switch to ${questChain.chainId}`}
        // isDisabled={chainId === questChain.chainId}
      >
        {!profile && (
          <Button
            onClick={onOpen}
            // isDisabled={chainId !== questChain.chainId || !address}
            borderWidth={1}
            borderColor="white"
            px={5}
            py={2}
            borderRadius="full"
          >
            Submit Proof
          </Button>
        )}
        {profile && (
          <Button
            w="full"
            onClick={onOpen}
            // isDisabled={chainId !== questChain.chainId || !address}
            variant="outline"
          >
            Re-submit Proof
          </Button>
        )}
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onModalClose} size="xl">
        <ModalOverlay />
        <ModalContent maxW="40rem">
          <ModalHeader>Upload Proof Of Completion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel color="main" htmlFor="proofDescRef.current">
                Description
              </FormLabel>
              <Flex w="100%" pb={4}>
                <MarkdownEditor
                  value={proofDescRef.current}
                  onChange={setProofDescription}
                />
              </Flex>
            </FormControl>
            <UploadImageForm
              {...dropImageProps}
              labelColor="main"
              imageProps={{ maxH: '12rem' }}
              formControlProps={{ mb: 4 }}
            />
            <UploadFilesForm {...dropFilesProps} />
            <Flex
              fontSize="xs"
              color="whiteAlpha.600"
              w="full"
              justifyContent="center"
              alignContent="center"
            >
              This submission will be{' '}
              {quest.skipReview ? 'automatically' : 'manually'} reviewed.
            </Flex>
          </ModalBody>

          <ModalFooter alignItems="baseline">
            <Button
              variant="ghost"
              mr={3}
              onClick={onModalClose}
              borderRadius="full"
            >
              Close
            </Button>
            <Button
              mt={4}
              // onClick={() => {
              //   if (!chainId || chainId !== questChain.chainId || !provider) {
              //     toast.error(
              //       `Wrong Chain, please switch to ${
              //         AVAILABLE_NETWORK_INFO[questChain.chainId].label
              //       }`,
              //     );
              //     return;
              //   }
              //   if (!proofDescRef.current) {
              //     toast.error('Proof description cannot be empty');
              //     return;
              //   }
              //
              //   onSubmit();
              // }}
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
