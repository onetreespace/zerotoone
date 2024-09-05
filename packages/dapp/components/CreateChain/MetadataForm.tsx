import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAccount } from 'wagmi';

import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useDropImage } from '@/hooks/useDropFiles';
import { useInputText } from '@/hooks/useInputText';
import { MongoCategory } from '@/lib/mongodb/types';
import { handleError } from '@/utils/helpers';
import { Metadata, uploadFiles, uploadMetadata } from '@/utils/metadata';
import { isSupportedChain } from '@/web3';

import { UploadImageForm } from '../UploadImageForm';
import { Categories } from './Categories';

export const MetadataForm: React.FC<{
  onBack?: () => void;
  onSubmit: (
    name: string,
    description: string,
    metadataUri: string,
    imageUrl?: string,
  ) => void | Promise<void>;
}> = ({ onBack, onSubmit }) => {
  const [nameRef, setName] = useInputText();
  const [descRef, setDescription] = useInputText();
  const [categories, setCategories] = useState<MongoCategory[]>([]);

  const uploadImageProps = useDropImage();
  const { imageFile } = uploadImageProps;
  const { isConnected, chainId } = useAccount();

  const isDisabled =
    !isConnected || !isSupportedChain(chainId) || !categories.length;

  const [isSubmitting, setSubmitting] = useState(false);

  const exportMetadata = useCallback(async () => {
    let tid;
    try {
      setSubmitting(true);
      const metadata: Metadata = {
        name: nameRef.current,
        description: descRef.current,
        categories: categories.map(c => c.value),
      };
      let imageUrl;
      if (imageFile) {
        tid = toast.loading('Uploading image to IPFS via web3.storage');
        imageUrl = await uploadFiles([imageFile]);
        metadata.image_url = imageUrl;
        toast.dismiss(tid);
      }
      tid = toast.loading('Uploading metadata to IPFS via web3.storage');
      const metadataUri = await uploadMetadata(metadata);
      toast.dismiss(tid);

      await onSubmit(nameRef.current, descRef.current, metadataUri, imageUrl);
      setName('');
      setDescription('');
      setCategories([]);
    } catch (error) {
      if (tid) {
        toast.dismiss(tid);
      }
      handleError(error);
    } finally {
      setSubmitting(false);
    }
  }, [
    nameRef,
    descRef,
    categories,
    onSubmit,
    imageFile,
    setName,
    setDescription,
  ]);

  const [nameLength, setNameLength] = useState(nameRef.current.length);

  return (
    <VStack
      w="100%"
      align="stretch"
      spacing={10}
      boxShadow="inset 0px 0px 0px 1px white"
      borderRadius={10}
      px={{ base: 4, md: 12 }}
      py={8}
    >
      <HStack w="100%">
        <Box
          py={1}
          px={3}
          borderWidth={1}
          borderColor="gray.500"
          color="gray.500"
          borderRadius={4}
          mr={4}
        >
          STEP 1
        </Box>
        <Text fontWeight="bold" fontSize={16}>
          Quest chain details
        </Text>
      </HStack>
      <form>
        <VStack w="100%" align="stretch" mb={10} spacing={4}>
          <FormControl w="full" isRequired>
            <Flex align="center" justify="space-between" w="100%">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Text fontSize="sm">{nameLength} / 90</Text>
            </Flex>
            <Input
              color="white"
              defaultValue={nameRef.current}
              bg="#0F172A"
              id="name"
              maxLength={90}
              onChange={e => {
                setName(e.target.value);
                setNameLength(e.target.value.length);
              }}
              placeholder="Quest chain name"
            />
          </FormControl>
          <FormControl w="full" isRequired>
            <FormLabel htmlFor="category">Category</FormLabel>
            <Categories
              setCategories={setCategories}
              numberOfCategories={categories.length}
            />
          </FormControl>

          <FormControl w="full" isRequired>
            <FormLabel htmlFor="description">Description</FormLabel>
            {/* TODO add hover effect similar to Name */}
            <MarkdownEditor
              value={descRef.current}
              placeholder="Quest chain description"
              onChange={setDescription}
            />
          </FormControl>
          <UploadImageForm
            {...uploadImageProps}
            label="Cover Image (optional)"
            formControlProps={{
              w: '100%',
              position: 'relative',
            }}
            imageProps={{
              maxHeight: '16rem',
              w: 'auto',
            }}
            dropzoneProps={{
              ...uploadImageProps.dropzoneProps,
              height: '16rem',
            }}
          />
        </VStack>
        <Flex
          mt={4}
          w="100%"
          justify={onBack ? 'space-between' : 'flex-end'}
          align="center"
        >
          {onBack && (
            <Button
              variant="ghost"
              mr={3}
              onClick={onBack}
              borderRadius="full"
              boxShadow="inset 0px 0px 0px 1px white"
            >
              Back
            </Button>
          )}
          <Button
            isLoading={isSubmitting}
            isDisabled={isDisabled}
            onClick={() => {
              if (!nameRef.current || !descRef.current) {
                toast.error('Please enter a name & description');
                return;
              }
              exportMetadata();
            }}
            w="full"
          >
            Continue to Step 2
          </Button>
        </Flex>
      </form>
    </VStack>
  );
};
