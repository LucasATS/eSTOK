import { createContext, useContext, useState } from 'react';

export interface User {
  name: string;
  email: string;
}

export interface LoginCredentials {
  email: string;
  senha: string;
}

export type AuthContextData = {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(login: LoginCredentials): Promise<void>;
  signOut(): void;
};

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signIn = async (login: LoginCredentials) => {
    setUser({ name: 'Bárbara', email: 'teste@teste.com' });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
