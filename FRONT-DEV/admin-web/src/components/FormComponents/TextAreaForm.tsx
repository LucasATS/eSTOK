import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  label?: string;
  name: string;
  cols: number;
  rows: number;
  placeholder?: string;
  maxLength?: number;
}
type TextareaProps = JSX.IntrinsicElements['textarea'] & Props;

const TextareaForm: React.FC<TextareaProps> = ({
  label,
  name,
  cols,
  rows,
  placeholder,
  maxLength,
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
    <div className="flex flex-col py-2 w-full">
      {label && (
        <label
          htmlFor={name}
          className={`text-sm py-1 font-medium ${error ? ' text-error' : 'text-secondary'}`}
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        defaultValue={defaultValue}
        ref={textareaRef}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(event) => setFormattedContent(event.target.value)}
        className={`w-full bg-[#E9E9E9] px-3 py-2 text-sm border rounded-xl focus:outline-none focus:ring-1 resize-none
          ${
            error
              ? 'text-gray-700 border-error focus:border-error focus:ring-error'
              : 'bg-gray-100 hover:bg-gray-200 focus:border-sky-600'
          }
        `}
        {...rest}
      >
        {children}
      </textarea>
      <div
        className={`flex sm:flex-wrap gap-4 lg:flex-row w-full ${
          error ? 'justify-between' : 'justify-end'
        }`}
      >
        {error && <span className="text-error justify-end text-xs mt-1 ml-1">{error}</span>}
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

export default TextareaForm;
