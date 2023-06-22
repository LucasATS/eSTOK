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
import getBase64 from '../../../_shared/constants/getBase';
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
  const [categoryOptions, setCategoryOptions] = useState<OptionSelect[]>([]);
  const [unitMeasureOptions, setUnitMeasureOptions] = useState<OptionSelect[]>([]);
  const [productTypeoptions, setProductTypeOptions] = useState<OptionSelect[]>([]);
  const formRef = useRef<FormHandles>(null);
  const [file, setFile] = useState<File>();
  const [fileBase64, setFileBase64] = useState<string>();

  const getCategoryOptions = async () => {
    const categories = await CategoryService.paginateCategory({
      limit: 10,
      isActive: true
    });
    const categoryOptions = categories.length;
    if (categoryOptions > 0) {
      const optionsCategories = categories.map((category) => {
        return {
          value: category.id,
          label: category.descricao,
          status: category.status
        };
      }) as OptionSelect[];
      setCategoryOptions(optionsCategories);
    }
  };

  const getUnitMeasureOptions = async () => {
    const unitsMeasure = await UnitMeasureService.paginateUnitMeasure({
      limit: 10,
      isActive: true
    });

    const unitMeasureOptions = unitsMeasure.length;
    console.log('unitMeasureOptions', unitMeasureOptions);
    if (unitMeasureOptions > 0) {
      const optionsUnitsMeasure = unitsMeasure.map((unitMeasure) => {
        return {
          value: unitMeasure.abreviacao,
          label: unitMeasure.descricao,
          status: unitMeasure.status
        };
      }) as OptionSelect[];
      setUnitMeasureOptions(optionsUnitsMeasure);
    }
  };

  const getProductTypeOptions = async () => {
    const productsType = await ProductTypeService.paginateProductType({
      limit: 200,
      isActive: true
    });
    const productTypeOptions = productsType.length;
    if (productTypeOptions > 0) {
      const optionsProductsType = productsType.map((productType) => {
        return {
          value: productType.id,
          label: productType.descricao,
          status: productType.status
        };
      }) as OptionSelect[];
      setProductTypeOptions(optionsProductsType);
    }
  };

  const handleAddNewProduct = async () => {
    try {
      const mainFormData = formRef?.current?.getData();

      const newProductToCreate = {
        ...mainFormData,
        foto: fileBase64 // SOBRESCREVE FILE COM O BASE64
      } as CreateProductDto;
      console.log('newProductToCreate', newProductToCreate);
      const result = await ProductService.createProduct(newProductToCreate);
      //SISTEMA DE INTERRUPÇÃO DE PIORIDADE ALTA PARA ERRO
      if (result.data.status === 'erro') {
        toast.error(result.data.motivo);
        throw new Error(result.data.motivo);
      }
      toast.success(result.data.motivo);
      onConfirm();
      onClose();
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
    console.warn(error);
  };

  const handleProductImage = async (file: File) => {
    setFile(file);
    setFileBase64(await getBase64(file));
    console.log(fileBase64);
  };

  const handleRemoveFile = () => {
    setFile(undefined);
    formRef.current?.reset();
  };

  useEffect(() => {
    getCategoryOptions();
    getUnitMeasureOptions();
    getProductTypeOptions();
  }, []);

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <Form ref={formRef} onSubmit={handleAddNewProduct} className="flex justify-center">
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
              name="foto"
              onChange={handleProductImage}
              label="selecionar um arquivo .png ou .jpeg"
              acceptFiles={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
            />
            <InputForm name="nome" type="text" placeholder="Produto" />
            <div className="flex w-full md:flex-row flex-col gap-3">
              <SelectForm name="categoria" placeholder="Categoria" options={categoryOptions} />
              <SelectForm name="unidade" placeholder="Unidade" options={unitMeasureOptions} />
              <SelectForm
                name="tp_produto"
                placeholder="Tipo de produto"
                options={productTypeoptions}
              />
            </div>

            <TextAreaForm
              placeholder="Descrição do produto"
              name="descricao"
              cols={2}
              rows={4}
              maxLength={1000}
            />
          </div>

          <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
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
              onClick={handleAddNewProduct}
              buttonText="Cadastrar"
            />
          </div>
        </div>
      </Form>
    </ModalComponent>
  );
};
