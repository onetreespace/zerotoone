import { getFromStorage, STORAGE_KEYS } from '@/utils/storageHelpers';

export const RequestTypes = {
  Put: 'PUT',
  Delete: 'DELETE',
  Post: 'POST',
  Patch: 'PATCH',
  Get: 'GET',
};

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const fetchWithHeaders = async (
  url: string,
  method = RequestTypes.Get,
  data = {},
  _headers = {},
): Promise<Response> => {
  let headers: Record<string, string> = { ..._headers, ...defaultHeaders };

  const authToken = getFromStorage(STORAGE_KEYS.AUTH_TOKEN);
  if (authToken) {
    headers = { ...headers, Authorization: authToken };
  }

  const request = {
    method,
    headers,
    body:
      // eslint-disable-next-line no-nested-ternary
      method === RequestTypes.Get
        ? null
        : data instanceof FormData
          ? data
          : JSON.stringify(data),
  };

  return fetch(url, request);
};
