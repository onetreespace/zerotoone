import useSWR from 'swr';

import { Metadata } from '@/utils/metadata';

const fetcher = async (url: string | null | undefined) => {
  if (!url) {
    return {} as Metadata;
  }
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return (await res.json()) as Metadata;
};

export const useMetadata = (
  url: string | null | undefined,
): {
  data: Metadata;
  isLoading: boolean;
  error: Error;
} => {
  const { data, error } = useSWR(url, fetcher, { isPaused: () => !url });

  return {
    data: data || {},
    isLoading: !error && !data,
    error,
  };
};
