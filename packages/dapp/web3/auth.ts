import { Account, Chain, RpcSchema, Transport, WalletClient } from 'viem';

import { createToken, verifyToken } from '@/lib/auth';
import {
  getFromStorage,
  removeFromStorage,
  setInStorage,
  STORAGE_KEYS,
} from '@/utils/storageHelpers';

const getExistingToken = async (
  walletClient: WalletClient<Transport, Chain, Account, RpcSchema>,
): Promise<string | null> => {
  const tokenFromStorage = getFromStorage(STORAGE_KEYS.AUTH_TOKEN);
  if (!tokenFromStorage) return null;

  const token = tokenFromStorage.split(' ')[1];
  if (!token) return null;

  const signerAddress = walletClient.account?.address;
  if (!signerAddress) return null;
  const verifiedAddress = verifyToken(token);

  if (
    !verifiedAddress ||
    verifiedAddress.toLowerCase() !== signerAddress.toLowerCase()
  ) {
    removeFromStorage(STORAGE_KEYS.AUTH_TOKEN);
    return null;
  }

  return token;
};

export const authenticateWallet = async (
  walletClient: WalletClient<Transport, Chain, Account, RpcSchema>,
): Promise<string> => {
  const existingToken = await getExistingToken(walletClient);
  const token = existingToken ?? (await createToken(walletClient));
  setInStorage(STORAGE_KEYS.AUTH_TOKEN, `Bearer ${token}`);
  return token;
};
