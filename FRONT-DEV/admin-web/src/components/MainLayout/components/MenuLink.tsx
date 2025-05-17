import React from 'react';
import { Link } from 'react-router-dom';

interface MenuLinkProps {
  to?: string;
  onClick?: () => void;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, onClick, icon, label, className }) => {
  if (to) {
    return (
      <Link to={to} onClick={onClick} className={className}>
        {icon}
        {label}
      </Link>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick?.()}
      className={className}
    >
      {icon}
      {label}
    </div>
  );
};

export default MenuLink;
