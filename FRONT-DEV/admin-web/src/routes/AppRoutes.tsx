import { HashRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import RoutesURL from '../modules/_shared/constants/Routes.enum';

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route index path={RoutesURL.HOME} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default AppRoutes;
