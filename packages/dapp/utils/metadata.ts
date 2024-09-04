type HttpResponse = { response: unknown; error: string };

export const uploadMetadata = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata: any,
): Promise<string> => {
  const res = await fetch(`/api/upload/json`, {
    method: 'POST',
    body: JSON.stringify(metadata),
  });
  if (!res.ok) {
    throw new Error('Failed to upload metadata');
  }
  const data = (await res.json()) as HttpResponse;
  return data.response as string;
};

export const uploadFiles = async (files: File[]): Promise<string> => {
  if (files.length === 0) {
    throw new Error('No files to upload');
  }
  if (files.length > 1) {
    throw new Error('Only one file can be uploaded at a time');
  }

  const formData = new FormData();
  formData.set(files[0].name, files[0]);

  const res = await fetch(`/api/upload/files`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) {
    throw new Error('Failed to upload file');
  }
  const data = (await res.json()) as HttpResponse;
  return data.response as string;
};

export type Metadata = {
  name: string;
  description: string;
  image_url?: string;
  animation_url?: string;
  external_url?: string;
  slug?: string;
  categories?: string[];
  attributes?: {
    trait_type?: string;
    value: string | number;
    display_type?: 'number' | 'boost_number' | 'boost_percentage';
  }[];
};
