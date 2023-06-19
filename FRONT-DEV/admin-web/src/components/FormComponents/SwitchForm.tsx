interface ConfigModalProps {
  text: string;
  onChange: (value: boolean) => void;
  value: boolean;
}

const SwitchForm = ({ text, onChange, value }: ConfigModalProps) => {
  const handleClick = () => {
    onChange(!value);
  };

  return (
    <div className="flex flex-row w-full md:justify-start justify-center gap-1">
      <span className="text-[#B0B0B1] font-medium">{text}</span>
      <div
        className="md:w-14 md:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer"
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
        tabIndex={0}
        aria-labelledby="labeldiv"
      >
        <div
          className={`${
            value ? 'bg-primary' : 'bg-[#929293]'
          } inline-flex h-4 w-10 items-center rounded-full`}
          onChange={handleClick}
        >
          <span
            className={`${
              value ? 'translate-x-[26px]' : 'translate-x-0.5'
            } inline-block h-3 w-3 transform rounded-full bg-white hover:bg-gray-200 transition`}
            onChange={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchForm;
