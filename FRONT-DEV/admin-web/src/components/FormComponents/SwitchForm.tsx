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
    <div className="flex flex-row w-full items-center">
      <span className="text-[#444444] font-medium">{text}</span>
      <div
        className="md:w-14 md:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer"
        onClick={handleClick}
      >
        <div
          className={`${
            value ? "bg-sky-600" : "bg-[#929293]"
          } inline-flex h-4 w-10 items-center rounded-full`}
          onChange={handleClick}
        >
          <span
            className={`${
              value ? "translate-x-[26px]" : "translate-x-0.5"
            } inline-block h-3 w-3 transform rounded-full bg-white transition`}
            onChange={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchForm;
