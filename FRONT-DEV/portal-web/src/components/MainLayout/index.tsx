import { useState } from 'react';
import logo from '../../assets/e-stok.svg';
import { Cart } from '../../modules/Cart/pages';

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <div className="flex flex-col w-full h-screen">
        <div className="w-full shadow-lg bg-zinc-800">
          <div className="xl:max-w-6xl mx-auto">
            <div className="flex flex-row xl:px-0 md:px-10 px-6 py-2 items-center flex-wrap">
              <div className="grow flex flex-row gap-2 items-center">
                <div className="w-28 py-2">
                  <img src={logo} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow w-full xl:max-w-6xl mx-auto xl:px-0 bg-white lg:mt-12 rounded-sm lg:max-w-5xl px-4">
          {children}
        </div>
      </div>
      <div className="bg-stone-300 w-auto p-4">
        <Cart />
      </div>
    </div>
  );
};
