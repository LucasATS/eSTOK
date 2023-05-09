import React from 'react';

type Props = {
  isActive: boolean;
  onClick?: () => void;
  value: string;
};

const PageItem = (props: Props) => {
  return (
    <span
      className={`cursor-pointer  transition-all px-[10px] py-1 rounded sm:text-sm text-md ${
        props.isActive
          ? 'hover:bg-teal-500 bg-teal-600 font-semibold text-white'
          : 'hover:bg-gray-200'
      }`}
      onClick={props.onClick}
    >
      {props.value}
    </span>
  );
};

export default PageItem;
