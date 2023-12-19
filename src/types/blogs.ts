import { Extension, Format, MetaInfo, MimeTypes } from './common';

export interface ApiResponse<T> {
  data: T[];
  meta: MetaInfo;
}

export interface GetBlogsResponse extends ApiResponse<BlogData> {
  data: BlogData[];
  meta: MetaInfo;
}

type Poster = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: null;
      caption: null;
      width: number;
      height: number;
      formats: {
        small?: Format;
        medium?: Format;
        thumbnail?: Format;
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

export type BlogData = {
  id: number;
  attributes: {
    heading: string;
    detail: string;
    time: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    poster: Poster;
  };
};
