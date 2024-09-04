import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Address } from 'viem';
import { useAccount, useChainId, usePublicClient } from 'wagmi';

import { MetadataForm } from '@/components/CreateChain/MetadataForm';
import NFTForm from '@/components/CreateChain/NFTForm';
import { QuestsForm } from '@/components/CreateChain/QuestsForm';
import { Member, RolesForm } from '@/components/CreateChain/RolesForm';
import Step0 from '@/components/CreateChain/Step0';
import { Page } from '@/components/Layout/Page';
import { MarkdownViewer } from '@/components/MarkdownViewer';
import { MembersDisplay } from '@/components/MembersDisplay';
import { NetworkDisplay } from '@/components/NetworkDisplay';
import { HeadComponent } from '@/components/Seo';
import { SubmitButton } from '@/components/SubmitButton';
import { useGlobalInfo } from '@/hooks/useGlobal';
import { randomBytes } from '@/utils/byteHelpers';
import { QUESTCHAINS_URL } from '@/utils/constants';
import { parseQuestChainAddress, waitUntilBlock } from '@/utils/graphHelpers';
import { handleError, handleTxLoading } from '@/utils/helpers';
import { uploadMetadata } from '@/utils/metadata';
import { ipfsUriToHttp } from '@/utils/uriHelpers';
import { isSupportedChain, useWriteQuestChainFactoryCreate } from '@/web3';

