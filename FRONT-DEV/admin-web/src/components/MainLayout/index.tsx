import { ChartBar, DocumentText, Home, Logout, OfficeBuilding, ShoppingBag } from 'heroicons-react';
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import logo from '../../assets/e-stok.svg';
import RoutesURL from '../../modules/_shared/constants/RoutesURL.enum';
import { useAuth } from '../../modules/auth/contexts/AuthProvider';
import { iconApi } from '../../modules/_shared/services/iconApi';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { signOut, signed, user } = useAuth();
  const navigate = useNavigate();
  const activeMenuStyle =
    'flex px-4 py-1 gap-2 items-center cursor-pointer font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm';
  const activeMobileMenuStyle =
    'flex cursor-pointer w-full py-3 px-4 gap-2 justify-center text-center font-medium hover:bg-sky-700 transition-all ease-in-out rounded';
  const iconStyle = 'w-6 h-6 text-white';

  const toggleOpen = () => {
    setOpen((old) => !old);
  };

  const logout = () => {
    signOut();
    navigate(RoutesURL.LOGIN);
  };

  return (
    <>
      {user ? (
        <div
          className={`flex md:flex-row flex-col w-full h-screen text-white ${
            open ? 'justify-between' : 'shadow-lg md:fixed z-50 md:z-0'
          }`}
        >
          <div className="flex flex-col p-4 md:p-0 items-center md:items-start bg-sky-600">
            <div className="flex flex-row md:flex-col w-full">
              <div className="flex md:flex-col flex-row w-full gap-0 py-3 justify-between md:gap-14 md:py-10">
                <div className="flex justify-center items-center mx-3 md:mx-8">
                  <Link to={RoutesURL.HOME}>
                    <img src={iconApi + 'e-stok.svg'} className="w-full h-auto" alt="eStok Logo" />
                  </Link>
                </div>
                <div className="md:hidden visible text-right place-content-end px-3">
                  <div onClick={toggleOpen} onKeyDown={toggleOpen} role="button" tabIndex={0}>
                    {open ? (
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className={`h-8 w-8 text-white`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="3" y1="12" x2="21" y2="12" />{' '}
                        <line x1="3" y1="6" x2="21" y2="6" />{' '}
                        <line x1="3" y1="18" x2="21" y2="18" />
                      </svg>
                    )}
                  </div>
                </div>
                <div
                  role="navigation"
                  className="md:flex hidden ml-2 flex-col gap-4 md:w-full items-start -mx-4"
                >
                  <NavLink to={RoutesURL.HOME} className={activeMenuStyle}>
                    <Home className={iconStyle} />
                    Home
                  </NavLink>
                  <NavLink to={RoutesURL.LIST_PRODUCT} className={activeMenuStyle}>
                    <ShoppingBag className={iconStyle} />
                    Produto
                  </NavLink>
                  <NavLink to={RoutesURL.LIST_STOCK} className={activeMenuStyle}>
                    <ChartBar className={iconStyle} />
                    Estoque
                  </NavLink>
                  <NavLink to={RoutesURL.LIST_SALE} className={activeMenuStyle}>
                    <DocumentText className={iconStyle} />
                    Venda
                  </NavLink>
                  <NavLink to={RoutesURL.LIST_REPORT} className={activeMenuStyle}>
                    <OfficeBuilding className={iconStyle} />
                    Relatório
                  </NavLink>
                  <span style={{ width: '180px' }} className="border-t-[1px]"></span>
                  <div
                    className={`${activeMenuStyle} flex-row ml-1`}
                    onClick={logout}
                    onKeyDown={logout}
                    role="button"
                    tabIndex={0}
                  >
                    <Logout />
                    Sair
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`md:hidden flex flex-col gap-4 p-4 text-center ${open ? '' : 'hidden'}`}
            >
              <div
                className={activeMobileMenuStyle}
                onClick={() => navigate(RoutesURL.HOME)}
                onKeyDown={() => navigate(RoutesURL.HOME)}
                role="button"
                tabIndex={0}
              >
                <Home className={iconStyle} />
                Home
              </div>

              <div
                className={activeMobileMenuStyle}
                onClick={() => navigate(RoutesURL.LIST_PRODUCT)}
                onKeyDown={() => navigate(RoutesURL.LIST_PRODUCT)}
                role="button"
                tabIndex={0}
              >
                <ShoppingBag className={iconStyle} />
                Produto
              </div>

              <div
                className={activeMobileMenuStyle}
                onClick={() => navigate(RoutesURL.LIST_STOCK)}
                onKeyDown={() => navigate(RoutesURL.LIST_STOCK)}
                role="button"
                tabIndex={0}
              >
                <ChartBar className={iconStyle} />
                Estoque
              </div>

              <div
                className={activeMobileMenuStyle}
                onClick={() => navigate(RoutesURL.LIST_SALE)}
                onKeyDown={() => navigate(RoutesURL.LIST_PRODUCT)}
                role="button"
                tabIndex={0}
              >
                <DocumentText className={iconStyle} />
                Venda
              </div>

              <div
                className={activeMobileMenuStyle}
                onClick={() => navigate(RoutesURL.LIST_REPORT)}
                onKeyDown={() => navigate(RoutesURL.LIST_REPORT)}
                role="button"
                tabIndex={0}
              >
                <OfficeBuilding className={iconStyle} />
                Relatório
              </div>

              <div
                className={activeMobileMenuStyle}
                onClick={logout}
                onKeyDown={logout}
                role="button"
                tabIndex={0}
              >
                <Logout className={iconStyle} />
                Sair
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-screen bg-neutral-200 overflow-y-auto">
            {children}
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full h-screen bg-neutral-200 overflow-y-auto">
          {children}
        </div>
      )}
    </>
  );
};

export default MainLayout;
