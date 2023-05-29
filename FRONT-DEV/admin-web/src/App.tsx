import AuthProvider from './modules/auth/contexts/prodiver';
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
