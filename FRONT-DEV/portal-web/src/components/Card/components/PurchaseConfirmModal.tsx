import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import Button from '../../Button/Button';
import InputForm from '../../FormComponents/InputForm';
import SelectForm from '../../FormComponents/SelectForm';
import { ModalComponent } from '../../ModalComponent';
import TitleCard from '../../TitleCard';

interface ModalConfig {
  isOpen: boolean;
  onClose: () => void;
}

interface SelectOption {
  id: string;
  value: string;
  label: string;
}

const selectProductType: SelectOption[] = [{ id: 'teste', value: 'teste', label: 'oi' }];

export const PurchaseConfirmModal = ({ isOpen, onClose }: ModalConfig) => {
  const formRef = useRef<FormHandles>(null);

  const handleAddNewBuy = () => {
    console.log('Compra confirmada');
    onClose();
    clearForm();
  };

  const handleCancel = () => {
    onClose();
    clearForm();
  };

  const clearForm = () => {
    formRef?.current?.reset();
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <Form ref={formRef} onSubmit={handleAddNewBuy} className="flex justify-center">
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="flex items-start py-1 px-4 rounded-t border-b">
            <TitleCard text="Confirmar Compra" />
          </div>
          <div className="p-6 space-y-3">
            <InputForm name="clientName" placeholder="Nome do Cliente" />
            <InputForm name="clientName" placeholder="E-mail" />
            <InputForm name="clientName" placeholder="Endereço" />
            <InputForm name="clientName" placeholder="Bairro" />
            <SelectForm
              name="productType"
              placeholder="Tipo de produto"
              options={selectProductType}
            />
          </div>
          <div className="px-6 space-y-3 pb-6">
            <p>Tipo de pagamento selecionado:</p>
            <a>Cartão de crédito</a>
          </div>
          <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
            <Button variant="cancel" type="button" onClick={handleCancel} buttonText="Cancelar" />
            <Button
              variant="primary"
              type="button"
              onClick={handleAddNewBuy}
              buttonText="Confirmar"
            />
          </div>
        </div>
      </Form>
    </ModalComponent>
  );
};
