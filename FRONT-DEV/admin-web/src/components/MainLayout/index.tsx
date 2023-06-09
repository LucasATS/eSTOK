import { ChartBar, DocumentText, Home, Logout, OfficeBuilding, ShoppingBag } from 'heroicons-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/e-stok.svg';
import RoutesURL from '../../modules/_shared/constants/RoutesURL.enum';
import { useAuth } from '../../modules/auth/contexts/AuthProvider';

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
  };

  useEffect(() => {
    getPathName();
  }, [pathname]);

  return (
    <>
      {/* {user ? ( */}
      <div className="flex flex-row justify-between h-screen bg-neutral-200">
        <div className="flex w-auto md:w-56 lg:w-72 text-white bg-sky-600 rounded-br-[40px] shadow-lg justify-center px-4">
          <div className="flex flex-row md:flex-col w-full">
            <div className="md:flex flex-col hidden w-full mt-14 gap-7">
              <div className="flex justify-center items-center">
                <img src={logo} alt="logo" onClick={() => RoutesURL.HOME} />
              </div>
              <div className="flex flex-col gap-4 w-full items-start -mx-4">
                <Link
                  to={RoutesURL.HOME}
                  className="flex px-4 py-1 gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm"
                >
                  <Home className="w-6 h-6 text-white" />
                  Home
                </Link>

                <Link
                  to={RoutesURL.LIST_PRODUCT}
                  className="flex px-4 py-1 gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm"
                >
                  <ShoppingBag className="w-6 h-6 text-white" />
                  Produto
                </Link>

                <Link
                  to={RoutesURL.LIST_STOCK}
                  className="flex px-4 py-1 gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm"
                >
                  <ChartBar className="w-6 h-6" />
                  Estoque
                </Link>

                <Link
                  to={RoutesURL.LIST_SALE}
                  className="flex px-4 py-1 gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm"
                >
                  <DocumentText className="w-6 h-6" />
                  Venda
                </Link>

                <Link
                  to={RoutesURL.LIST_REPORT}
                  className="flex px-4 py-1 gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm"
                >
                  <OfficeBuilding className="w-6 h-6" />
                  Relatório
                </Link>
                <span className="border-t-[1px] w-full"></span>

                <div
                  className="flex px-4 py-1 flex-row gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm"
                  onClick={logout}
                >
                  <Logout />
                  Sair
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-screen bg-neutral-200 overflow-y-auto">
          {children}
        </div>
      </div>
      {/* ) : ( */}
      {/* <div className="flex flex-row justify-between h-screen bg-neutral-200">
          <div className="flex w-auto md:w-56 lg:w-72 text-white bg-sky-600 rounded-br-[40px] shadow-lg justify-center px-4">
            <div className="flex flex-row md:flex-col w-full">
              <div className="md:flex flex-col hidden w-full mt-14 gap-7">
                <div className="flex justify-center items-center">
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-screen bg-neutral-200 overflow-y-auto">
            {children}
          </div>
        </div> */}
      {/* )} */}
    </>
  );
};

export default MainLayout;
