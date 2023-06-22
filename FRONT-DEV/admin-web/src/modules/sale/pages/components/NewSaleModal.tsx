import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef, useState } from 'react';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm from '../../../../components/FormComponents/SelectForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import { selectOptionsStates } from '../../../_shared/constants/SelectOption';
import CreateSaleDto from '../../dto/CreateSaleDto';

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
  const formRef = useRef<FormHandles>(null);
  const [addNewProduct, setAddNewProduct] = useState();

  const handleClickNewProduct = () => {
    // setAddNewProduct(true);
  };

  const handleAddSale = async () => {
    try {
      const mainFormData = formRef?.current?.getData();
      const newSaleToCreate = {
        ...mainFormData
      } as CreateSaleDto;
      const result = await SaleService.createSale(newSaleToCreate);
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

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <Form ref={formRef} onSubmit={handleAddSale}>
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="flex py-1 px-6 rounded-t border-b text-center">
            <TitleCard text="Cadastrar Venda" />
          </div>
          <div className="gap-2 p-6 space-y-3">
            {/* {addNewProduct.map((add: any) => { */}
            <DataProducts newProduct={handleClickNewProduct} />
            {/* })} */}
            <div className="flex flex-col">
              <p className="font-semibold mb-3 text-center text-base">Dados do comprador</p>
              <InputForm
                className="mb-2"
                name="nomeCartao"
                type="text"
                placeholder="Nome no cartão"
              />
              <div className="flex mb-2 flex-row gap-3">
                <InputForm name="numeroCartao" type="text" placeholder="Numero no cartão" />
                <InputForm name="dataVencimento" type="date" placeholder="Data de vencimento" />
                <InputForm name="cvv" type="text" placeholder="CVV" />
              </div>
              <InputForm
                className="mb-2"
                name="nomeCliente"
                type="name"
                placeholder="Nome do cliente"
              />
              <div className="flex flex-row mb-2 gap-3">
                <InputForm name="email" type="email" placeholder="E-mail" />
                <InputForm name="telefone" type="tel" placeholder="Telefone" />
              </div>
              <div className="flex flex-row mb-2 gap-3">
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
