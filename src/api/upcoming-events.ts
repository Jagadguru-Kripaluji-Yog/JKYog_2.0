import { UpcomingEventsResponse } from '../types/upcoming-events';
import { api } from './axios';
import { axiosErrorHandler } from './axios-error-handler';

export const getUpcomingEvents = () => {
  const data = api.get<UpcomingEventsResponse>('web-app-upcoming-events?populate=image').catch(axiosErrorHandler);

  return data;
};
