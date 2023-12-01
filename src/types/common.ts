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
