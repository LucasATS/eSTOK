import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import RoutesEnum from '../modules/_shared/constants/Routes.enum';
import Home from '../modules/home';
import ListProduct from '../modules/product/pages';
import { CreateReport } from '../modules/report/pages';
import ListSale from '../modules/sale/pages';
import { ListStock } from '../modules/stock/pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.HOME} element={<Home />} />
      <Route path={RoutesEnum.LIST_PRODUCT} element={<ListProduct />} />
      <Route path={RoutesEnum.LIST_SALE} element={<ListSale />} />
      <Route path={RoutesEnum.LIST_STOCK} element={<ListStock />} />
      <Route path={RoutesEnum.LIST_REPORT} element={<CreateReport />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
