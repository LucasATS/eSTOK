/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface Props {
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
  variant?: 'primary' | 'secondary' | 'default' | 'cancel' | 'clean' | 'error';
  buttonText?: string;
  children?: React.ReactNode;
  styles?: string;
  className?: string;
  style?: any;
}

const Button: React.FC<Props> = ({
  children,
  buttonText,
  onClick,
  styles,
  type,
  variant = 'default',
  className,
  style
}) => {
  return (
    <button
      style={style}
      className={
        `${variant} transition rounded-[30px] duration-300 w-50 hover:bg-opacity-90 font-medium rounded text-base px-4 py-1 text-center block ${
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
