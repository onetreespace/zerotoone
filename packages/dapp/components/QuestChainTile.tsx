import { WarningIcon } from '@chakra-ui/icons';
import {
  Flex,
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
      as={`/${chainId}/${address}`}
      href="/[chainId]/[address]"
      passHref
    >
      <Flex
        direction="column"
        w="full"
        align="center"
        h={completed === 0 || !!completed || featured ? '16.5rem' : '14rem'}
        onClick={onClick}
        borderRadius={8}
      >
        <VStack
          cursor="pointer"
          align="stretch"
          w="full"
          p={6}
          pt={4}
          transition="border-color 0.15s, box-shadow 0.15s"
          _hover={{
            // On hover the background image is not show. Show imo does not look great.
            background: imageUrl
              ? `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0.95) 70%), url(${ipfsUriToHttp(
                  imageUrl,
                )})`
              : 'url("/assets/qc-tile-bg.svg"), linear-gradient(180deg, rgba(0, 0, 0, 0.6) 25%, rgba(0, 0, 0, 0.95) 70%),#4A0662',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderColor: 'main',
            boxShadow: '0px 0px 20px rgba(45, 248, 199, 0.32);',
          }}
          fontWeight="400"
          border="1px solid"
          borderColor="rgba(170, 170, 170, 0.5)"
          spacing={4}
          flex={1}
          borderRadius={8}
          pos="relative"
          justifyContent="end"
          background={
            imageUrl
              ? `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 25%, rgba(0, 0, 0, 0.95) 70%), url(${ipfsUriToHttp(
                  imageUrl,
                )})`
              : 'url("/assets/qc-tile-bg.svg"), linear-gradient(180deg, rgba(0, 0, 0, 0.6) 25%, rgba(0, 0, 0, 0.95) 70%)'
          }
          backgroundPosition="center"
          backgroundSize="cover"
        >
          <Flex justifyContent="space-between" flexDirection="column" flex="1">
            <Flex ml={-2}>
              <UserDisplay address={createdBy.id as Address} size="xs" noLink />
            </Flex>

            <Flex direction="column" gap={2}>
              <Flex justifyContent="space-between">
                <Text
                  fontSize={featured ? '2xl' : 'xl'}
                  fontFamily="Museo Moderno"
                  fontWeight="700"
                  lineHeight="24px"
                  display="-webkit-box"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  maxW="calc(100%)"
                  sx={{
                    lineClamp: 2,
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {name}
                </Text>
                {paused && (
                  <Tag
                    variant="subtle"
                    colorScheme="orange"
                    borderRadius="full"
                  >
                    <TagLeftIcon as={WarningIcon} boxSize="1.25rem" />
                    <TagLabel color="white">Disabled</TagLabel>
                  </Tag>
                )}
              </Flex>
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
              <Flex w="100%" align="end" h="3rem">
                <Text
                  display="-webkit-box"
                  lineHeight="20px"
                  color="whiteAlpha.700"
                  textOverflow="ellipsis"
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
              </Flex>
              <Flex justifyContent="space-between">
                {/* TODO in Figma the color is #BFA4C7 which is not exactly purple 100 */}
                <Text color="purple.100" fontSize="13px">
                  {numQuests} quests
                </Text>
                <NetworkDisplay
                  chainId={Number(chainId)}
                  imageProps={{ boxSize: '1rem' }}
                  textProps={{ color: 'purple.100', fontSize: '13px' }}
                  spacing={1}
                />
              </Flex>
            </Flex>
          </Flex>
        </VStack>
      </Flex>
    </NextLink>
  );
};
