import { env } from '@/lib/env';

class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data: unknown) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

type FetchOptions = RequestInit & {
  baseUrl?: string;
  params?: Record<string, string>;
};

export async function fetchApi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const {
    baseUrl = env?.NEXT_PUBLIC_API_URL ?? '',
    params = {},
    headers = {},
    ...restOptions
  } = options;

  // Build URL with query parameters
  const url = new URL(baseUrl + endpoint);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...restOptions,
  });

  if (!response.ok) {
    // Handle different error status codes appropriately
    const errorText = await response.text();
    let errorData;
    try {
      errorData = JSON.parse(errorText);
    } catch (e) {
      console.error(e);
      errorData = { message: errorText };
    }
    
    const error = new ApiError(errorData.message || 'API request failed', response.status, errorData);
    throw error;
  }

  // For 204 No Content responses
  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}