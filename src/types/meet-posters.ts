import { Extension, Format, MetaInfo, MimeTypes } from './common';

export type GetMeetPostersResponse = {
  data: MeetPostersData[];
  meta: MetaInfo;
};

export type MeetPostersData = {
  id: number;
  attributes: {
    heading: string;
    venue: string;
    place: string;
    date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    poster: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: null;
          caption: null;
          width: number;
          height: number;
          formats: {
            small: Format;
            medium: Format;
            thumbnail: Format;
          };
          hash: string;
          ext: Extension;
          mime: MimeTypes;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: 'aws-s3';
          provider_metadata: string | null;
          createdAt: string;
          updatedAt: string;
        };
      }[];
    };
  };
};
