import { Base64 } from 'js-base64';
import { v4 as uuidv4 } from 'uuid';
import {
  Account,
  Chain,
  getAddress,
  RpcSchema,
  Transport,
  verifyMessage,
  WalletClient,
} from 'viem';

const AUDIENCE = 'quest-chains-api';
const TOKEN_DURATION = 1000 * 60 * 60 * 24 * 7; // 7 days
const WELCOME_MESSAGE = `Welcome to Zero To One Anon!\nPlease sign this message so we know it is you.\n\n`;

type Claim = {
  iat: number;
  exp: number;
  iss: string;
  aud: string;
  tid: string;
};

export const createToken = async (
  walletClient: WalletClient<Transport, Chain, Account, RpcSchema>,
): Promise<string> => {
  const { address } = walletClient.account!;

  const iat = new Date().getTime();

  const claim: Claim = {
    iat,
    exp: iat + TOKEN_DURATION,
    iss: address.toLowerCase(),
    aud: AUDIENCE,
    tid: uuidv4(),
  };

  const serializedClaim = JSON.stringify(claim);
  const msgToSign = `${WELCOME_MESSAGE}${serializedClaim}`;
  const signature = await walletClient.signMessage({ message: msgToSign });

  return Base64.encode(JSON.stringify([signature, serializedClaim]));
};

export const verifyToken = (token: string): string | null => {
  try {
    if (!token) return null;
    const rawToken = Base64.decode(token);
    const [signature, rawClaim] = JSON.parse(rawToken);
    const claim: Claim = JSON.parse(rawClaim);
    const address = getAddress(claim.iss);

    const msgToVerify = `${WELCOME_MESSAGE}${rawClaim}`;
    const valid = verifyMessage({ address, message: msgToVerify, signature });
    const expired = claim.exp < new Date().getTime();
    const validAudience = claim.aud === AUDIENCE;

    if (!valid) {
      throw new Error('invalid signature');
    }
    if (expired) {
      throw new Error('token expired');
    }
    if (!validAudience) {
      throw new Error('invalid audience');
    }
    // Important, always keep address lowercase for comparisons
    return address.toLowerCase();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Token verification failed', e as Error);
    return null;
  }
};
