import { Home, Logout, ShoppingBag } from 'heroicons-react';
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import RoutesURL from '../../modules/_shared/constants/RoutesURL.enum';
import { useAuth } from '../../modules/auth/contexts/AuthProvider';
import Login from '../../modules/auth/pages/Login';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const activeMenuStyle = 'border-l-4 border-sky-500 bg-sky-600 ';

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
        <div className="flex md:flex-col flex-row w-full h-screen">
          <div
            className={`text-white w-full md:w-60 lg:w-80 md:h-full ${
              open ? 'bg-white text-black' : 'bg-sky-600 shadow-lg md:fixed z-50 md:z-0'
            }`}
          >
            <div className="flex flex-row md:flex-col p-2 md:p-6 items-center md:items-start">
              <div className="grow ml-1 md:ml-0 md:mb-24">
                <div className="w-32 p-2">
                  <Link to={RoutesURL.HOME}>
                    <img
                      src={open ? '/assets/e-stok.svg' : '/assets/e-stok.svg'}
                      className="w-full h-auto"
                      alt="eStok Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="md:hidden visible text-right place-content-end px-3">
                <div onClick={toggleOpen}>
                  {open ? (
                    <svg
                      className="h-8 w-8 text-black"
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
                      <line x1="3" y1="12" x2="21" y2="12" /> <line x1="3" y1="6" x2="21" y2="6" />{' '}
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="md:flex flex-col hidden md:w-full bg-sky-700 ">
                <div className="flex flex-col">
                  <NavLink to={RoutesURL.HOME} className={activeMenuStyle}>
                    <div className="flex px-4 py-1 gap-2 items-center cursor-pointer w-full font-medium text-base hover:bg-sky-700 hover:rounded-r-[20px] transition-all ease-in-out rounded-sm">
                      <Home className="w-6 h-6 text-white" />
                      Home
                    </div>
                  </NavLink>
                </div>
                <div className="flex flex-col">
                  <NavLink to={RoutesURL.LIST_PRODUCT} className={activeMenuStyle}>
                    <div className="px-4 py-3 cursor-pointer w-full font-medium text-base hover:text-teal-400 hover:bg-gray-100 hover:bg-opacity-10 transition-all ease-in-out ">
                      <ShoppingBag className="w-6 h-6 text-white" />
                      Produto
                    </div>
                  </NavLink>
                </div>

                <div className="flex flex-col">
                  <NavLink to={RoutesURL.LIST_STOCK} className={activeMenuStyle}>
                    <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:text-teal-400 hover:bg-gray-100 hover:bg-opacity-10 transition-all ease-in-out rounded-sm">
                      Estoque
                    </div>
                  </NavLink>
                </div>

                <div className="flex flex-col">
                  <NavLink to={RoutesURL.LIST_SALE} className={activeMenuStyle}>
                    <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:text-teal-400 hover:bg-gray-100 hover:bg-opacity-10 transition-all ease-in-out rounded-sm">
                      Venda
                    </div>
                  </NavLink>
                </div>

                <div className="flex flex-col">
                  <NavLink to={RoutesURL.LIST_REPORT} className={activeMenuStyle}>
                    <div className="px-4 py-2 cursor-pointer w-full font-medium text-base hover:text-teal-400 hover:bg-gray-100 hover:bg-opacity-10 transition-all ease-in-out rounded-sm">
                      Relatório
                    </div>
                  </NavLink>
                </div>

                <div
                  className="flex items-center border-red-500 text-red-500 border-2 py-1 px-3 rounded gap-2 cursor-pointer"
                  onClick={logout}
                >
                  <span>Sair</span>
                  <Logout
                    className="alt='Sair'flex justify-end  transition-all ease-in-out w-7 rounded"
                    name="Sair"
                  />
                </div>
              </div>
            </div>

            <ul
              className={`flex flex-col bg-white text-black gap-4 p-4 text-center ${
                open ? '' : 'hidden'
              }`}
            >
              <li
                className="cursor-pointer hover:bg-sky-100 hover:text-teal-400 hover:font-semibold transition-all ease-in-out w-full py-3 rounded"
                onClick={() => navigate(RoutesURL.HOME)}
              >
                Inicio
              </li>
              <li
                className="cursor-pointer hover:bg-sky-100 hover:text-teal-400 hover:font-semibold transition-all ease-in-out w-full py-3 rounded"
                onClick={() => navigate(RoutesURL.LIST_PRODUCT)}
              >
                Produto
              </li>
              <li
                className="cursor-pointer hover:bg-sky-100 hover:text-teal-400 hover:font-semibold transition-all ease-in-out w-full py-3 rounded"
                onClick={() => navigate(RoutesURL.LIST_STOCK)}
              >
                Estoque
              </li>

              <li
                className="cursor-pointer hover:bg-sky-100 hover:text-teal-400 hover:font-semibold transition-all ease-in-out w-full py-3 rounded"
                onClick={() => navigate(RoutesURL.LIST_SALE)}
              >
                Venda
              </li>

              <li
                className="cursor-pointer hover:bg-sky-100 hover:text-teal-400 hover:font-semibold transition-all ease-in-out w-full py-3 rounded"
                onClick={() => navigate(RoutesURL.LIST_REPORT)}
              >
                Relatório
              </li>

              <li
                className="cursor-pointer text-red-500 border-2 border-red-500 transition-all ease-in-out w-full py-3 rounded"
                onClick={logout}
              >
                Sair
              </li>
            </ul>
          </div>
          <div className="flex flex-col bg-gray-100 w-full h-full lg:ml-80 md:ml-60 overflow-y-auto">
            <div className="grow border-2 border-gray-300 bg-white rounded-sm mx-3 sm:mt-0 mt-4 py-4 px-5">
              {children}
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen">
          {/* <div
            className={`w-full shadow-lg text-white
              ${open ? 'bg-white text-black' : 'bg-sky-600 shadow-lg'}`}
          >
            <div className="xl:max-w-6xl mx-auto">
              <div className="flex flex-row xl:px-0 md:px-10 px-6 py-2 items-center flex-wrap">
                <div className="grow flex flex-row gap-2 items-center">
                  <Link to="/">
                    <div className="w-28 py-2">
                      <img
                        src={open ? '/assets/estok.svg' : '/assets/estok.svg'}
                        className="w-full h-auto"
                        alt="eStok Logo"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          <Login />
          {/* <div className="grow w-full xl:max-w-6xl mx-auto xl:px-0 md:px-10 px-4 py-10">
            {children}
          </div> */}
        </div>
      )}
    </>
  );
};

export default MainLayout;
