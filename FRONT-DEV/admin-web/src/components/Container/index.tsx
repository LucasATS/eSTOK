import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={`${className} h-screen w-full`}>{children}</div>;
};

export default Container;
