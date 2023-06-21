import React from 'react';

type Props = {
  isDisabled: boolean;
  onClick?: () => void;
  content: React.ReactNode;
  onKeyDown?: () => void;
};

const PageAction = (props: Props) => {
  return (
    <span
      className={`p-1 rounded flex items-center transition-all ${
        props.isDisabled ? 'bg-gray-300 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-200'
      }`}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      role="button"
      tabIndex={0}
    >
      {props.content}
    </span>
  );
};

export default PageAction;
