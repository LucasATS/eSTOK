import AuthProvider from './modules/auth/contexts/AuthProvider';
import Routes from './routes';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
