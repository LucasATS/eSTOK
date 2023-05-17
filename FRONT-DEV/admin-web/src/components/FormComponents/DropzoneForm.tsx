import { useField } from '@unform/core';
import { useEffect, useRef, useState } from 'react';
import { Accept, useDropzone } from 'react-dropzone';

interface Props {
  name: string;
  onChange: (files: File) => void;
  acceptFiles: Accept;
  label: string;
}

interface InputRefProps extends HTMLInputElement {
  acceptedFiles: File[];
}

export const DropzoneForm = ({ name, onChange, acceptFiles, label }: Props) => {
  const inputRefForm = useRef<InputRefProps>(null);
  const { fieldName, registerField, defaultValue = [], error, clearError } = useField(name);
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>(defaultValue);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    inputRef = inputRefForm
  } = useDropzone({
    accept: acceptFiles,
    maxFiles: 1,
    onDrop: (onDropAcceptedFiles) => {
      if (inputRefForm.current && !isDragReject) {
        inputRefForm.current.acceptedFiles = onDropAcceptedFiles;
        setAcceptedFiles(onDropAcceptedFiles);
      }
    }
  });
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefForm.current,
      getValue: (ref: InputRefProps) => {
        return ref.acceptedFiles || [];
      },
      clearValue: (ref: InputRefProps) => {
        ref.acceptedFiles = [];
        setAcceptedFiles([]);
      },
      setValue: (ref: InputRefProps, value) => {
        ref.acceptedFiles = value;
        setAcceptedFiles(value);
      }
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    onChange(acceptedFiles[0]);
    clearError();
  }, [acceptedFiles]);

  return (
    <>
      <div
        className="flex flex-col justify-center items-center w-full"
        // onClick={() => inputRef.current?.click()}
      >
        <div
          {...getRootProps({
            ref: inputRef
          })}
          className={`${
            isDragReject || error ? 'bg-red-50 border-red-500' : 'bg-gray-100 border-gray-300'
          } flex flex-col justify-center items-center w-full rounded border border-dashed cursor-pointer hover:bg-gray-200`}
        >
          <input {...getInputProps()} ref={inputRefForm} />
          {isDragActive && !isDragReject && (
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Solte a imagem aqui ...</span>
              </p>
            </div>
          )}
          {!isDragActive && (
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2 sm:mb-3 w-6 h-6 sm:w-10 sm:h-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <p className="mb-2 px-2 pt-1 text-xs sm:text-sm text-gray-500">
                <span className="font-semibold">Arraste e solte a imagem aqui</span> ou clique para
              </p>
              <p className="text-xs px-2 sm:text-sm text-gray-500">{label}</p>
            </div>
          )}
          {isDragReject && (
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              {/* <XIcon className="mb-3 w-10 h-10 text-red-600" /> */}
              <p className="text-sm text-red-500">
                Formato de arquivo <span className="font-semibold">inválido</span>
              </p>
            </div>
          )}
        </div>
      </div>
      {error && <span className="text-red-500 justify-end text-xs mt-1 ml-1">{error}</span>}
    </>
  );
};
