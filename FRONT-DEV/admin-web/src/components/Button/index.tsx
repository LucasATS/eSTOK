import React, { ReactNode } from 'react';

interface Props {
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
  variant?: 'primary' | 'secondary' | 'default' | 'cancel' | 'clean' | 'error';
  buttonText?: string;
  children?: ReactNode;
  styles?: string;
  className?: string;
}

const Button: React.FC<Props> = ({
  children,
  buttonText,
  onClick,
  styles,
  type,
  variant = 'default',
  className
}) => {
  return (
    <button
      className={
        `${variant} transition duration-300 hover:bg-opacity-90 font-medium rounded text-base px-4 py-1 text-center block ${
          styles ? styles : null
        }` + className
      }
      type={type}
      onClick={onClick}
    >
      {children || buttonText}
    </button>
  );
};

export default Button;
