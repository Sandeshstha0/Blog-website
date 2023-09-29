export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}
export interface ICategoryAttribute {
  Title: string;
  Slug: string;
}

export interface IPagination {
  page: number;
  pageSize: number;
}
export interface IResourceMeta {
  pagination: IPagination;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}
