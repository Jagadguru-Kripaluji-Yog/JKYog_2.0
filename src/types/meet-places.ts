import { MetaInfo } from './common';

export type GetMeetPlacesResponse = {
  data: GetMeetPlacesData[];
  meta: MetaInfo;
};

export type GetMeetPlacesData = {
  id: number;
  attributes: {
    heading: string;
    place: string;
    date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};
