export interface Report {
  name: string;
  message: string;
}

export type Paginate<T> = {
  results: T[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  limit: number;
};

export interface Result<T> {
  status: T;
  message: string;
  success: boolean;
  errors: Report[];
  statusCode?: string;
}

export interface ResultLogin {
  login: string;
  senha: string;
}
