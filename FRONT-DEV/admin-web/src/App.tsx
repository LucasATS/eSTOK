import AuthProvider from './modules/auth/contexts/AuthProvider';
import Routes from './routes';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
