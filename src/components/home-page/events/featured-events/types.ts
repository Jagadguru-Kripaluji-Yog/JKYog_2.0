export type FeaturedEventResponse = {
  data: FeaturedEventData[];
  meta: MetaInfo;
};

export type MetaInfo = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type FeaturedEventData = {
  id: number;
  attributes: {
    heading: string;
    date: string;
    place: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            small?: {
              ext: '.png' | '.jpg';
              url: string;
              hash: string;
              mime: 'image/png' | 'image/jpg';
              name: string;
              path: string | null;
              size: number;
              width: number;
              height: number;
            };
            thumbnail: {
              ext: '.png' | '.jpg';
              url: string;
              hash: string;
              mime: 'image/png' | 'image/jpg';
              name: string;
              path: null;
              size: number;
              width: number;
              height: number;
            };
          };
          updatedAt: string;
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: string | null;
          createdAt: string;
        };
      }[];
    };
  };
};
