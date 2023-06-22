import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
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
}

export const LowStock = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
  const formRef = useRef<FormHandles>(null);

  const handleAddNewLowStock = async () => {
    try {
      const mainFormData = formRef?.current?.getData();

      const newLowStokToCreate = {
        ...mainFormData
      } as CreateLowStockDto;
      const result = await StockService.createLowStok(newLowStokToCreate);

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

  const clearForm = () => {
    formRef.current?.reset();
  };

  const handleCancel = () => {
    onClose();
    clearForm();
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
      <Form ref={formRef} onSubmit={handleAddNewLowStock} className="flex justify-center">
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="flex items-start py-1 px-6 rounded-t border-b">
            <TitleCard text="Baixa de estoque" />
          </div>
          <div className="flex ">
            <div className="p-6 w-full space-y-3">
              <SelectForm
                name="motivo"
                placeholder="Selecione o motivo"
                options={selectOptionsProductType}
              />
              <InputForm name="quantidade" type="text" placeholder="Quantidade" />
            </div>
            <div className="flex h-38 w-full m-4">
              <TextareaForm
                placeholder="Descrição"
                name="observacao"
                cols={33}
                rows={4}
                maxLength={1000}
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
              type="button"
              onClick={handleAddNewLowStock}
              buttonText="Confirmar"
            />
          </div>
        </div>
      </Form>
    </ModalComponent>
  );
};
