import {
  // ComponentWithAs,
  // HStack,
  // IconProps,
  Link as ChakraLink,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { HOME_URL } from '@/utils/constants';

// import { DiscordIcon } from '../icons/DiscordIcon';
// import { GithubIcon } from '../icons/GithubIcon';
// import { MediumIcon } from '../icons/MediumIcon';
// import { TwitterIcon } from '../icons/TwitterIcon';

type TextLinkType = {
  label: string;
  href: string;
  external: boolean;
};

const textLinks: TextLinkType[] = [
  {
    label: 'Zero To One',
    href: HOME_URL,
    external: false,
  },
  { label: 'Explore Courses', href: '/explore', external: false },
  { label: 'Browse Gigs', href: '/gigs', external: false },
  // {
  //   label: 'Documentation',
  //   href: 'https://quest-chains.gitbook.io/app-documentation/',
  //   external: true,
  // },
  // { label: 'Support', href: 'https://discord.gg/sjnh6cuVcN', external: true },
];

const TextLink = ({ label, href, external }: TextLinkType) => {
  return external ? (
    <ChakraLink
      href={href}
      color="main"
      // _hover={{ borderBottomColor: 'white' }}
      fontFamily="Merriweather"
      isExternal
    >
      {label}
    </ChakraLink>
  ) : (
    <ChakraLink
      as={NextLink}
      href={href}
      color="main"
      fontFamily="Merriweather"
      // _hover={{ borderBottomColor: 'white' }}
    >
      {label}
    </ChakraLink>
  );
};

// type IconLinkType = {
//   Icon: ComponentWithAs<'svg', IconProps>;
//   href: string;
//   external: boolean;
// };

// const iconLinks: IconLinkType[] = [
//   {
//     Icon: TwitterIcon,
//     href: 'https://twitter.com/questchainz',
//     external: true,
//   },
//   { Icon: GithubIcon, href: 'https://github.com/quest-chains', external: true },
//   {
//     Icon: DiscordIcon,
//     href: 'https://discord.com/invite/sjnh6cuVcN',
//     external: true,
//   },
//   { Icon: MediumIcon, href: 'https://medium.com/quest-chains', external: true },
// ];

// const IconLink = ({ Icon, href, external }: IconLinkType) => {
//   return external ? (
//     <ChakraLink href={href} color="white" _hover={{ color: 'main' }} isExternal>
//       <Icon />
//     </ChakraLink>
//   ) : (
//     <ChakraLink
//       as={NextLink}
//       href={href}
//       color="white"
//       _hover={{ color: 'main' }}
//     >
//       <Icon />
//     </ChakraLink>
//   );
// };

export const Footer: React.FC = () => (
  <VStack
    w="100%"
    justify="center"
    align="center"
    zIndex={1000}
    gap={12}
    pt={8}
    pb={4}
    fontSize="sm"
    background="limeGreen.300"
  >
    <Stack
      gap={{ base: 1, md: 2, lg: 4 }}
      direction={{ base: 'column', md: 'row' }}
      align="center"
    >
      {textLinks.map(l => (
        <TextLink key={l.href} {...l} />
      ))}
    </Stack>
    {/*
    <HStack gap={4} fontSize="xl">
      {iconLinks.map(l => (
        <IconLink key={l.href} {...l} />
      ))}
    </HStack>
*/}
    <Text fontFamily="Merriweather" fontWeight="bold">
      © Zero To One, all rights reserved.
    </Text>
  </VStack>
);
