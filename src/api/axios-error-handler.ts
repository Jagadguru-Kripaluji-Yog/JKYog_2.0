import { AxiosError } from 'axios';

export const axiosErrorHandler = (e: unknown): never => {
  if (e instanceof AxiosError) {
    if (e.response) {
      throw new Error(e.response.data.message);
    } else {
      throw new Error(e.message);
    }
  } else {
    throw new Error('Unknown error');
  }
};
