// import { UserCircle } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RoutesURL from '../../modules/_shared/constants/Routes.enum';
import { useAuth } from '../../modules/auth/contexts/AuthProvider';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [registragionPage, setRegistragionPage] = useState(false);
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const getPathName = () => {
    if (pathname === RoutesURL.HOME) {
      setRegistragionPage(true);
    } else {
      setRegistragionPage(false);
    }
  };

  const logout = () => {
    signOut();
    navigate(RoutesURL.LOGIN);
  };

  useEffect(() => {
    getPathName();
  }, [pathname]);

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="text-white w-full md:w-60 lg:w-80 md:h-full bg-sky-600 shadow-lg md:fixed z-50 md:z-0">
        <div className="flex flex-row md:flex-col items-center md:items-start">
          <div className="md:flex flex-col hidden md:w-full mt-14 gap-5">
            <div className="flex justify-center">
              <img src={'/images/e-stok.svg'} alt="logo" />
            </div>
            <div className="flex justify-center">
              <img src={'/images/mask-group.svg'} alt="logo" />
            </div>
            <div className="flex flex-col mb-4">
              <Link to={RoutesURL.HOME}>
                <div className="flex items-center gap-20">
                  {/* <UserCircle className="w-8 h-8 text-gray-500 cursor-default" /> */}
                  <span className="capitalize">
                    {user?.name.split(' ').shift()?.toLocaleLowerCase()}!
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex flex-col mr-10">
              <Link to={RoutesURL.HOME}>
                <div className="px-4 py-3 cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                  Home
                </div>
              </Link>
              {/* </div>
            <div className="flex flex-col"> */}
              <Link to={RoutesURL.HOME}>
                <div className="px-4 py-3 cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out ">
                  Produto
                </div>
              </Link>
              {/* </div>

            <div className="flex flex-col"> */}
              <Link to={RoutesURL.HOME}>
                <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                  Estoque
                </div>
              </Link>
              {/* </div>

            <div className="flex flex-col"> */}
              <Link to={RoutesURL.HOME}>
                <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                  Venda
                </div>
              </Link>
              {/* </div>

            <div className="flex flex-col"> */}
              <Link to={RoutesURL.HOME}>
                <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                  Relatório
                </div>
              </Link>
            </div>

            <span className="border-t-[1px] w-full"></span>
            <div className="flex flex-col">
              <div onClick={logout}>
                {/* <LogoutIcon /> */}
                <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                  Sair
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-neutral-100 w-full h-full lg:ml-80 md:ml-60 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
