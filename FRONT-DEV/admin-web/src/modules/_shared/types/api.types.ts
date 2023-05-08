export type Paginate<T> = {
  results: T[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  limit: number;
};
