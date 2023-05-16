import { Archive, ChartBar, DocumentText, Home, Logout, OfficeBuilding } from 'heroicons-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RoutesURL from '../../modules/_shared/constants/RoutesURL.enum';
import iconApi from '../../modules/_shared/services/iconApi';
import { useAuth } from '../../modules/auth/contexts/AuthProvider';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [registrationPage, setRegistrationPage] = useState(false);
  const { signOut } = useAuth();
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
        <div className="text-white w-full md:w-56 lg:w-72 md:h-full bg-sky-600 rounded-br-[40px] shadow-lg md:fixed z-50 md:z-0">
          <div className="flex flex-row md:flex-col items-center md:items-start">
            <div className="md:flex flex-col hidden md:w-full mt-14 gap-7">
              <div className="flex justify-center">
                <img src={iconApi + 'e-stok.svg'} alt="logo" />
              </div>
              <div className="flex flex-col mr-10">
                <Link to={RoutesURL.HOME}>
                  <div className="px-4 py-2 flex gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                    <Home className="w-6 h-6" />
                    Home
                  </div>
                </Link>

                <Link to={RoutesURL.LIST_PRODUCT}>
                  <div className="px-4 py-2 flex gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                    <Archive className="w-6 h-6" />
                    Produto
                  </div>
                </Link>

                <Link to={RoutesURL.LIST_STOCK}>
                  <div className="px-4 py-2 flex gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                    <ChartBar className="w-6 h-6" />
                    Estoque
                  </div>
                </Link>

                <Link to={RoutesURL.LIST_SALE}>
                  <div className="px-4 py-2 flex gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                    <DocumentText className="w-6 h-6" />
                    Venda
                  </div>
                </Link>

                <Link to={RoutesURL.LIST_PRODUCT}>
                  <div className="px-4 py-2 flex gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                    <OfficeBuilding className="w-6 h-6" />
                    Relatório
                  </div>
                </Link>
              </div>

              <span className="border-t-[1px] w-full"></span>

              <div className="flex flex-col mr-10">
                <div
                  className="px-4 py-2 flex gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm"
                  onClick={logout}
                >
                  <Logout />
                  Sair
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-neutral-200 overflow-y-auto">
          <div className="flex flex-col lg:ml-72 md:ml-56 h-screen">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
