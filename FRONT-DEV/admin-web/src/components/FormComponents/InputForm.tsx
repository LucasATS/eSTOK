import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface Props {
  type: string;
  name: string;
  placeholder?: string;
  label?: string;
  labelStyle?: string;
  inputStyle?: string;
  disabled?: boolean;
  error?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const InputForm = ({
  type,
  name,
  placeholder,
  label,
  labelStyle,
  inputStyle,
  className,
  disabled,
  error,
  ...rest
}: InputProps) => {
  const { register } = useFormContext();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((visible) => !visible);

  const inputType = type === 'password' ? (isVisible ? 'text' : 'password') : type;

  return (
    <div className={`flex flex-col w-full gap-1 text-sm ${className || ''}`}>
      {label && (
        <label
          htmlFor={name}
          className={labelStyle || `py-1 font-medium ${error ? 'text-red-500' : 'text-gray-500'}`}
        >
          {label}
        </label>
      )}
      <div
        className={`relative border rounded ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'text-gray-500 border-gray-200 focus:border-sky-600 focus:ring-sky-600'
        }`}
      >
        <input
          {...register(name)}
          id={name}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          className={twMerge(
            'w-full border rounded px-4 py-2 text-sm',
            error ? 'border-red-500' : 'border-gray-300',
            inputStyle,
            className
          )}
          {...rest}
        />

        {type === 'password' && (
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute inset-y-0 mr-2 mt-2 right-0 w-5 h-5 text-gray-500 items-center cursor-pointer"
          >
            {isVisible ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
          </button>
        )}
      </div>
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};

export default InputForm;
