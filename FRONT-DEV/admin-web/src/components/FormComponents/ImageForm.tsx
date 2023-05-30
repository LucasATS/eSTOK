// import { PhotographIcon, TrashIcon } from '@heroicons/react/solid';

import { iconApi } from '../../modules/_shared/services/iconApi';

interface ImageDetailType {
  file?: File;
  removeImage: () => void;
}

export const ImageForm = ({ removeImage, file }: ImageDetailType) => {
  return (
    <div className="flex flex-row w-full py-2 px-4 rounded border border-cancel border-dashed items-center justify-between bg-gray-50 ">
      <div className="flex items-center gap-3 text-cancel ">
        {/* <PhotographIcon className="w-6 h-6" /> */}
        <span className="text-base font-medium max-w-[220px] truncate">{file && file.name}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="cursor-pointer">
          <img src={iconApi + 'delete.svg'} className="w-6 h-6 text-error" onClick={removeImage} />
        </div>
      </div>
    </div>
  );
};
