import { create } from 'ipfs-http-client';
import { Readable } from 'stream';

import { w3upClient } from './w3up';

const ipfsTheGraph = create({
  url: 'https://ipfs.network.thegraph.com/ipfs/api/v0',
});

type FileLike = {
  name: string;
  stream: () => ReadableStream;
};

export const pinFilesToIPFS = async (files: FileLike[]) => {
  const client = await w3upClient;

  if (files.length === 1) {
    const data = await client.uploadFile(files[0]);
    return data.toV1().toString();
  }

  const data = await client.uploadDirectory(files);
  return data.toV1().toString();
};

const pinBufferToIPFS = async (buffer: Buffer) => {
  const file = {
    name: 'metadata.json',
    stream: () => Readable.toWeb(Readable.from(buffer)) as ReadableStream,
  };

  const client = await w3upClient;

  const data = await client.uploadFile(file);
  return data.toV1().toString();
};

const pinBufferToTheGraph = async (buffer: Buffer) => {
  const node = await ipfsTheGraph.add(buffer);

  const { path } = node;
  await ipfsTheGraph.pin.add(path);
  return path;
};

export const pinJsonToIPFS = async (body: unknown) => {
  if (typeof body !== 'object') {
    throw new Error('body must be a valid JSON object');
  }
  const objectString = JSON.stringify(body);
  const buffer = Buffer.from(objectString);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cid] = await Promise.all([
    pinBufferToTheGraph(buffer),
    pinBufferToIPFS(buffer),
  ]);

  return cid;
};
