import { GetMeetPlacesResponse } from '../types/meet-places';
import { api } from './axios';
import { axiosErrorHandler } from './axios-error-handler';

export const getMeetPlaces = () => {
  const data = api.get<GetMeetPlacesResponse>('webapp-home-meet-places').catch(axiosErrorHandler);

  return data;
};
