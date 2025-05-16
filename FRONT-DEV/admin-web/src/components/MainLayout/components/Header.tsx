import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoutesEnum from '../../../modules/_shared/constants/Routes.enum';
import { useAuth } from '../../../modules/auth/contexts/AuthProvider';
import MobileMenu from './MobileMenu';
import Sidebar from './Sidebar';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const toggleOpen = () => setOpen((prev) => !prev);

  const logout = () => {
    signOut();
    navigate(RoutesEnum.LOGIN);
  };

  return (
    <>
      <Sidebar open={open} toggleOpen={toggleOpen} logout={logout} />
      <MobileMenu open={open} toggleOpen={toggleOpen} logout={logout} />
    </>
  );
};

export default Header;
