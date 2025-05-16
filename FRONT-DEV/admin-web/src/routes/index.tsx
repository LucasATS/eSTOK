import Loading from '../components/Loading';
import MainLayout from '../components/MainLayout';
import { useLoading } from '../modules/_shared/contexts/LoadingProvider';
import { useAuth } from '../modules/auth/contexts/AuthProvider';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

const Routes: React.FC = () => {
  const { signed, isAuthLoading } = useAuth();
  const { loading } = useLoading();

  if (isAuthLoading) {
    return <Loading fullScreen />;
  }

  return (
    <MainLayout>
      {loading && <Loading fullScreen />}
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </MainLayout>
  );
};

export default Routes;
