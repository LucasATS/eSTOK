import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
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
  const formMethods = useForm<CreateProductDto>();
  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = formMethods;

  const [categoryOptions, setCategoryOptions] = useState<OptionSelect[]>([]);
  const [unitMeasureOptions, setUnitMeasureOptions] = useState<OptionSelect[]>([]);
  const [productTypeOptions, setProductTypeOptions] = useState<OptionSelect[]>([]);
  const [file, setFile] = useState<File>();
  const [fileBase64, setFileBase64] = useState<string>('');

  const getCategoryOptions = async () => {
    const categories = await CategoryService.paginateCategory({ limit: 10, isActive: true });
    if (categories.length > 0) {
      const optionsCategories = categories.response.map((category) => ({
        value: category.id,
        label: category.descricao,
        status: category.status
      }));
      setCategoryOptions(optionsCategories);
    }
  };

  const getUnitMeasureOptions = async () => {
    const unitsMeasure = await UnitMeasureService.paginateUnitMeasure({
      limit: 10,
      isActive: true
    });
    if (unitsMeasure.length > 0) {
      const optionsUnitsMeasure = unitsMeasure.response.map((unitMeasure) => ({
        value: unitMeasure.id,
        label: unitMeasure.descricao,
        status: unitMeasure.status
      }));
      setUnitMeasureOptions(optionsUnitsMeasure);
    }
  };

  const getProductTypeOptions = async () => {
    const productsType = await ProductTypeService.paginateProductType({
      limit: 200,
      isActive: true
    });
    if (productsType.length > 0) {
      const optionsProductsType = productsType.response.map((productType) => ({
        value: productType.id,
        label: productType.descricao,
        status: productType.status
      }));
      setProductTypeOptions(optionsProductsType);
    }
  };

  const onSubmit = async (data: CreateProductDto) => {
    try {
      const newProductToCreate = {
        ...data,
        foto: fileBase64
      };
      const result = await ProductService.createProduct(newProductToCreate);
      if (result.data.status === 'erro') {
        toast.error(result.data.motivo);
        throw new Error(result.data.motivo);
      }
      toast.success(result.data.motivo);
      onConfirm();
      onClose();
      reset();
      setFile(undefined);
      setFileBase64('');
    } catch (error) {
      const fieldsErrors = getFieldErrors(error);
      Object.entries(fieldsErrors).forEach(([key, message]) =>
        setError(key as keyof CreateProductDto, { message })
      );
      const resultErrorReponse = manageApiErrorResponse(error);
      const message = getErrorMessage(resultErrorReponse);
      console.warn(message);
    }
  };

  const handleProductImage = async (file: File) => {
    setFile(file);
    setFileBase64(await getBase64(file));
  };

  const handleRemoveFile = () => {
    setFile(undefined);
    setFileBase64('');
    reset();
  };

  const handleCancel = () => {
    onClose();
    reset();
    setFile(undefined);
    setFileBase64('');
  };

  useEffect(() => {
    getCategoryOptions();
    getUnitMeasureOptions();
    getProductTypeOptions();
  }, []);

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
          <div className="relative bg-white rounded-lg shadow w-full">
            <div className="flex items-start py-1 px-6 rounded-t border-b">
              <TitleCard text="Cadastrar Produto" />
            </div>
            <div className="p-6 space-y-3">
              {file && <ImageForm removeImage={handleRemoveFile} file={file} />}
              <DropzoneForm
                name="foto"
                onChange={handleProductImage}
                label="selecionar um arquivo .png ou .jpeg"
                acceptFiles={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
              />
              <InputForm
                name="nome_produto"
                type="text"
                placeholder="Produto"
                error={errors.nome_produto?.message}
              />

              <div className="flex w-full md:flex-row flex-col gap-3">
                <SelectForm
                  name="categoria"
                  placeholder="Categoria"
                  options={categoryOptions}
                  control={control}
                  error={errors.categoria?.message}
                />
                <SelectForm
                  name="unidade"
                  placeholder="Unidade"
                  options={unitMeasureOptions}
                  control={control}
                  error={errors.unidade?.message}
                />
                <SelectForm
                  name="tp_produto"
                  placeholder="Tipo de produto"
                  options={productTypeOptions}
                  control={control}
                  error={errors.tp_produto?.message}
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
                type="submit"
                buttonText="Cadastrar"
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </ModalComponent>
  );
};
