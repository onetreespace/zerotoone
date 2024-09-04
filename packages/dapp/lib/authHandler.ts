import { Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { isAddress } from 'viem';

import { verifyToken } from '@/lib/auth';
import clientPromise from '@/lib/mongodb/client';
import { MongoUser } from '@/lib/mongodb/types';

export const authHandler =
  (
    handler: (
      user: MongoUser | null,
      req: NextApiRequest,
      res: NextApiResponse,
    ) => Promise<unknown>,
  ) =>
  async (req: NextApiRequest, res: NextApiResponse): Promise<unknown> => {
    let client: Db | null;
    try {
      client = await clientPromise;
    } catch (error) {
      console.error('Error connecting to the database:', error);
      return res.status(500).end();
    }
    return handler(null, req, res);
    // try {
    // const token = req.headers.authorization?.split('Bearer')?.pop()?.trim();
    //
    // if (!token) throw new Error('token not found');
    //
    // const address = verifyToken(token);
    //
    // if (!address || !isAddress(address)) throw new Error('invalid address');
    //
    // const user = (await client
    //   .collection('users')
    //   .findOne({ address })) as MongoUser | null;
    //
    // if (!user) throw new Error('user not found');
    return handler(null, req, res);
    // } catch (error) {
    //   console.error('Error authenticating user:', error);
    //   return res.status(401).json({ error: 'Unauthorized Access' });
    // }
  };
