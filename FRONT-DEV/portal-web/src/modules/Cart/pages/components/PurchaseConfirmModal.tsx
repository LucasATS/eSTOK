import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import Button from '../../../../components/Button/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm from '../../../../components/FormComponents/SelectForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';

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
            <InputForm name="email" placeholder="E-mail" />
            <InputForm name="address" placeholder="Endereço" />
            <InputForm name="neighborhood" placeholder="Bairro" />
            <SelectForm
              name="productType"
              placeholder="Tipo de produto"
              options={selectProductType}
            />
            <div className="flex flex-row items-center gap-1">
              <p>Tipo de pagamento:</p>
              <p className="underline font-bold">Cartão de crédito</p>
            </div>
            <div className="flex flex-row">
              <InputForm name="cartName" placeholder="Nome no cartão" />
              <InputForm name="cartNumber" placeholder="Número do cartão" />
              <InputForm name="expirationDate" type="date" placeholder="Data de Vencimento" />
              <InputForm name="cartCode" placeholder="CVV" />
            </div>
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
