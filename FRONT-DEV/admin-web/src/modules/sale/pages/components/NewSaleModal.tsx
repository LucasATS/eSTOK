import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm from '../../../../components/FormComponents/SelectForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import { selectOptionsProduct, selectOptionsStates } from '../../../_shared/constants/SelectOption';
import CreateSaleDto from '../../dto/CreateSaleDto';

import SaleService from '../../service/SaleService';
import toast from 'react-hot-toast';
import {
  getErrorMessage,
  getFieldErrors,
  manageApiErrorResponse
} from '../../../_shared/helpers/handleApiErrorResponse';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const NewSaleModal = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
  const formRef = useRef<FormHandles>(null);

  const handleAddSale = async () => {
    try {
      // integração com o service
      const mainFormData = formRef?.current?.getData();
      const newSaleToCreate = {
        ...mainFormData
      } as CreateSaleDto;

      const result = await SaleService.createSale(newSaleToCreate);

      toast.success(result.message);
      console.log(result.message);

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
    toast.error(error);
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <Form ref={formRef} onSubmit={handleAddSale}>
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="flex items-start py-1 px-4 rounded-t border-b">
            <TitleCard text="Cadastrar Venda" />
          </div>
          <div className="gap-2 p-6 space-y-3">
            <div className="flex flex-col">
              <p className="font-semibold text-base">Dados do produto</p>
              <div className="flex flex-wrap gap-2">
                <SelectForm
                  name="selectProduto"
                  placeholder="Selecione o produto"
                  options={selectOptionsProduct}
                />
                <InputForm name="tamanhoProduto" type="text" placeholder="Tamanho do produto" />
                <InputForm name="quantidadee" type="text" placeholder="Quantidade" />
                <InputForm name="dataVenda" type="date" placeholder="Data da venda" />
                <div className="flex md:px-4 justify-between h-auto py-4 px-1">
                  <Button variant="primary" type="button" buttonText="Adicionar" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-base">Dados do comprador</p>
              <InputForm name="nomeCartao" type="text" placeholder="Nome no cartão" />
              <div className="flex flex-row gap-3">
                <InputForm name="numeroCartao" type="text" placeholder="Numero no cartão" />
                <InputForm name="dataVencimento" type="date" placeholder="Data de vencimento" />
                <InputForm name="cvv" type="text" placeholder="CVV" />
              </div>
              <InputForm name="nomeCliente" type="name" placeholder="Nome do cliente" />
              <div className="flex flex-row gap-3">
                <InputForm name="email" type="email" placeholder="E-mail" />
                <InputForm name="telefone" type="tel" placeholder="Telefone" />
              </div>
              <div className="flex flex-row gap-3">
                <InputForm name="endereco" type="text" placeholder="Endereço" />
                <InputForm name="bairro" type="text" placeholder="Bairro" />
              </div>
              <div className="flex flex-row gap-3">
                <SelectForm name="estado" placeholder="Estado" options={selectOptionsStates} />
                <InputForm name="cidade" type="text" placeholder="Cidade" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
            <Button type="button" variant="cancel" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              type="button"
              buttonText="Cadastrar"
              onClick={handleAddSale}
            />
          </div>
        </div>
      </Form>
    </ModalComponent>
  );
};

export default NewSaleModal;
