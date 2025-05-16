import { PhotoIcon, TrashIcon } from '@heroicons/react/24/solid';

interface ImageDetailType {
  file?: File;
  removeImage: () => void;
}

const FileDetail = ({ removeImage, file }: ImageDetailType) => {
  return (
    <div className="flex flex-row w-full py-2 px-4 rounded border border-gray-300 border-dashed items-center justify-between bg-gray-50 ">
      <div className="flex items-center gap-3 text-gray-500 ">
        <PhotoIcon className="w-6 h-6" />
        <span className="text-base font-medium max-w-[220px] truncate">{file && file.name}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="cursor-pointer">
          <TrashIcon className="w-6 h-6 text-red-600" onClick={removeImage} />
        </div>
      </div>
    </div>
  );
};

export default FileDetail;
