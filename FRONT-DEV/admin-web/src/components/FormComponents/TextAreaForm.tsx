import React, { useEffect, useState } from 'react';
import { Control, useController } from 'react-hook-form';

interface Props {
  label?: string;
  name: string;
  cols: number;
  rows: number;
  placeholder?: string;
  labelStyle?: string;
  inputStyle?: string;
  className?: string;
  maxLength?: number;
  control?: Control<any>;
}

const TextAreaForm: React.FC<Props> = ({
  label,
  name,
  cols,
  rows,
  placeholder,
  maxLength = 300,
  inputStyle,
  labelStyle,
  className,
  control
}) => {
  const {
    field,
    fieldState: { error }
  } = useController({
    name,
    control,
    defaultValue: ''
  });

  const [content, setContent] = useState(field.value?.slice(0, maxLength) || '');

  useEffect(() => {
    setContent(field.value?.slice(0, maxLength) || '');
  }, [field.value, maxLength]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.slice(0, maxLength);
    setContent(value);
    field.onChange(value);
  };

  return (
    <div className={`flex flex-col pb-2 ${className || ''}`}>
      {label && (
        <label
          htmlFor={name}
          className={
            labelStyle || `text-sm py-1 font-medium ${error ? 'text-red-500' : 'text-[#8d8d8f]'}`
          }
        >
          {label}
        </label>
      )}

      <textarea
        id={name}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        value={content}
        onChange={handleChange}
        className={
          inputStyle ||
          `w-full h-full py-2 px-3 text-sm border rounded focus:outline-none focus:ring-1 ${
            error
              ? 'text-[#8d8d8f] border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'text-[#8d8d8f] border-gray-200 focus:border-sky-600 focus:ring-sky-600'
          }`
        }
      />

      {error && <span className="text-red-500 text-xs mt-1 ml-1">{error.message}</span>}

      <p className={`flex text-xs justify-end mt-1 ml-1 ${error ? 'text-red-500' : ''}`}>
        {content.length}/{maxLength}
      </p>
    </div>
  );
};

export default TextAreaForm;
