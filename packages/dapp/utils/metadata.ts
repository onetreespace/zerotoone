import { MetadataUploader, QCMetadata } from '@/metadata';

export type Metadata = QCMetadata;

export const uploader = new MetadataUploader();

export const uploadMetadata = async (data: Metadata): Promise<string> =>
  uploader.uploadMetadata(data);

export const uploadFiles = async (files: File[] | FileList): Promise<string> =>
  uploader.uploadFiles(files as File[]);
