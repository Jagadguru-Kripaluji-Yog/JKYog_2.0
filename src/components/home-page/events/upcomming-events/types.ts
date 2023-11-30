import { MetaInfo } from '../featured-events/types';

export type UpcommingEventsResponse = {
  data: UpcommingEventData[];
  meta: MetaInfo;
};

export type UpcommingEventData = {
  id: number;
  attributes: {
    tags: string;
    heading: string;
    place: string;
    time: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: {
        id: number;
        attributes: ImageAttributes;
      }[];
    };
  };
};

export type ImageAttributes = {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
};
