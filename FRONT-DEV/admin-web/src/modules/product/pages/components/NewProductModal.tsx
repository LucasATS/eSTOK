import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from '../../../../components/Button';
import { DropzoneForm } from '../../../../components/FormComponents/DropzoneForm';
import { ImageForm } from '../../../../components/FormComponents/ImageForm';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm, { OptionSelect } from '../../../../components/FormComponents/SelectForm';
import TextAreaForm from '../../../../components/FormComponents/TextAreaForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import {
  getErrorMessage,
  getFieldErrors,
  manageApiErrorResponse
} from '../../../_shared/helpers/handleApiErrorResponse';
import CreateProductDto from '../../dto/product/CreateProductDto';
import CategoryService from '../../service/CategoryService';
import ProductService from '../../service/ProductService';
import ProductTypeService from '../../service/ProductTypeService';
import UnitMeasureService from '../../service/UnitMeasureService';

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
    const { results: unitsMeasure } = await UnitMeasureService.paginateUnitMeasure({
      limit: 200,
      isActive: true
    });
    if (unitsMeasure.length > 0) {
      const optionsUnitsMeasure = unitsMeasure.map((unitMeasure) => ({
        value: unitMeasure.id,
        label: unitMeasure.name
      }));
      setOptionsUnitMeasure(optionsUnitsMeasure);
    }
  };

  const getOptionsProductType = async () => {
    const { results: productsType } = await ProductTypeService.paginateProductType({
      limit: 200,
      isActive: true
    });
    if (productsType.length > 0) {
      const optionsProductsType = productsType.map((productType) => ({
        value: productType.id,
        label: productType.descricao
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

  const handleAddNewProduct = async () => {
    try {
      const mainFormData = formRef?.current?.getData();
      const newProductToCreate = {
        ...mainFormData
      } as CreateProductDto;

      const result = await ProductService.createProduct(newProductToCreate);
      toast.success(result.message);
      onConfirm();
      onClose();
      console.log('criado ou atualizado');
      clearForm();
    } catch (error) {
      handleErrors(error);
    }
  };

  const handleCancel = () => {
    onClose();
    clearForm();
  };

  const clearForm = () => {
    formRef.current?.reset();
  };

  const handleErrors = (resultError: unknown) => {
    const fieldsErrors = getFieldErrors(resultError);
    formRef.current?.setErrors(fieldsErrors);
    const resultErrorReponse = manageApiErrorResponse(resultError);
    const error = getErrorMessage(resultErrorReponse);
    toast.error(error);
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
      <Form ref={formRef} onSubmit={handleAddNewProduct} className="flex justify-center">
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

          <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
            <Button type="button" variant="cancel" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              type="button"
              onClick={handleAddNewProduct}
              buttonText="Cadastrar"
            />
          </div>
        </div>
      </Form>
    </ModalComponent>
  );
};
