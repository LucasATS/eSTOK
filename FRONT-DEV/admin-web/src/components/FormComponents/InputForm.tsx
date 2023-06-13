import { useField } from '@unform/core';
import { Eye, EyeOff } from 'heroicons-react';
import { useRef, useState } from 'react';

interface Props {
  type: string;
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
  type,
  placeholder,
  label,
  labelStyle,
  inputStyle,
  className,
  disabled,
  ...rest
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { fieldName, defaultValue, registerField, error, clearError } = useField(name);
  const inputRef = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  const toggleVisibility = () => {
    setIsVisible((visible) => !visible);
  };

  return (
    <div className={`flex flex-col text-sm ${className || ''}`}>
      <label
        htmlFor={name}
        className={labelStyle || `py-1 font-medium ${error ? ' text-red-500' : 'text-gray-500'}`}
      >
        {label}
      </label>
      <div
        className={`relative border rounded ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'text-gray-500 border-gray-200 focus:border-sky-600 focus:ring-sky-600'
        }`}
      >
        <input
          type={isVisible ? 'text' : type}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          ref={inputRef}
          onChange={(e) => handleChange(e)}
          disabled={disabled}
          className={
            inputStyle ||
            `w-full border rounded focus:ring-1 p-2 focus:outline-none
          ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'text-gray-500 border-gray-200 focus:border-sky-600 focus:ring-sky-600'
          }
              `
          }
          {...rest}
        />
        {type === 'password' &&
          (isVisible ? (
            <EyeOff
              onClick={toggleVisibility}
              className="absolute inset-y-0 mr-2 mt-2 right-0 w-5 h-5 text-gray-500 items-center cursor-pointer"
            />
          ) : (
            <Eye
              onClick={toggleVisibility}
              className="absolute inset-y-0 mr-2 mt-2 right-0 w-5 h-5 text-gray-500 items-center cursor-pointer"
            />
          ))}
      </div>
      {error && <span className="text-red-500 text-xs mt-1 ml-1">{error}</span>}
    </div>
  );
};

export default InputForm;
