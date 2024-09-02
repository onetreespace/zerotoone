import axios, { AxiosError, AxiosProgressEvent } from 'axios';
import EventEmitter from 'events';
import FormData from 'form-data';

type HttpResponse = { response: unknown; error: string };

const API_URL = '/api';

interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
  readonly webkitRelativePath: string;
}

interface UploadOptions {
  label?: string; // used for identifying the upload object in events
  apiUrl?: string;
}

export class MetadataUploader extends EventEmitter {
  private apiUrl: string;

  constructor(apiUrl = API_URL) {
    super();
    this.apiUrl = apiUrl;
  }

  uploadMetadata = async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    metadata: any,
    options?: UploadOptions,
  ): Promise<string> => {
    const { label, apiUrl } = options || {};

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      onUploadProgress: (event: AxiosProgressEvent) => {
        this.emit('progress', { progress: event, label });
      },
    };

    try {
      const res = await axios.post(
        `${apiUrl ?? this.apiUrl}/upload/json`,
        metadata,
        config,
      );
      return res.data.response;
    } catch (error) {
      throw new Error(
        ((error as AxiosError).response?.data as HttpResponse).error,
      );
    }
  };

  uploadFiles = async (
    files: File[],
    options?: UploadOptions,
  ): Promise<string> => {
    const { label, apiUrl } = options || {};
    const formData = new FormData();
    for (let i = 0; i < files.length; i += 1) {
      formData.append(files[i].name, files[i]);
    }

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
      onUploadProgress: (event: AxiosProgressEvent) => {
        this.emit('progress', { progress: event, label });
      },
    };

    try {
      const res = await axios.post(
        `${apiUrl ?? this.apiUrl}/upload/files`,
        formData,
        config,
      );
      return res.data.response;
    } catch (error) {
      throw new Error(
        ((error as AxiosError).response?.data as HttpResponse).error,
      );
    }
  };
}
