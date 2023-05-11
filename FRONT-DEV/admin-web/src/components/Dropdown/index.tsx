import { Menu } from '@headlessui/react';
import { ReactNode } from 'react';
import { Action } from '../Table';

type Props = {
  menuItens?: Action[];
  variant?: 'primary' | 'secondary' | 'default' | 'cancel' | 'clean' | 'error';
  text?: string;
  children?: ReactNode;
};

const Dropdown = ({ variant, text, menuItens, children }: Props) => {
  return (
    <Menu as="div" className="relative inline-block w-[136px]">
      <Menu.Button
        className={`${variant} relative cursor-pointer w-full list-item text-base font-medium px-4 py-1 rounded hover:text-sky-600 hover:bg-primary hover:bg-opacity-20 transition-all ease-in-out`}
      >
        <div className="flex flex-row items-center justify-center gap-2 w-full">
          {text || children}
        </div>
      </Menu.Button>
      <div className="relative">
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full bg-white shadow-xl z-20 rounded border-[1px] border-primary">
          {menuItens &&
            menuItens.map((menuItem, index) => (
              <Menu.Item
                as="span"
                key={index}
                onClick={menuItem.onClick}
                className={`flex justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-primary
                  cursor-pointer hover:bg-primary hover:bg-opacity-80 hover:text-white border-b last:border-b-0
              `}
              >
                {menuItem.label}
              </Menu.Item>
            ))}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default Dropdown;
