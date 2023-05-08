// import { UserCircle } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RoutesURL from '../../modules/_shared/constants/Routes.enum';
import { useAuth } from '../../modules/auth/contexts/AuthProvider';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [registrationPage, setRegistrationPage] = useState(false);
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const getPathName = () => {
    if (pathname === RoutesURL.HOME) {
      setRegistrationPage(true);
    } else {
      setRegistrationPage(false);
    }
  };

  const logout = () => {
    signOut();
    navigate(RoutesURL.LOGIN);
    console.log('SAI');
  };

  useEffect(() => {
    getPathName();
  }, [pathname]);

  return (
    <>
      <div
        className={`flex flex-col w-full ${
          registrationPage ? 'max-h-screen h-auto lg:bg-default' : 'h-screen'
        } `}
      >
        <div className="text-white w-full md:w-60 lg:w-80 md:h-full bg-sky-600 shadow-lg md:fixed z-50 md:z-0">
          <div className="flex flex-row md:flex-col items-center md:items-start">
            <div className="md:flex flex-col hidden md:w-full mt-14 gap-7">
              <div className="flex justify-center">
                <img src={'https://e-stok.onrender.com/static/SVG/e-stok.svg'} alt="logo" />
              </div>
              <div className="flex justify-center">
                <img src={'https://e-stok.onrender.com/static/SVG/mask-group.svg'} alt="logo" />
              </div>
              <div className="flex items-center justify-center">
                <span className="capitalize font-medium">
                  {/* {user?.name.split(' ').shift()?.toLocaleLowerCase()} */} Leonardo vieira
                </span>
              </div>
              <div className="flex flex-col mr-10">
                <Link to={RoutesURL.HOME}>
                  <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                    Home
                  </div>
                </Link>

                <Link to={RoutesURL.PRODUTO}>
                  <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                    Produto
                  </div>
                </Link>

                {/* <Link to={RoutesURL.HOME}>
                <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                  Estoque
                </div>
              </Link> */}

                {/* <Link to={RoutesURL.HOME}>
                <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                  Venda
                </div>
              </Link> */}

                {/* <Link to={RoutesURL.HOME}>
                <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                  Relatório
                </div>
              </Link> */}
              </div>

              <span className="border-t-[1px] w-full"></span>
              {/* <div className="flex flex-col mr-10" onClick={logout}>
                // <LogoutIcon />
                <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                  Sair
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:ml-80 md:ml-60 overflow-y-auto">
          <Header />
          <div className="flex flex-col bg-neutral-100 h-screen">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
