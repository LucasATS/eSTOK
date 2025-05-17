import React from 'react';
import { useAuth } from '../../modules/auth/contexts/AuthProvider';
import Header from './components/Header';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className="flex md:flex-row flex-col min-h-screen w-full h-full">
      {user && <Header />}
      <main className="flex-1 flex-col w-full bg-neutral-200">{children}</main>
    </div>
  );
};

export default MainLayout;
