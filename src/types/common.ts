export type MimeTypes = 'image/png' | 'image/jpg' | 'image/svg';
export type Extension = '.png' | '.jpg' | '.svg';

export type MetaInfo = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type Format = {
  ext: Extension;
  url: string;
  hash: string;
  mime: MimeTypes;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
};
