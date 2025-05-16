import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './modules/_shared/contexts/LoadingProvider';
import AuthProvider from './modules/auth/contexts/AuthProvider';
import Routes from './routes';

const App = () => {
  return (
    <LoadingProvider>
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>
    </LoadingProvider>
  );
};

export default App;
