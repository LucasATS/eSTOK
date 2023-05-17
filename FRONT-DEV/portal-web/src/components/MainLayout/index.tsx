import { useState } from 'react';
import { Card } from '../Card';

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <div className="flex flex-col w-full h-screen">
        <div className="w-full shadow-lg bg-primary">
          <div className="xl:max-w-6xl mx-auto">
            <div className="flex flex-row xl:px-0 md:px-10 px-6 py-2 items-center flex-wrap">
              <div className="grow flex flex-row gap-2 items-center">
                <div className="w-28 py-2">
                  <img src="./public/logo192.png" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow w-full xl:max-w-6xl mx-auto xl:px-0 bg-white lg:mt-12 rounded-sm lg:max-w-5xl px-4">
          {children}
        </div>
      </div>
      <div className="bg-secondary w-auto p-4">
        <Card />
      </div>
    </div>
  );
};
