import AuthProvider from './modules/auth/contexts/AuthProvider';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <AuthProvider>
      {/* <Routes /> */}
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
