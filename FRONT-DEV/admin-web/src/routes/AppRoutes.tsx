import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import RoutesURL from '../modules/_shared/constants/RoutesURL.enum';
import Home from '../modules/home';
import ListProduct from '../modules/product/pages';
import { CreateReport } from '../modules/report/pages';
import ListSale from '../modules/sale/pages';
import { ListStock } from '../modules/stock/pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesURL.HOME} element={<Home />} />
      <Route path={RoutesURL.LIST_PRODUCT} element={<ListProduct />} />
      <Route path={RoutesURL.LIST_SALE} element={<ListSale />} />
      <Route path={RoutesURL.LIST_STOCK} element={<ListStock />} />
      <Route path={RoutesURL.LIST_REPORT} element={<CreateReport />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
