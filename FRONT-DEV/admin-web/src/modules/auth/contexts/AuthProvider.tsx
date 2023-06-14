import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { LOCAL_KEY_TOKEN, LOCAL_KEY_USER } from '../../_shared/constants/LocalStorage.constants';
import api from '../../_shared/services/api';
import authService from '../services/auth.service';

export interface User {
  login: string;
  senha: string;
}

export interface LoginCredentials {
  login: string;
  senha: string;
}

export type AuthContextData = {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(login: LoginCredentials): Promise<void>;
  signOut(): void;
  setUser(user: User): void;
};

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { storedUser, storedToken } = getAuthItemsFromLocalStorage();

    function loadStorageData() {
      if (storedUser && storedToken) {
        const parsedUser: User = JSON.parse(storedUser);
        const parsedToken: string = JSON.parse(storedToken);

        setDefaultHeaderToken(parsedToken);
        setUser(parsedUser);
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = async (login: LoginCredentials) => {
    const response = await authService.signIn(login);
    const { status } = response;
    const { token } = status;

    setUser(response.status.user);
    saveTokenInLocalStorage(token);
    setDefaultHeaderToken(token);
  };

  const signOut = () => {
    setUser(null);
    cleanAuthItemsFromLocalStorage();
  };

  const cleanAuthItemsFromLocalStorage = () => {
    localStorage.removeItem(LOCAL_KEY_USER);
    localStorage.removeItem(LOCAL_KEY_TOKEN);
  };

  useEffect(() => {
    if (!user) return;
    localStorage.setItem(LOCAL_KEY_USER, JSON.stringify(user));
  }, [user]);

  const setDefaultHeaderToken = (token: string) => {
    api.defaults.headers.common['authorization'] = `Bearer ${token}`;

    api.interceptors.response.use(
      (response: any) => response,
      (error: any) => {
        if (error?.response?.status === 401) {
          toast.error('Login expirado');
          signOut();
        }
        return Promise.reject(error);
      }
    );
  };

  const saveTokenInLocalStorage = (token: string) => {
    localStorage.setItem(LOCAL_KEY_TOKEN, JSON.stringify(token));
  };

  const getAuthItemsFromLocalStorage = () => {
    const storedUser = localStorage.getItem(LOCAL_KEY_USER);
    const storedToken = localStorage.getItem(LOCAL_KEY_TOKEN);

    return { storedUser, storedToken };
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, loading, signOut, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
