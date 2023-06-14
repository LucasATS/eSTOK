import api from '../../_shared/services/api';
import { Result, ResultLogin } from '../../_shared/types/api.types';
import { LoginCredentials } from '../contexts/AuthProvider';

class AuthService {
  public signIn = async (login: LoginCredentials): Promise<Result<ResultLogin>> => {
    // função para chamar a rota no backend
    const response = await api.post('/api/admin/auth/login', login);
    return response.data;
  };
  public signOut = async () => {
    const response = await api.get('/api/admin/auth/logout');
    console.log('signOut service');
    return response.data;
  };
}

export default new AuthService();
