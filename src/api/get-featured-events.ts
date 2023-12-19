import { FeaturedEventResponse } from '../components/home-page/events/featured-events/types';
import { api } from './axios';
import { axiosErrorHandler } from './axios-error-handler';

export const getFeaturedEvents = async () => {
  const data = api.get<FeaturedEventResponse>('webapp-featured-events?populate=image').catch(axiosErrorHandler);

  return data;
};
