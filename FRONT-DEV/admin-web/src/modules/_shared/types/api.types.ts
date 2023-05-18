import { User } from '../../auth/contexts/AuthProvider';

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
  data: T;
  message: string;
  success: boolean;
  errors: Report[];
  statusCode?: string;
}

export interface ResultLogin {
  user: User;
  token: string;
}
