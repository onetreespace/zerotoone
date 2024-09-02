import { Db, MongoClient } from 'mongodb';

import { EnvironmentError } from '@/utils/errors';

if (!process.env.MONGODB_URI) {
  throw new EnvironmentError('MONGODB_URI');
}

const { MONGODB_URI } = process.env;

const IS_PRODUCTION = process.env.NEXT_PUBLIC_IS_PRODUCTION === 'true';

const MONGODB_DATABASE = IS_PRODUCTION ? 'quest-chains' : 'quest-chains-dev';

const options = {};

export const initIndexes = async (client: Db): Promise<Db> => {
  const usersCollection = client.collection('users');
  await usersCollection.createIndex(
    { address: 1 },
    { unique: true, partialFilterExpression: { address: { $type: 'string' } } },
  );
  await usersCollection.createIndex(
    { username: 1 },
    {
      unique: true,
      partialFilterExpression: { username: { $type: 'string' } },
    },
  );
  await usersCollection.createIndex(
    { email: 1 },
    { unique: true, partialFilterExpression: { email: { $type: 'string' } } },
  );

  const categoriesCollection = client.collection('categories');
  await categoriesCollection.createIndex({ value: 1 }, { unique: true });
  return client;
};

const createClientPromise = async (): Promise<Db> => {
  const client = new MongoClient(MONGODB_URI, options);
  return client
    .connect()
    .then((c: MongoClient) => c.db(MONGODB_DATABASE))
    .then(initIndexes);
};

const clientPromise: Promise<Db> = createClientPromise();

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
