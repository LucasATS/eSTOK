import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm from '../../../../components/FormComponents/SelectForm';
import TextareaForm from '../../../../components/FormComponents/TextAreaForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import { selectOptionsDestockingReason } from '../../../_shared/constants/SelectOption';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const StockOut = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
  const formRef = useRef<FormHandles>(null);

  const clearForm = () => {
    formRef.current?.reset();
  };

  const handleAddNewStockOut = async () => {
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
      <Form ref={formRef} onSubmit={handleAddNewStockOut} className="flex justify-center">
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="flex items-start py-1 px-4 rounded-t border-b">
            <TitleCard text="Baixa de estoque" />
          </div>
          <div className="flex flex-col px-8 py-4 w-full space-y-1 justify-center items-center gap-1">
            <div className="flex flex-row w-full gap-3 justify-center items-center">
              <SelectForm
                name="destockingReason"
                placeholder="Motivo da baixa"
                options={selectOptionsDestockingReason}
              />
              <InputForm name="quantity" type="text" placeholder="Quantidade" />
            </div>
            <TextareaForm
              placeholder="Descrição"
              name="description"
              cols={0}
              rows={3}
              maxLength={500}
            />
          </div>
          <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
            <Button variant="cancel" type="button" onClick={handleCancel} buttonText="Cancelar" />
            <Button
              variant="primary"
              type="button"
              onClick={handleAddNewStockOut}
              buttonText="Confirmar"
            />
          </div>
        </div>
      </Form>
    </ModalComponent>
  );
};
