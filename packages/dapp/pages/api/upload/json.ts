import { put } from '@vercel/blob';
import { NextApiRequest, NextApiResponse } from 'next';

import { authHandler } from '@/lib/authHandler';
import { MongoUser } from '@/lib/mongodb/types';

export const uploadJson = authHandler(
  async (
    _user: MongoUser | null,
    req: NextApiRequest,
    res: NextApiResponse,
  ): Promise<void> => {
    if (req.method !== 'POST') {
      res.status(405).end();
      return;
    }

    try {
      if (typeof req.body !== 'object') {
        throw new Error('body must be a valid JSON object');
      }
      const blob = await put('metadata.json', JSON.stringify(req.body), {
        access: 'public',
        contentType: 'application/json',
      });
      res.json({ response: blob.url });

      // const cid = await pinJsonToIPFS(req.body);
      // res.status(200).json({ response: cid });
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
