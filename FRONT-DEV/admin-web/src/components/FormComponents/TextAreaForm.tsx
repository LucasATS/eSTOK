import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  label?: string;
  name: string;
  cols: number;
  rows: number;
  placeholder?: string;
  labelStyle?: string;
  inputStyle?: string;
  maxLength?: number;
}
type TextareaProps = JSX.IntrinsicElements['textarea'] & Props;

const TextAreaForm: React.FC<TextareaProps> = ({
  label,
  name,
  cols,
  rows,
  placeholder,
  maxLength,
  inputStyle,
  labelStyle,
  className,
  children,
  ...rest
}) => {
  const textareaRef = useRef(null);
  const { fieldName, defaultValue, registerField, error, clearError } = useField(name);
  const [content, setContent] = useState(defaultValue?.toString().slice(0, maxLength));

  const setFormattedContent = useCallback(
    (text: string) => {
      clearError();
      setContent(text.slice(0, maxLength));
    },
    [maxLength, setContent]
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (defaultValue) setFormattedContent(defaultValue);
  }, [!defaultValue]);

  return (
    <div className={`flex flex-col mt-2 text-sm w-full ${className || ''}`}>
      {/* {label && ( */}
      <label
        htmlFor={name}
        className={labelStyle || `py-1 font-medium ${error ? ' text-red-500' : 'text-[#8d8d8f]'}`}
      >
        {label}
      </label>
      {/* )} */}
      <div
        className={`relative rounded-[30px]  ${
          error
            ? ' border-red-500 focus:border-red-500 focus:ring-red-500'
            : ' text-[#8d8d8f] bg-gray-200 hover:bg-gray-300'
        }`}
      >
        <textarea
          name={name}
          defaultValue={defaultValue}
          ref={textareaRef}
          cols={cols}
          rows={rows}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={(event) => setFormattedContent(event.target.value)}
          className={
            inputStyle ||
            `w-full rounded-[30px] focus:ring-1 p-2 focus:outline-none
          ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'text-[#8d8d8f] bg-gray-200 hover:bg-gray-300 focus:border-gray-300'
          }
              `
          }
          {...rest}
        />
        {error && <span className="text-red-500 text-xs mt-1 ml-1">{error}</span>}
        <p
          className={`flex text-xs justify-end mt-1 ml-1
            ${error ? 'text-error' : ''}
          `}
        >
          {content ? content?.length : 0}/{maxLength}
        </p>
      </div>
    </div>
  );
};

export default TextAreaForm;
