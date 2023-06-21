type Props = {
  isActive: boolean;
  onClick?: () => void;
  value: string;
  onKeyDown?: () => void;
};

const PageItem = (props: Props) => {
  return (
    <span
      className={`cursor-pointer  transition-all px-[10px] py-1 rounded sm:text-sm text-md ${
        props.isActive
          ? 'hover:bg-sky-500 bg-sky-600 font-semibold text-white'
          : 'cursor-pointer hover:bg-gray-200 text-gray-500'
      }`}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      role="button"
      tabIndex={0}
    >
      {props.value}
    </span>
  );
};

export default PageItem;
