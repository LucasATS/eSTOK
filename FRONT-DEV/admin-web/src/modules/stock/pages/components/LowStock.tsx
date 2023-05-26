import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm from '../../../../components/FormComponents/SelectForm';
import TextareaForm from '../../../../components/FormComponents/TextAreaForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import { selectOptionsProductType } from '../../../_shared/constants/SelectOption';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const LowStock = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
  const formRef = useRef<FormHandles>(null);
  const clearForm = () => {
    formRef.current?.reset();
  };
  const handleAddNewLowStock = async () => {
    console.log('criado ou atualizado');
    onConfirm();
    onClose();
    clearForm();
  };

  const handleCancel = () => {
    onClose();
    clearForm();
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <Form ref={formRef} onSubmit={handleAddNewLowStock} className="flex justify-center">
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="flex items-start py-1 px-4 rounded-t border-b">
            <TitleCard text="Baixa de estoque" />
          </div>
          <div className="flex ">
            <div className="p-6 w-full space-y-3">
              <SelectForm
                name="productType"
                placeholder="Selecione o motivo"
                options={selectOptionsProductType}
              />
              <InputForm name="productName" type="text" placeholder="Quantidade" />
            </div>
            <div className="flex relative h-32 w-full m-6">
              <TextareaForm
                placeholder="Descrição"
                name="description"
                cols={2}
                rows={4}
                maxLength={1000}
              />
            </div>
          </div>

          <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
            <Button variant="cancel" type="button" onClick={handleCancel} buttonText="Cancelar" />
            <Button
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
