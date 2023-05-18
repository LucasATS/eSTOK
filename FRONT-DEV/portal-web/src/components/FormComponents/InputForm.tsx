import { useField } from '@unform/core';
import { useRef, useState } from 'react';

interface Props {
  name: string;
  placeholder?: string;
  label?: string;
  labelStyle?: string;
  inputStyle?: string;
  disabled?: boolean;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const InputForm = ({
  onChange,
  name,
  placeholder,
  label,
  labelStyle,
  inputStyle,
  className,
  disabled,
  ...rest
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { defaultValue, error } = useField(name);
  const inputRef = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <div className={`flex flex-col mt-2 text-sm w-full ${className || ''}`}>
      <label
        htmlFor={name}
        className={labelStyle || `py-1 font-medium ${error ? ' text-red-500' : 'text-[#B0B0B1]'}`}
      >
        {label}
      </label>
      <div
        className={`relative rounded-[30px] ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'text-[#B0B0B1] bg-gray-100 hover:bg-gray-200'
        }`}
      >
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          ref={inputRef}
          onChange={(e) => handleChange(e)}
          disabled={disabled}
          className={
            inputStyle ||
            `w-full rounded-[30px] focus:ring-1 p-2 focus:outline-none
          ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'text-[#B0B0B1] bg-gray-100 hover:bg-gray-200 focus:border-sky-600'
          }
              `
          }
          {...rest}
        />
      </div>
      {error && <span className="text-red-500 text-xs mt-1 ml-1">{error}</span>}
    </div>
  );
};

export default InputForm;
