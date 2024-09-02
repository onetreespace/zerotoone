import Busboy from 'busboy';
import concat from 'concat-stream';
import { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';

import { authHandler } from '@/lib/authHandler';
import { pinFilesToIPFS } from '@/lib/ipfs';
import { MongoUser } from '@/lib/mongodb/types';

const UPLOAD_FILE_SIZE_LIMIT: number = 5 * 1000 * 1000;

class HttpError extends Error {
  status = 500;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export const uploadFiles = authHandler(
  async (
    _user: MongoUser,
    req: NextApiRequest,
    res: NextApiResponse,
  ): Promise<void> => {
    if (req.method !== 'POST') {
      res.status(405).end();
      return;
    }

    const busboy = Busboy({
      headers: req.headers,
      limits: { fileSize: UPLOAD_FILE_SIZE_LIMIT },
    });
    const files: {
      name: string;
      stream: () => ReadableStream;
    }[] = [];
    let truncated = false;

    busboy.on('file', async (fieldname: string, fileStream: Readable) => {
      fileStream.pipe(
        concat({ encoding: 'buffer' }, (data: Buffer) => {
          const file = {
            name: fieldname,
            stream: () => Readable.toWeb(Readable.from(data)) as ReadableStream,
          };
          if (!(fileStream as unknown as { truncated: boolean }).truncated) {
            files.push(file);
          } else {
            truncated = true;
          }
        }),
      );
    });

    busboy.on('finish', async () => {
      try {
        if (truncated) {
          throw new HttpError(400, 'File size too large');
        }
        if (files.length === 0) {
          throw new HttpError(400, 'No files uploaded');
        }

        const result = await pinFilesToIPFS(files);
        res.json({ response: result });
      } catch (error) {
        console.error('Failed to upload files:', error);
        const status = (error as HttpError).status ?? 500;
        res.status(status).json({
          response: 'Error: Failed to upload files',
          error:
            status === 500
              ? 'Internal Server Error'
              : ((error as Error)?.message ?? error),
        });
      }
    });

    req.pipe(busboy);
  },
);

export default uploadFiles;
