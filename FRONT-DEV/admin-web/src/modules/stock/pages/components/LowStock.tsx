import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm from '../../../../components/FormComponents/SelectForm';
import TextareaForm from '../../../../components/FormComponents/TextAreaForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import { selectOptionsProductType } from '../../../_shared/constants/SelectOption';
import {
  getErrorMessage,
  getFieldErrors,
  manageApiErrorResponse
} from '../../../_shared/helpers/handleApiErrorResponse';
import CreateLowStockDto from '../../dto/LowStock/CreateLowStockDto';
import StockService from '../../service/StockService';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  dadosStokBaixa: any;
}

export const LowStock = ({ isOpen, onClose, onConfirm, dadosStokBaixa }: ConfigModalProps) => {
  const formMethods = useForm<CreateLowStockDto>();
  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = formMethods;

  const onSubmit = async (formData: CreateLowStockDto) => {
    try {
      const newLowStockToCreate = {
        ...formData,
        produto: dadosStokBaixa.produto,
        quantidade: dadosStokBaixa.quantidade,
        id_produto: dadosStokBaixa.id.replace('#', ''),
        lote: dadosStokBaixa.lotes,
        validade: dadosStokBaixa.vencimento
      } as CreateLowStockDto;

      const result = await StockService.createLowStok(newLowStockToCreate);

      if (result.status === 'erro') {
        toast.error(result.motivo);
        throw new Error(result.motivo);
      }

      toast.success(result.motivo);
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
      setError(key as keyof CreateLowStockDto, { message })
    );
    const resultErrorReponse = manageApiErrorResponse(resultError);
    const error = getErrorMessage(resultErrorReponse);
    console.warn(error);
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center w-full">
          <div className="relative bg-white rounded-lg shadow w-full">
            <div className="flex items-start py-1 px-6 rounded-t border-b">
              <TitleCard text="Baixa de estoque" />
            </div>
            <div className="flex p-6 gap-3">
              <div className="w-full space-y-3">
                <SelectForm
                  name="motivo"
                  placeholder="Selecione o motivo"
                  options={selectOptionsProductType}
                  control={control}
                  error={errors.motivo?.message}
                />
                <InputForm
                  name="quantidade"
                  type="text"
                  placeholder="Quantidade"
                  error={errors.quantidade?.message}
                />
              </div>
              <div className="flex h-32 w-full">
                <TextareaForm
                  name="observacao"
                  placeholder="Descrição"
                  cols={33}
                  rows={4}
                  maxLength={1000}
                  control={control}
                />
              </div>
            </div>

            <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
              <Button
                style={{ width: '200px' }}
                variant="cancel"
                type="button"
                onClick={handleCancel}
                buttonText="Cancelar"
              />
              <Button
                style={{ width: '200px' }}
                variant="primary"
                type="submit"
                buttonText="Confirmar"
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </ModalComponent>
  );
};

export default LowStock;
