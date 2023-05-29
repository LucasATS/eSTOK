import api from '../../_shared/services/api';
import { Result } from '../../_shared/types/api.types';
import { LoginCredentials } from '../contexts/prodiver';

class AuthService {
  public async signIn(login: LoginCredentials): Promise<Result<LoginCredentials>> {
    const response = await api.post('/admin/auth/login', login, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    return response.data;
  }
}

export default new AuthService();

// submit({ login: 'Gaikko@email.com', senha: 'enh' }, 'POST', '/admin/auth/login')
//   .then((data) => data.json())
//   .then((resp) => console.log(resp));

// export async function submit(params: any, Method: any, url = '/') {
//   let body = null;

//   if (Method === 'GET') {
//     url += '?' + new URLSearchParams(params);
//   } else if (Method === 'POST') {
//     body = new FormData();
//     const keys = Object.keys(params);
//     for (const k of keys) body.append(k, params[k]);
//   }
//   const request = {
//     method: Method,
//     mode: 'same-origin',
//     url: '/admin/auth/login',
//     data: formData,
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//   };
//   if (body) request['body'] = new URLSearchParams(body);

//   return fetch(url, request);
// }
