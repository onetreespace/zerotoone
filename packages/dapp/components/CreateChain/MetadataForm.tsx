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

import { MarkdownEditor } from '@/components/MarkdownEditor';
import { SubmitButton } from '@/components/SubmitButton';
import { useDelay } from '@/hooks/useDelay';
import { useDropImage } from '@/hooks/useDropFiles';
import { useInputText } from '@/hooks/useInputText';
import { MongoCategory } from '@/lib/mongodb/types';
import { handleError } from '@/utils/helpers';
import { Metadata, uploadFiles, uploadMetadata } from '@/utils/metadata';
import { isSupportedChain } from '@/web3';

import { UploadImageForm } from '../UploadImageForm';
import { Categories } from './Categories';

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

const makeId = () => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 6; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// const fetchValidSlug = async (name: string, chainId: string) => {
//   const slug = slugify(name);
//   const valid = await graphql.validateQuestChainSlug(chainId, slug);
//   if (valid) {
//     return slug;
//   }
//   return `${slug}-${makeId()}`;
// };

export const MetadataForm: React.FC<{
  onBack?: () => void;
  onSubmit: (
    name: string,
    description: string,
    metadataUri: string,
    slug?: string,
    imageUrl?: string,
  ) => void | Promise<void>;
}> = ({ onBack, onSubmit }) => {
  const [nameRef, setName] = useInputText();
  const [descRef, setDescription] = useInputText();
  const [slug, setSlug] = useState('');
  const [categories, setCategories] = useState<MongoCategory[]>([]);

  const uploadImageProps = useDropImage();
  const { imageFile } = uploadImageProps;

  // const isDisabled =
  //   !isConnected ||
  //   !isSupportedChain(chainId) ||
  //   !categories.length ||
  //   !slug.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

  const [isSubmitting, setSubmitting] = useState(false);

  const updateValidSlug = useCallback((name: string) => {
    // if (chainId) {
    //   fetchValidSlug(name, chainId).then(setSlug);
    // }
  }, []);

  const delayedUpdateValidSlug = useDelay(updateValidSlug);

  const exportMetadata = useCallback(async () => {
    let tid;
    try {
      setSubmitting(true);
      const metadata: Metadata = {
        name: nameRef.current,
        description: descRef.current,
        slug,
        categories: categories.map(c => c.value),
      };
      let imageUrl;
      if (imageFile) {
        tid = toast.loading('Uploading image to IPFS via web3.storage');
        const imageHash = await uploadFiles([imageFile]);
        imageUrl = `ipfs://${imageHash}`;
        metadata.image_url = imageUrl;
        toast.dismiss(tid);
      }
      tid = toast.loading('Uploading metadata to IPFS via web3.storage');
      const hash = await uploadMetadata(metadata);
      const metadataUri = `ipfs://${hash}`;
      toast.dismiss(tid);

      await onSubmit(
        nameRef.current,
        descRef.current,
        metadataUri,
        slug,
        imageUrl,
      );
      setName('');
      setDescription('');
      setSlug('');
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
    slug,
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
                delayedUpdateValidSlug(e.target.value);
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
          <SubmitButton
            isLoading={isSubmitting}
            // isDisabled={isDisabled}
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
          </SubmitButton>
        </Flex>
      </form>
    </VStack>
  );
};
