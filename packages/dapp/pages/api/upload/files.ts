import { put } from '@vercel/blob';
import { fileTypeFromBuffer } from 'file-type';
import formidable from 'formidable';
import fs from 'fs';
import { NextApiRequest, NextApiResponse, PageConfig } from 'next';

import { authHandler } from '@/lib/authHandler';
import { MongoUser } from '@/lib/mongodb/types';

const UPLOAD_FILE_SIZE_LIMIT: number = 4.5 * 1024 * 1024;

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

export const uploadFiles = authHandler(
  async (
    _user: MongoUser | null,
    req: NextApiRequest,
    res: NextApiResponse,
  ): Promise<void> => {
    if (req.method !== 'POST') {
      res.status(405).end();
      return;
    }
    const form = formidable({
      maxFileSize: UPLOAD_FILE_SIZE_LIMIT,
    });

    try {
      const [, files] = await form.parse(req);
      const fileName = Object.keys(files)[0];
      const formFile = (files[fileName] || [])[0];

      if (!formFile) {
        res.status(400).json({ error: 'No file provided' });
        return;
      }

      const buffer = fs.readFileSync(formFile.filepath);

      const fileType = await fileTypeFromBuffer(buffer);

      if (!fileType) {
        res.status(400).json({ error: 'Invalid file type' });
        return;
      }

      const blob = await put(fileName, buffer, {
        access: 'public',
        contentType: fileType.mime,
      });
      res.status(200).json({ response: blob.url });

      // const fileLike = {
      //   name: fileName,
      //   stream: () => Readable.toWeb(Readable.from(buffer)) as ReadableStream,
      // }
      // const result = await pinFilesToIPFS([fileLike]);
      // console.log({ result });
      // res.status(200).json({ response: result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  },
);

export default uploadFiles;
