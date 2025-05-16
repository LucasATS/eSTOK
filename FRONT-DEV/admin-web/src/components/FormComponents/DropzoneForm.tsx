import { ArrowUpTrayIcon, CloudArrowUpIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  onChange: (files: File) => void;
  acceptFiles: Accept;
  label: string;
}

export default function DropzoneForm({ name, onChange, acceptFiles, label }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    setValue,
    clearErrors,
    formState: { errors }
  } = useFormContext();
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    accept: acceptFiles,
    maxFiles: 1,
    onDrop: (files) => {
      if (!isDragReject && files.length > 0) {
        setAcceptedFiles(files);
        onChange(files[0]);
        setValue(name, files[0], { shouldValidate: true });
        clearErrors(name);
      }
    }
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div
          {...getRootProps()}
          role="button"
          tabIndex={0}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              inputRef.current?.click();
            }
          }}
          className={`${
            isDragReject || errors[name] ? 'bg-red-50 border-red-500' : 'bg-gray-50 border-gray-300'
          } flex flex-col justify-center items-center w-full rounded border border-dashed cursor-pointer hover:bg-gray-100`}
        >
          <input {...getInputProps()} name={name} ref={inputRef} />

          {isDragActive && !isDragReject && (
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <CloudArrowUpIcon className="mb-3 w-10 h-10 text-cancel" />
              <p className="mb-2 text-sm text-cancel">
                <span className="font-semibold">Solte a imagem aqui ...</span>
              </p>
            </div>
          )}

          {!isDragActive && (
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <ArrowUpTrayIcon className="mb-2 sm:mb-3 w-6 h-6 sm:w-10 sm:h-10 text-cancel" />
              <p className="mb-2 px-2 pt-1 text-xs sm:text-sm text-cancel">
                <span className="font-semibold">Arraste e solte a imagem aqui</span> ou clique para
              </p>
              <p className="text-xs px-2 sm:text-sm text-cancel">{label}</p>
            </div>
          )}

          {isDragReject && (
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <XMarkIcon className="mb-3 w-10 h-10 text-error" />
              <p className="text-sm text-error">
                Formato de arquivo <span className="font-semibold">inválido</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {errors[name] && (
        <span className="text-error justify-end text-xs mt-1 ml-1">
          {String(errors[name]?.message)}
        </span>
      )}
    </>
  );
}
