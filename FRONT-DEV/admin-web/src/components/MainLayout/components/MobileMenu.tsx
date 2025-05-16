import {
  ArrowRightEndOnRectangleIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  HomeIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';
import React from 'react';
import { NavLink } from 'react-router-dom';
import RoutesEnum from '../../../modules/_shared/constants/Routes.enum';

interface MobileMenuProps {
  open: boolean;
  toggleOpen: () => void;
  logout: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, logout }) => {
  const iconStyle = 'w-6 h-6 text-white';
  const mobileMenuStyle =
    'text-white font-medium hover:bg-sky-700 cursor-pointer flex w-full py-3 px-4 gap-2 justify-center text-center transition-all ease-in-out rounded';

  if (!open) return null;

  return (
    <div className="md:hidden flex flex-col gap-4 p-4 text-center">
      <NavLink className={mobileMenuStyle} to={RoutesEnum.HOME}>
        <HomeIcon className={iconStyle} /> Home
      </NavLink>
      <NavLink className={mobileMenuStyle} to={RoutesEnum.LIST_PRODUCT}>
        <ShoppingBagIcon className={iconStyle} /> Produto
      </NavLink>
      <NavLink className={mobileMenuStyle} to={RoutesEnum.LIST_STOCK}>
        <ChartBarIcon className={iconStyle} /> Estoque
      </NavLink>
      <NavLink className={mobileMenuStyle} to={RoutesEnum.LIST_SALE}>
        <DocumentTextIcon className={iconStyle} /> Venda
      </NavLink>
      <NavLink className={mobileMenuStyle} to={RoutesEnum.LIST_REPORT}>
        <BuildingOfficeIcon className={iconStyle} /> Relatório
      </NavLink>
      <button onClick={logout} className={mobileMenuStyle}>
        <ArrowRightEndOnRectangleIcon className={iconStyle} /> Sair
      </button>
    </div>
  );
};

export default MobileMenu;
