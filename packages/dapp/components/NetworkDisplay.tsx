import {
  ImageProps,
  Stack,
  StackProps,
  Tag,
  TagLabel,
  Text,
  TextProps,
} from '@chakra-ui/react';

import { getChain, isSupportedChain } from '@/web3';

export const NetworkDisplay: React.FC<
  {
    chainId: number;
    asTag?: boolean;
    imageProps?: ImageProps;
    textProps?: TextProps;
  } & StackProps
> = ({ chainId, imageProps, asTag = false, textProps, ...props }) => {
  if (!isSupportedChain(chainId)) return null;
  const { name } = getChain(chainId);
  const TextComponent = asTag ? TagLabel : Text;
  const inner = (
    <Stack direction="row" align="center" letterSpacing={0} {...props}>
      {/*
      <Image src={image} alt={label} boxSize="1.5rem" {...imageProps} /> 
*/}
      <TextComponent as="span" {...textProps}>
        {name}
      </TextComponent>
    </Stack>
  );

  return asTag ? (
    <Tag borderRadius="full" py={1} px={2} maxHeight="2rem">
      {inner}
    </Tag>
  ) : (
    inner
  );
};
