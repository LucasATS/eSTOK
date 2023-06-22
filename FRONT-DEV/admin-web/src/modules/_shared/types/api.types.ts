import { User } from '../../auth/contexts/AuthProvider';

export interface Report {
  name: string;
  message: string;
}

export type Paginate<T> = {
  length: number;
  map(arg0: (category: any) => { value: any; label: any; status: any }): unknown;
  response: T[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  limit: number;
};

export interface Result<T> {
  Error: any;
  message: string;
  data: T;
  success: boolean;
  errors: Report[];
  statusCode?: string;
}

export interface ResultLogin {
  user: User;
  token: string;
}
