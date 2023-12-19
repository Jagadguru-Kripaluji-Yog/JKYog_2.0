import { GetMeetPostersResponse } from '../types/meet-posters';
import { api } from './axios';
import { axiosErrorHandler } from './axios-error-handler';

export const getMeetPosters = () => {
  const data = api.get<GetMeetPostersResponse>('web-app-home-meet-posters?populate=poster').catch(axiosErrorHandler);

  return data;
};
