import { WarningIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  Flex,
  Image,
  Progress,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import removeMd from 'remove-markdown';
import { Address } from 'viem';

import { QuestChainDisplayFragment } from '@/graphql';
import { useMetadata } from '@/hooks/useMetadata';
import { ipfsUriToHttp } from '@/utils/uriHelpers';

import { NetworkDisplay } from './NetworkDisplay';
import { UserDisplay } from './UserDisplay';

type QuestChainTileProps = {
  onClick?: () => void;
  completed?: number;
  featured?: boolean;
} & QuestChainDisplayFragment;

export const QuestChainTile: React.FC<QuestChainTileProps> = ({
  address,
  details,
  numQuests,
  createdBy,
  chainId,
  completed,
  onClick = () => undefined,
  paused = false,
  featured = false,
}) => {
  const {
    data: { name, description, image_url: imageUrl },
  } = useMetadata(details);

  return (
    <NextLink
      as={`/course/${chainId}/${address}`}
      href="/course/[chainId]/[address]"
      passHref
    >
      <VStack
        onClick={onClick}
        cursor="pointer"
        align="stretch"
        w="full"
        p={6}
        border="1px solid black"
        borderBottomRightRadius={12}
        pos="relative"
        boxShadow="10.56px 10.56px 0px 0px #000000"
        bg="blue.500"
        _hover={{
          bg: 'limeGreen.100',
        }}
        transition="all 0.3s ease"
      >
        <AspectRatio ratio={16 / 9} w="full" maxW="full" bg="midnightBlue.300">
          {imageUrl ? (
            <Image src={ipfsUriToHttp(imageUrl)} alt={name} />
          ) : (
            <Box />
          )}
        </AspectRatio>
        <Flex justifyContent="space-between" flexDirection="column" flex="1">
          <Flex ml={-2}>
            <UserDisplay address={createdBy.id as Address} size="xs" noLink />
          </Flex>

          <Flex direction="column" gap={2}>
            <Text
              display="-webkit-box"
              textOverflow="ellipsis"
              fontFamily="heading"
              overflow="hidden"
              maxW="calc(100%)"
              fontSize={featured ? '14px' : '13px'}
              sx={{
                lineClamp: 2,
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {removeMd(description ?? '')}
            </Text>
            <Flex
              justifyContent="space-between"
              position="absolute"
              left="-8"
              bottom="4"
              border="1px solid black"
              p={4}
              bg="blue.700"
              color="white"
              maxW="70%"
            >
              <Text
                fontSize="lg"
                fontFamily="heading"
                fontWeight="400"
                lineHeight="20px"
                display="-webkit-box"
                textOverflow="ellipsis"
                overflow="hidden"
                sx={{
                  lineClamp: 2,
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {name}
              </Text>
              {paused && (
                <Tag variant="subtle" colorScheme="orange" borderRadius="full">
                  <TagLeftIcon as={WarningIcon} boxSize="1.25rem" />
                  <TagLabel color="white">Disabled</TagLabel>
                </Tag>
              )}
            </Flex>
            <Box h="52px" />
            {typeof completed === 'number' && (
              <Flex justify="space-between" align="center">
                <Progress
                  value={
                    completed >= numQuests
                      ? 100
                      : Number(((completed / numQuests) * 100).toFixed(2))
                  }
                  size="xs"
                  w="80%"
                />
                <Text whiteSpace="nowrap">
                  {((completed / numQuests) * 100).toFixed(0)} %
                </Text>
              </Flex>
            )}
            <Flex justify="end">
              <NetworkDisplay
                chainId={Number(chainId)}
                imageProps={{ boxSize: '1rem' }}
                textProps={{ fontSize: '12px', fontFamily: 'heading' }}
                spacing={1}
              />
            </Flex>
          </Flex>
        </Flex>
      </VStack>
    </NextLink>
  );
};
