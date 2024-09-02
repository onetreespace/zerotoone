import { NextApiRequest, NextApiResponse } from 'next';

import { authHandler } from '@/lib/authHandler';
import { pinJsonToIPFS } from '@/lib/ipfs';
import { MongoUser } from '@/lib/mongodb/types';

export const uploadJson = authHandler(
  async (
    _user: MongoUser,
    req: NextApiRequest,
    res: NextApiResponse,
  ): Promise<void> => {
    if (req.method !== 'POST') {
      res.status(405).end();
      return;
    }

    try {
      const cid = await pinJsonToIPFS(req.body);
      res.json({ response: cid });
    } catch (error) {
      console.error('Failed to upload json:', error);
      res.status(500).json({
        response: 'Error: Failed to upload files',
        error: (error as Error)?.message ?? 'Internal Server Error',
      });
    }
  },
);

export default uploadJson;