const Create: React.FC = () => {
  const router = useRouter();

  const { address } = useAccount();
  const chainId = useChainId();

  const [chainName, setChainName] = useState('');
  const [chainDescription, setChainDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [chainUri, setChainUri] = useState('');
  const [nftUri, setNFTUri] = useState('');
  const [nftUrl, setNFTUrl] = useState('');
  const [step, setStep] = useState(0);
  const [ownerAddresses, setOwnerAddresses] = useState([address || '']);
  const [adminAddresses, setAdminAddresses] = useState(['']);
  const [editorAddresses, setEditorAddresses] = useState(['']);
  const [reviewerAddresses, setReviewerAddresses] = useState(['']);
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmitChainMeta = (
    name: string,
    description: string,
    metadataUri: string,
    _imageUrl?: string,
  ) => {
    setChainName(name);
    setChainDescription(description);
    setChainUri(metadataUri);
    setImageUrl(_imageUrl || '');
    setStep(2);
  };

  const onSubmitNFTMeta = (
    metadataUri: string,
    _nftUrl: string | undefined,
  ) => {
    setNFTUri(metadataUri);
    if (_nftUrl) setNFTUrl(_nftUrl);
    setStep(3);
  };

  const onSubmitRoles = (members: Member[]) => {
    setOwnerAddresses(
      members
        .filter(member => member.role === 'Owner')
        .map(member => member.address),
    );
    setAdminAddresses(
      members
        .filter(member => member.role === 'Admin')
        .map(member => member.address),
    );
    setEditorAddresses(
      members
        .filter(member => member.role === 'Editor')
        .map(member => member.address),
    );
    setReviewerAddresses(
      members
        .filter(member => member.role === 'Reviewer')
        .map(member => member.address),
    );
    setStep(4);
  };

  const globalInfo = useGlobalInfo();

  const { writeContractAsync } = useWriteQuestChainFactoryCreate();

  const publicClient = usePublicClient();

  const onPublishQuestChain = useCallback(
    async (
      quests: {
        name: string;
        description: string;
        optional: boolean;
        skipReview: boolean;
        paused: boolean;
      }[],
      startAsDisabled: boolean,
    ) => {
      setSubmitting(true);
      if (!address || !chainId || !isSupportedChain(chainId) || !publicClient)
        return;

      let tid;
      const questsDetails: {
        disabled: boolean;
        skipReview: boolean;
        optional: boolean;
        details: string;
      }[] = [];
      if (quests.length) {
        tid = toast.loading('Uploading Quests, please wait...');
        const allDetails = await Promise.all(
          quests.map(async ({ name, description, ...rest }) => {
            const details = await uploadMetadata({ name, description });
            return {
              ...rest,
              disabled: rest.paused,
              details,
            };
          }),
        );
        questsDetails.push(...allDetails);
        toast.dismiss(tid);
      }

      try {
        const { questChainFactory: factoryAddress } = globalInfo[chainId];

        const info = {
          details: chainUri,
          tokenURI: nftUri,
          owners: ownerAddresses.filter(a => a !== '') as Address[],
          admins: adminAddresses.filter(a => a !== '') as Address[],
          editors: editorAddresses.filter(a => a !== '') as Address[],
          reviewers: reviewerAddresses.filter(a => a !== '') as Address[],
          quests: questsDetails,
          paused: startAsDisabled,
        };

        tid = toast.loading(
          'Waiting for Confirmation - Confirm the transaction in your Wallet',
        );
        const txHash = await writeContractAsync({
          address: factoryAddress as Address,
          args: [info, randomBytes(32)],
        });
        toast.dismiss(tid);
        tid = handleTxLoading(txHash, chainId);
        const receipt = await publicClient.waitForTransactionReceipt({
          hash: txHash,
        });
        toast.dismiss(tid);

        const chainAddr = await parseQuestChainAddress(receipt);
        if (!chainAddr) {
          throw new Error('Failed to parse chain address');
        }

        tid = toast.loading(
          'Transaction confirmed. Waiting for The Graph to index the transaction data.',
        );
        await waitUntilBlock(chainId, receipt.blockNumber);
        toast.dismiss(tid);
        toast.success('Quest Chain created successfully!');
        router.push(`/${chainId}/${chainAddr}`);
      } catch (error) {
        toast.dismiss(tid);
        handleError(error);
      } finally {
        setSubmitting(false);
      }
    },
    [
      address,
      chainId,
      publicClient,
      chainUri,
      nftUri,
      ownerAddresses,
      adminAddresses,
      editorAddresses,
      reviewerAddresses,
      globalInfo,
    ],
  );

  // const QCURL = getQuestChainURL({
  //   chainId: chainId,
  //   address: chainAddress,
  // });
  // const QCmessage =
  //   'I just created a quest chain! Check it out and join the fun! #questchain #DAO #web3 #gamification';

  return (
    <Page>
      <Box
        bgImage={ipfsUriToHttp(imageUrl)}
        position="fixed"
        height="100vh"
        width="100vw"
        top="0"
        left="0"
        opacity="0.05"
        bgPos="center"
        bgSize="cover"
        zIndex={-1}
      />
      <HeadComponent
        title="Create a quest chain"
        description="You will be able create a 2D or a 3D soulbound NFT which Questers will be able to mint after completing the chain."
        url={`${QUESTCHAINS_URL}/create`}
      />

      {step === 0 && (
        <Flex w="full" flexDir="column" gap={8}>
          <Step0 />
          <Flex w="full" justifyContent="center">
            {address ? (
              <SubmitButton onClick={() => setStep(1)} px={32}>
                GET STARTED
              </SubmitButton>
            ) : (
              <SubmitButton
                onClick={async () => {
                  // await connectWallet();
                  setStep(1);
                }}
                px={32}
              >
                Connect wallet to Get Started
              </SubmitButton>
            )}
          </Flex>
        </Flex>
      )}
      {step !== 0 && (
        <Box fontFamily="heading" color="white" fontSize={32}>
          New quest chain
        </Box>
      )}

      <Flex
        w="full"
        display={step === 1 ? 'flex' : 'none'}
        flexDir="column"
        gap={8}
      >
        <MetadataForm onSubmit={onSubmitChainMeta} />
        <Step2 />
        <Step3 />
        <Step4 />
      </Flex>

      {step >= 2 && (
        <Flex gap={8} justifyContent="space-between">
          <Flex flexDir="column" gap={8}>
            <Text
              fontSize="5xl"
              fontWeight="bold"
              lineHeight="3.5rem"
              fontFamily="heading"
              mb={4}
            >
              {chainName}
            </Text>

            {chainId && <NetworkDisplay chainId={chainId} mr={3} />}
            <MarkdownViewer markdown={chainDescription} />
          </Flex>
          {nftUrl && (
            <Flex
              align="center"
              justify="center"
              minW="min(373px, 100%)"
              maxH="min(373px, 100%)"
              borderRadius={8}
              overflow="hidden"
            >
              <Image
                maxW={373}
                maxH={373}
                src={ipfsUriToHttp(nftUrl)}
                alt="quest chain NFT badge"
              />
            </Flex>
          )}
        </Flex>
      )}

      <Flex
        w="full"
        display={step === 2 ? 'flex' : 'none'}
        flexDir="column"
        gap={8}
      >
        <NFTForm
          onSubmit={onSubmitNFTMeta}
          chainName={chainName}
          submitLabel="Continue to Step 3"
        />
        <Step3 />
        <Step4 />
      </Flex>

      <Flex
        w="full"
        display={step === 3 ? 'flex' : 'none'}
        flexDir="column"
        gap={8}
      >
        <RolesForm onSubmit={onSubmitRoles} address={address} />
        <Step4 />
      </Flex>

      <Flex
        w="full"
        display={step === 4 ? 'flex' : 'none'}
        flexDir={{ base: 'column', md: 'row' }}
        gap={8}
      >
        <Flex flexGrow={1} flexDir="column" gap={8}>
          <QuestsForm
            isSubmitting={isSubmitting}
            onPublishQuestChain={onPublishQuestChain}
          />
        </Flex>
        <Flex w={373}>
          {address && (
            <MembersDisplay
              owners={ownerAddresses}
              admins={adminAddresses}
              editors={editorAddresses}
              reviewers={reviewerAddresses}
            />
          )}
        </Flex>
      </Flex>
      {/*
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          if (chainId && address) {
            router.push(`/${chainId}/${address}`);
          }
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
                src={ipfsUriToHttp(imageUrl)}
                alt="quest chain NFT badge"
              />
            </Flex>
            <Text fontSize={20} mb={2} mt={4} fontWeight="semibold">
              Your quest chain will be ready in a few seconds...
            </Text>
            <Text>Now is the perfect time to let everybody know!</Text>
            <Text mb={6}>
              Use the buttons below to share it on Twitter and Mastodon.
            </Text>
            <Flex gap={3} justifyContent="center">
              <TwitterShareButton
                url={QCURL}
                title={QCmessage}
                via="questchainz"
              >
                <Button
                  bgColor="#4A99E9"
                  p={4}
                  h={7}
                  leftIcon={<TwitterIcon />}
                >
                  Tweet
                </Button>
              </TwitterShareButton>
              <MastodonShareButton message={`${QCmessage} ${QCURL}`} />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
*/}
    </Page>
  );
};

const Step: React.FC<{
  number: number;
  title: string;
}> = ({ number, title }) => (
  <Flex
    w="full"
    boxShadow="inset 0px 0px 0px 1px #718096"
    borderRadius={10}
    px={{ base: 4, md: 12 }}
    py={8}
    alignItems="center"
  >
    <Box
      py={1}
      px={3}
      borderWidth={1}
      borderColor="gray.500"
      color="gray.500"
      borderRadius={4}
      mr={6}
    >
      STEP {number}
    </Box>
    <Text fontWeight="bold" fontSize={16} color="gray.400">
      {title}
    </Text>
  </Flex>
);
const Step2 = () => {
  return <Step number={2} title="Chain completion NFT" />;
};
const Step3 = () => {
  return <Step number={3} title="Members" />;
};
const Step4 = () => {
  return <Step number={4} title="Quests" />;
};

export default Create;
