import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/e-stok.svg';
import RoutesEnum from '../../../modules/_shared/constants/Routes.enum';
import MenuLink from './MenuLink';

interface SidebarProps {
  routesMenu: {
    isLast?: boolean;
    to?: string;
    onClick?: () => void;
    icon: React.ReactNode;
    label: string;
    className?: string;
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ routesMenu }) => {
  const menuStyle =
    'text-white font-medium text-base hover:bg-sky-700 cursor-pointer flex px-4 py-1 gap-2 items-center hover:rounded-r-[20px] transition-all ease-in-out rounded-sm';

  return (
    <div className="hidden md:flex flex-col min-h-screen items-center md:items-start">
      <div className="flex md:flex-col flex-row w-full gap-0 py-3 justify-between md:gap-14 md:py-10">
        <div className="flex justify-center items-center mx-3 md:mx-8">
          <Link to={RoutesEnum.HOME}>
            <img src={logo} className="w-full h-auto" alt="eStok Logo" />
          </Link>
        </div>

        <nav className="md:flex hidden ml-0 flex-col gap-4 md:w-full items-start -mx-4">
          {routesMenu.map((route) => (
            <React.Fragment key={route.label}>
              {route.isLast && <span style={{ width: '180px' }} className="border-t-[1px]" />}
              <MenuLink
                to={route.to}
                onClick={route.onClick}
                icon={route.icon}
                label={route.label}
                className={menuStyle}
              />
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
