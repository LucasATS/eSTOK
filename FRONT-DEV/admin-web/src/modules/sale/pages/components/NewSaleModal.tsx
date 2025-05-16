import { useState } from 'react';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm from '../../../../components/FormComponents/SelectForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import { selectOptionsStates } from '../../../_shared/constants/SelectOption';
import CreateSaleDto from '../../dto/CreateSaleDto';

import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  getErrorMessage,
  getFieldErrors,
  manageApiErrorResponse
} from '../../../_shared/helpers/handleApiErrorResponse';
import SaleService from '../../service/SaleService';
import DataProducts from './DataProducts';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const NewSaleModal = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
  const formMethods = useForm<CreateSaleDto>();
  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = formMethods;

  const [addNewProduct, setAddNewProduct] = useState<number[]>([]);

  const handleClickNewProduct = () => {
    setAddNewProduct((prev) => [...prev, prev.length]);
  };

  const onSubmit = async (data: CreateSaleDto) => {
    try {
      const newSaleToCreate = {
        ...data
      };
      const result = await SaleService.createSale(newSaleToCreate);
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
      setError(key as keyof CreateSaleDto, { message })
    );
    const resultErrorReponse = manageApiErrorResponse(resultError);
    const message = getErrorMessage(resultErrorReponse);
    console.warn(message);
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative bg-white rounded-lg shadow w-full">
            <div className="flex py-1 px-6 rounded-t border-b text-center">
              <TitleCard text="Cadastrar Venda" />
            </div>
            <div className="gap-2 p-6 space-y-3">
              {addNewProduct.map((_, index) => (
                <DataProducts key={index} newProduct={handleClickNewProduct} />
              ))}
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-start text-base">Dados do comprador</p>
                <div className="flex flex-col gap-2">
                  <InputForm
                    name="nomeCartao"
                    type="text"
                    placeholder="Digite o nome do cartão"
                    label="Nome do cartão"
                  />
                  <div className="flex items-end gap-3">
                    <InputForm
                      name="numeroCartao"
                      type="text"
                      placeholder="Digite o número do cartão"
                      label="Número do cartão"
                    />
                    <InputForm name="cvv" type="text" placeholder="Digite o CVV" label="CVV" />
                    <InputForm
                      name="dataVencimento"
                      type="date"
                      placeholder="Vencimento"
                      label="Vencimento"
                    />
                  </div>
                  <InputForm
                    className="flex w-full"
                    name="nomeCliente"
                    type="name"
                    placeholder="Digite o nome do cliente"
                    label="Nome do cliente"
                  />
                  <div className="flex flex-row gap-3">
                    <InputForm
                      name="email"
                      type="email"
                      placeholder="Digite o e-mail"
                      label="E-mail"
                    />
                    <InputForm
                      name="telefone"
                      type="tel"
                      placeholder="Digite o telefone"
                      label="Telefone"
                    />
                    <InputForm
                      name="endereco"
                      type="text"
                      placeholder="Digite o endereço"
                      label="Endereço"
                    />
                  </div>
                  <div className="flex flex-row items-end gap-3">
                    <InputForm
                      name="bairro"
                      type="text"
                      placeholder="Digite o bairro"
                      label="Bairro"
                    />
                    <SelectForm
                      name="estado"
                      placeholder="Estado"
                      options={selectOptionsStates}
                      control={control}
                    />
                    <InputForm
                      name="cidade"
                      type="text"
                      placeholder="Digite a cidade"
                      label="Cidade"
                    />
                  </div>
                </div>
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

export default NewSaleModal;
