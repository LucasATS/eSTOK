// import Loading from '../components/Loading';
import { useAuth } from '../modules/auth/contexts/AuthProvider';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

const Routes = () => {
  const { signed, loading } = useAuth();

  // if (loading) {
  //   return <Loading />;
  // }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
