import Head from 'next/head';

import { HOME_URL } from '@/utils/constants';

export type HeadMetaProps = {
  title?: string;
  description?: string;
  url?: string;
  img?: string;
  cardStyle?: string;
};

export const HeadComponent: React.FC<HeadMetaProps> = ({
  title = 'Zero to One',
  description = 'Level up from zero to one',
  url = HOME_URL,
  img = `${HOME_URL}/logo.png`,
  cardStyle = 'summary',
}) => (
  <Head>
    <title>{title}</title>
    <meta
      name="viewport"
      property="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta name="title" property="title" content={title} />
    <meta name="description" property="description" content={description} />
    <meta name="theme-color" property="theme-color" content="#5a32e6" />

    <meta name="og:type" property="og:type" content="website" />
    <meta name="og:site_name" property="og:site_name" content="Zero To One" />
    <meta name="og:locale" property="og:locale" content="en_US" />

    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta name="og:url" property="og:url" content={url} />
    <meta name="og:image" property="og:image" content={img} />

    <meta name="twitter:card" property="twitter:card" content={cardStyle} />
    <meta name="twitter:url" property="twitter:url" content={url} />
    <meta name="twitter:site" property="twitter:site" content={url} />
    <meta name="twitter:title" property="twitter:title" content={title} />
    <meta
      name="twitter:description"
      property="twitter:description"
      content={description}
    />
    <meta name="twitter:image" property="twitter:image" content={img} />
  </Head>
);
