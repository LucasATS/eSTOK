import { createContext, useContext, useState } from 'react';
import AuthService from '../services/AuthService';

export interface User {
  login: string;
}

export interface LoginCredentials {
  login: string;
  senha: string;
}

export type AuthContextData = {
  signed: boolean;
  user: User | null;
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

  const signIn = async (login: LoginCredentials) => {
    const response = await AuthService.signIn(login);
    console.log('signIn');
    const { status } = response;

    setUser(status);
  };

  const signOut = async () => {
    const response = await AuthService.signOut();
    return response;
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
