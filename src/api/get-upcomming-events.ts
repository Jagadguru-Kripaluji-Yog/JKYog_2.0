import { UpcommingEventsResponse } from '../components/home-page/events/upcomming-events/types';
import { api } from './axios';
import { axiosErrorHandler } from './axios-error-handler';

export const getUpcommingEvents = () => {
  const data = api.get<UpcommingEventsResponse>('web-app-upcoming-events?populate=image').catch(axiosErrorHandler);

  return data;
};
