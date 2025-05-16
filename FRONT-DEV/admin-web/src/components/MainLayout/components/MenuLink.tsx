import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, icon, label, className }) => (
  <NavLink to={to} className={className}>
    {icon}
    {label}
  </NavLink>
);

export default MenuLink;
