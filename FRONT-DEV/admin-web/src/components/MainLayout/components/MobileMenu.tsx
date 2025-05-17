import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/e-stok.svg';
import RoutesEnum from '../../../modules/_shared/constants/Routes.enum';
import MenuLink from './MenuLink';

interface MobileMenuProps {
  routesMenu: {
    isLast?: boolean;
    to?: string;
    onClick?: () => void;
    icon: React.ReactNode;
    label: string;
    className?: string;
  }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ routesMenu }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const mobileMenuStyle =
    'font-medium focus:bg-sky-700 cursor-pointer flex w-full py-3 px-4 gap-2 justify-center items-center text-center transition-all ease-in-out rounded';

  return (
    <div className="md:hidden flex flex-col gap-2 text-center">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Link to={RoutesEnum.HOME}>
            <img src={logo} className="w-full h-auto" alt="eStok Logo" />
          </Link>
        </div>
        <div className="flex justify-end p-4">
          <div
            onClick={toggleOpen}
            onKeyDown={toggleOpen}
            role="button"
            tabIndex={0}
            className="cursor-pointer"
          >
            {open ? (
              <XMarkIcon className="h-8 w-8 text-white" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-white" />
            )}
          </div>
        </div>
      </div>

      {open && (
        <div className="text-base font-bold flex flex-col gap-2 px-5 py-5 rounded-b-md">
          {routesMenu.map((route) => {
            const handleClick = () => {
              setOpen((prev) => !prev);
              route.onClick?.();
            };
            return (
              <React.Fragment key={route.label}>
                <MenuLink
                  to={route.to}
                  onClick={handleClick}
                  icon={route.icon}
                  label={route.label}
                  className={mobileMenuStyle}
                />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
