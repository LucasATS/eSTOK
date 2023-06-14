import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm from '../../../../components/FormComponents/SelectForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import { selectOptionsProductType } from '../../../_shared/constants/SelectOption';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const NewStockModal = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
  const formRef = useRef<FormHandles>(null);
  const handleAddNewAggregatedHolerite = async () => {
    console.log('criado ou atualizado');
    onConfirm();
    onClose();
    clearForm();
  };

  const clearForm = () => {
    formRef.current?.reset();
  };
  const handleCancel = () => {
    onClose();
    clearForm();
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <Form ref={formRef} onSubmit={handleAddNewAggregatedHolerite} className="flex justify-center">
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="flex items-start py-1 px-4 rounded-t border-b">
            <TitleCard text="Cadastrar Estoque" />
          </div>
          <div className="p-6 space-y-3">
            <div className="flex flex-row gap-3">
              <SelectForm
                name="productType"
                placeholder="Tipo de produto"
                options={selectOptionsProductType}
              />
              <InputForm name="productName" type="number" placeholder="Preço produto" />
              <InputForm name="quantity" type="number" placeholder="Quantidade" />
            </div>
            <div className="flex flex-row gap-3">
              <InputForm name="datePurchase" type="date" placeholder="Data da compra" />
              <InputForm name="dateDue" type="date" placeholder="Data do vencimento" />
            </div>
          </div>

          <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
            <Button type="button" variant="cancel" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              type="button"
              onClick={handleAddNewAggregatedHolerite}
              buttonText="Cadastrar"
            />
          </div>
        </div>
      </Form>
    </ModalComponent>
  );
};
