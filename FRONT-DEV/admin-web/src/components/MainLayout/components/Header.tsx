import {
  ArrowRightEndOnRectangleIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  HomeIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoutesEnum from '../../../modules/_shared/constants/Routes.enum';
import { useAuth } from '../../../modules/auth/contexts/AuthProvider';
import MobileMenu from './MobileMenu';
import Sidebar from './Sidebar';

const Header: React.FC = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const iconStyle = 'w-6 h-6 text-white';

  const logout = () => {
    signOut();
    navigate(RoutesEnum.LOGIN);
  };

  const routesMenu = [
    {
      label: 'Dashboard',
      icon: <HomeIcon className={iconStyle} />,
      to: RoutesEnum.HOME
    },
    {
      label: 'Produto',
      icon: <ShoppingBagIcon className={iconStyle} />,
      to: RoutesEnum.LIST_PRODUCT
    },
    {
      label: 'Estoque',
      icon: <ChartBarIcon className={iconStyle} />,
      to: RoutesEnum.LIST_STOCK
    },
    {
      label: 'Venda',
      icon: <DocumentTextIcon className={iconStyle} />,
      to: RoutesEnum.LIST_SALE
    },
    {
      label: 'Relatório',
      icon: <BuildingOfficeIcon className={iconStyle} />,
      to: RoutesEnum.LIST_REPORT
    },
    {
      label: 'Sair',
      icon: <ArrowRightEndOnRectangleIcon className={iconStyle} />,
      onClick: logout,
      isLast: true
    }
  ];

  return (
    <div className="p-4 md:p-0 bg-sky-600 text-white">
      <Sidebar routesMenu={routesMenu} />
      <MobileMenu routesMenu={routesMenu} />
    </div>
  );
};

export default Header;
