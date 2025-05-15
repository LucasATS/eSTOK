import { createContext, useContext, useEffect, useState } from 'react';
import { LOCAL_KEY_TOKEN, LOCAL_KEY_USER } from '../../_shared/constants/LocalStorage.constants';
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
    const { storedUser } = getAuthItemsFromLocalStorage();

    function loadStorageData() {
      if (storedUser) {
        const parsedUser: User = JSON.parse(storedUser);
        setUser(parsedUser);
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = async (loginCredentials: LoginCredentials) => {
    const response = await authService.signIn(loginCredentials);
    const { data } = response;
    const { token } = data;

    const user: User = { login: loginCredentials.login, senha: loginCredentials.senha };
    setUser(user);
    saveAuthItemsInLocalStorage(token, user);
  };

  const signOut = () => {
    setUser(null);
    cleanAuthItemsFromLocalStorage();
  };

  const saveAuthItemsInLocalStorage = (token: string, user: User) => {
    localStorage.setItem(LOCAL_KEY_TOKEN, JSON.stringify(token));
    localStorage.setItem(LOCAL_KEY_USER, JSON.stringify(user));
  };

  const cleanAuthItemsFromLocalStorage = () => {
    localStorage.removeItem(LOCAL_KEY_TOKEN);
    localStorage.removeItem(LOCAL_KEY_USER);
  };

  const getAuthItemsFromLocalStorage = () => {
    const storedUser = localStorage.getItem(LOCAL_KEY_USER);
    return { storedUser };
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, loading, signOut, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
