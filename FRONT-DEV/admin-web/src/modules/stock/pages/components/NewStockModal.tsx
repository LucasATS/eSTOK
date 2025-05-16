import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm, { OptionSelect } from '../../../../components/FormComponents/SelectForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import {
  getErrorMessage,
  getFieldErrors,
  manageApiErrorResponse
} from '../../../_shared/helpers/handleApiErrorResponse';
import ProductService from '../../../product/service/ProductService';
import CreateStockDto from '../../dto/Stock/CreateStockDto';
import StockService from '../../service/StockService';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const NewStockModal = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
  const [productOptions, setProductOptions] = useState<OptionSelect[]>([]);
  const formMethods = useForm<CreateStockDto>();
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors }
  } = formMethods;

  const getProductOptions = async () => {
    const products = await ProductService.paginateOptionsProduct({
      limit: 10,
      isActive: true
    });

    if (products.length > 0) {
      const optionsProducts = products.map((product) => ({
        value: product.id,
        label: product.produto,
        status: product.status
      })) as OptionSelect[];

      setProductOptions(optionsProducts);
    }
  };

  const onSubmit = async (data: CreateStockDto) => {
    try {
      const result = await StockService.createStock(data);

      if (result.data.status === 'erro') {
        toast.error(result.data.motivo);
        throw new Error(result.data.motivo);
      }

      toast.success(result.data.motivo);
      onConfirm();
      onClose();
      reset();
    } catch (error) {
      handleErrors(error);
    }
  };

  const handleCancel = () => {
    onClose();
    reset();
  };

  const handleErrors = (resultError: unknown) => {
    const fieldsErrors = getFieldErrors(resultError);
    Object.entries(fieldsErrors).forEach(([key, message]) =>
      setError(key as keyof CreateStockDto, { message })
    );
    const resultErrorReponse = manageApiErrorResponse(resultError);
    const error = getErrorMessage(resultErrorReponse);
    console.warn(error);
  };

  useEffect(() => {
    getProductOptions();
  }, []);

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center w-full">
          <div className="relative bg-white rounded-lg shadow w-full">
            <div className="flex items-start py-1 px-6 rounded-t border-b">
              <TitleCard text="Cadastrar Produto ao Estoque" />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex flex-row items-end gap-3">
                <SelectForm
                  name="produto"
                  placeholder="Produto"
                  options={productOptions}
                  control={control}
                  error={errors.produto?.message}
                />
                <InputForm
                  name="unitario"
                  type="number"
                  label="Preço"
                  placeholder="Digite o preço"
                  error={errors.unitario?.message}
                />
                <InputForm
                  name="quantidade"
                  type="number"
                  label="Quantidade"
                  placeholder="Digite a quantidade"
                  error={errors.quantidade?.message}
                />
              </div>
              <div className="flex flex-row items-end gap-3">
                <InputForm
                  name="lote"
                  type="text"
                  label="Lote"
                  className="w-full"
                  placeholder="Digite o lote"
                  error={errors.lote?.message}
                />
                <InputForm
                  name="data_compra"
                  type="date"
                  label="Data da compra"
                  error={errors.data_compra?.message}
                />
                <InputForm
                  name="validade"
                  type="date"
                  label="Vencimento"
                  placeholder="Digite o bairro"
                  error={errors.validade?.message}
                />
              </div>
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

export default NewStockModal;
