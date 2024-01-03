import { GetBlogsResponse } from '../types/blogs';
import { api } from './axios';
import { axiosErrorHandler } from './axios-error-handler';

export const getBlogs = async () => {
  const data = api.get<GetBlogsResponse>('web-app-blogs?populate=poster').catch(axiosErrorHandler);

  return data;
};
