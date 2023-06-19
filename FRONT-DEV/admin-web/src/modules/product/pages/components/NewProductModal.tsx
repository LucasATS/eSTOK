import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useEffect, useRef, useState } from 'react';
import Button from '../../../../components/Button';
import { DropzoneForm } from '../../../../components/FormComponents/DropzoneForm';
import { ImageForm } from '../../../../components/FormComponents/ImageForm';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm, { OptionSelect } from '../../../../components/FormComponents/SelectForm';
import TextAreaForm from '../../../../components/FormComponents/TextAreaForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import CategoryService from '../../service/CategoryService';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const NewProductModal = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
  const [optionsCategory, setOptionsCategory] = useState<OptionSelect[]>([]);
  const [optionsUnitMeasure, setOptionsUnitMeasure] = useState<OptionSelect[]>([]);
  const [optionsProductType, setOptionsProductType] = useState<OptionSelect[]>([]);
  const [optionsProductSize, setOptionsProductSize] = useState<OptionSelect[]>([]);
  const formRef = useRef<FormHandles>(null);
  const [file, setFile] = useState<File>();

  const getOptionsCategory = async () => {
    const { results: categories } = await CategoryService.paginateCategory({
      limit: 200,
      isActive: true
    });
    if (categories.length > 0) {
      const optionsCategories = categories.map((category) => ({
        value: category.id,
        label: category.descrição
      }));
      setOptionsCategory(optionsCategories);
    }
  };

  const getOptionsUnitMeasure = async () => {
    const { results: unitsMeasure } = await CategoryService.paginateCategory({
      limit: 200,
      isActive: true
    });
    if (unitsMeasure.length > 0) {
      const optionsUnitsMeasure = unitsMeasure.map((unitMeasure) => ({
        value: unitMeasure.id,
        label: unitMeasure.descrição
      }));
      setOptionsUnitMeasure(optionsUnitsMeasure);
    }
  };

  const getOptionsProductType = async () => {
    const { results: productsType } = await CategoryService.paginateCategory({
      limit: 200,
      isActive: true
    });
    if (productsType.length > 0) {
      const optionsProductsType = productsType.map((productType) => ({
        value: productType.id,
        label: productType.descrição
      }));
      setOptionsProductType(optionsProductsType);
    }
  };

  const getOptionsProductSize = async () => {
    const { results: productSizes } = await CategoryService.paginateCategory({
      limit: 200,
      isActive: true
    });
    if (productSizes.length > 0) {
      const optionsProductSizes = productSizes.map((category) => ({
        value: category.id,
        label: category.descrição
      }));
      setOptionsProductSize(optionsProductSizes);
    }
  };

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

  useEffect(() => {
    getOptionsCategory();
    getOptionsUnitMeasure();
    getOptionsProductType();
    getOptionsProductSize();
  }, []);

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <Form ref={formRef} onSubmit={handleAddProduct} className="flex justify-center">
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="flex items-start py-1 px-6 rounded-t border-b">
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
            <div className="flex w-full md:flex-row flex-col gap-3">
              <SelectForm name="category" placeholder="Categoria" options={optionsCategory} />
              <SelectForm
                name="unit"
                placeholder="Unidade de medida"
                options={optionsUnitMeasure}
              />
              {/* </div>
            <div className="flex md:flex-row flex-col gap-3"> */}
              <SelectForm
                name="productType"
                placeholder="Tipo de produto"
                options={optionsProductType}
              />
              <SelectForm
                name="productSize"
                placeholder="Tamanho do produto"
                options={optionsProductSize}
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

          <div className="flex items-center justify-between p-6 space-x-3 rounded-b border-t border-gray-200">
            <Button
              style={{ width: '200px' }}
              type="button"
              variant="cancel"
              onClick={handleCancel}
            >
              Cancelar
            </Button>
            <Button
              style={{ width: '200px' }}
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
