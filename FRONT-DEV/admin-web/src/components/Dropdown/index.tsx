import { Menu } from '@headlessui/react';
import React, { ReactNode } from 'react';
import { Action } from '../Table';

type Props = {
  menuItens?: Action[];
  onClick: (value: any) => void;
  size: 'default' | 'medium';
  children?: ReactNode;
};

const Dropdown: React.FC<Props> = ({ children, menuItens, onClick, size }) => {
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white">
        {children}
      </Menu.Button>
      <div className="relative">
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-28 bg-white rounded border shadow-md z-20">
          {menuItens &&
            menuItens.map((menuItem, index) => (
              <div key={index} onClick={() => onClick(menuItem.onClick)}>
                <Menu.Item>
                  <span className="block px-2 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 cursor-pointer">
                    {menuItem.label}
                  </span>
                </Menu.Item>
              </div>
            ))}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default Dropdown;
