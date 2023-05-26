import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef, useState } from 'react';
import Button from '../../../../components/Button';
import { DropzoneForm } from '../../../../components/FormComponents/DropzoneForm';
import { ImageForm } from '../../../../components/FormComponents/ImageForm';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm from '../../../../components/FormComponents/SelectForm';
import TextAreaForm from '../../../../components/FormComponents/TextAreaForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import {
  selectOptionsCategory,
  selectOptionsProductSize,
  selectOptionsProductType,
  selectOptionsUnit
} from '../../../_shared/constants/SelectOption';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const NewProductModal = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
  const formRef = useRef<FormHandles>(null);
  const [file, setFile] = useState<File>();

  const handleAddProduct = async () => {
    console.log('criado ou atualizado');
    onConfirm();
    onClose();
    clearForm();
  };

  const handleCancel = () => {
    onClose();
    clearForm();
  };

  const clearForm = () => {
    formRef.current?.reset();
  };

  const handleProductImage = (file: File) => {
    setFile(file);
  };

  const handleRemoveFile = () => {
    setFile(undefined);
    formRef.current?.reset();
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <Form ref={formRef} onSubmit={handleAddProduct} className="flex justify-center">
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="flex items-start py-1 px-4 rounded-t border-b">
            <TitleCard text="Cadastrar Produto" />
          </div>
          <div className="p-6 space-y-3">
            {file && (
              <div className="flex flex-col">
                <ImageForm removeImage={handleRemoveFile} file={file} />
              </div>
            )}
            <DropzoneForm
              name="imageFile"
              onChange={handleProductImage}
              label="selecionar um arquivo .png ou .jpeg"
              acceptFiles={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
            />
            <InputForm name="productName" type="text" placeholder="Nome do produto" />
            <div className="flex md:flex-row flex-col gap-3">
              <SelectForm name="category" placeholder="Categoria" options={selectOptionsCategory} />
              <SelectForm name="unit" placeholder="Unidade de medida" options={selectOptionsUnit} />
            </div>
            <div className="flex md:flex-row flex-col gap-3">
              <SelectForm
                name="productType"
                placeholder="Tipo de produto"
                options={selectOptionsProductType}
              />
              <SelectForm
                name="productSize"
                placeholder="Tamanho do produto"
                options={selectOptionsProductSize}
              />
            </div>

            <TextAreaForm
              placeholder="Descrição do produto"
              name="description"
              cols={2}
              rows={4}
              maxLength={1000}
            />
          </div>

          <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
            <Button type="button" variant="cancel" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              type="button"
              onClick={handleAddProduct}
              buttonText="Cadastrar"
            />
          </div>
        </div>
      </Form>
    </ModalComponent>
  );
};
