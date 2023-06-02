import api from '../../_shared/services/api';
import { Result, ResultLogin } from '../../_shared/types/api.types';
import { LoginCredentials } from '../contexts/AuthProvider';

class AuthService {
  public signIn = async (login: LoginCredentials): Promise<Result<ResultLogin>> => {
    const response = await api.post('/admin/auth/login', login);
    return response.data;
  };
}

export default new AuthService();

// submit({ login: 'Gaikko@email.com', senha: 'enh' }, 'POST', '/admin/auth/login')
//   .then((data) => data.json())
//   .then((resp) => console.log(resp));
