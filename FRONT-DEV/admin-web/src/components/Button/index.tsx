import React from 'react';

interface Props {
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
  variant?: 'primary' | 'secondary' | 'default' | 'clean' | 'error';
  children?: React.ReactNode;
  styles?: string;
}

const Button: React.FC<Props> = ({ children, onClick, styles, type, variant = 'default' }) => {
  return (
    <button
      className={`${variant} transition duration-300 hover:bg-opacity-90 font-medium rounded text-base px-4 py-1 text-center block ${
        styles ? styles : null
      }`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
