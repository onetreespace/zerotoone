import { NextApiRequest, NextApiResponse } from 'next';

// import clientPromise from '@/lib/mongodb/client';

const defaultCategories = [
  {
    label: 'Art',
    value: 'art',
  },
  {
    label: 'Music',
    value: 'music',
  },
  {
    label: 'Photography',
    value: 'photography',
  },
  {
    label: 'Writing',
    value: 'writing',
  },
  {
    label: 'Video',
    value: 'video',
  },
  {
    label: 'Games',
    value: 'games',
  },
  {
    label: 'Collectibles',
    value: 'collectibles',
  },
  {
    label: 'Domains',
    value: 'domains',
  },
  {
    label: 'Metaverse',
    value: 'metaverse',
  },
  {
    label: 'Memes',
    value: 'memes',
  },
  {
    label: 'Podcasts',
    value: 'podcasts',
  },
  {
    label: 'Software',
    value: 'software',
  },
  {
    label: 'Other',
    value: 'other',
  },
];

export const getCategories = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method !== 'GET') return res.status(405).end();

  // const client = await clientPromise;
  // const categoriesCollection = client.collection('categories');

  try {
    // const result = await categoriesCollection.find({}).toArray();
    return res.status(200).json(defaultCategories);
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'internal server error' });
  }
};

export default getCategories;
