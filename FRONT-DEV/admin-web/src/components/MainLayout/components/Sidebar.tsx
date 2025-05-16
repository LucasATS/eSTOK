import {
  ArrowRightEndOnRectangleIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  HomeIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/e-stok.svg';
import RoutesEnum from '../../../modules/_shared/constants/Routes.enum';
import MenuLink from './MenuLink';

interface SidebarProps {
  open: boolean;
  toggleOpen: () => void;
  logout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleOpen, logout }) => {
  const iconStyle = 'w-6 h-6 text-white';
  const menuStyle =
    'text-white font-medium text-base hover:bg-sky-700 cursor-pointer flex px-4 py-1 gap-2 items-center hover:rounded-r-[20px] transition-all ease-in-out rounded-sm';

  return (
    <div className="flex flex-col p-4 md:p-0 items-center md:items-start bg-sky-600">
      <div className="flex flex-row md:flex-col w-full">
        <div className="flex md:flex-col flex-row w-full gap-0 py-3 justify-between md:gap-14 md:py-10">
          <div className="flex justify-center items-center mx-3 md:mx-8">
            <Link to={RoutesEnum.HOME}>
              <img src={logo} className="w-full h-auto" alt="eStok Logo" />
            </Link>
          </div>
          <div className="md:hidden visible text-right px-3">
            <div onClick={toggleOpen} onKeyDown={toggleOpen} role="button" tabIndex={0}>
              {open ? (
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </div>
          </div>
          <nav className="md:flex hidden ml-2 flex-col gap-4 md:w-full items-start -mx-4">
            <MenuLink
              to={RoutesEnum.HOME}
              icon={<HomeIcon className={iconStyle} />}
              label="Home"
              className={menuStyle}
            />
            <MenuLink
              to={RoutesEnum.LIST_PRODUCT}
              icon={<ShoppingBagIcon className={iconStyle} />}
              label="Produto"
              className={menuStyle}
            />
            <MenuLink
              to={RoutesEnum.LIST_STOCK}
              icon={<ChartBarIcon className={iconStyle} />}
              label="Estoque"
              className={menuStyle}
            />
            <MenuLink
              to={RoutesEnum.LIST_SALE}
              icon={<DocumentTextIcon className={iconStyle} />}
              label="Venda"
              className={menuStyle}
            />
            <MenuLink
              to={RoutesEnum.LIST_REPORT}
              icon={<BuildingOfficeIcon className={iconStyle} />}
              label="Relatório"
              className={menuStyle}
            />
            <span style={{ width: '180px' }} className="border-t-[1px]" />
            <div
              className={`${menuStyle} flex-row ml-1`}
              onClick={logout}
              onKeyDown={logout}
              role="button"
              tabIndex={0}
            >
              <ArrowRightEndOnRectangleIcon className={iconStyle} />
              Sair
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
