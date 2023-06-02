import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import Button from '../../../../../components/Button';
import { ModalComponent } from '../../../../../components/ModalComponent';
import TitleCard from '../../../../../components/TitleCard';
import BuyerData from './components/BuyerData';
import ProductData from './components/ProductData';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const NewSaleModal = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
  const formRef = useRef<FormHandles>(null);

  const handleAddSale = async () => {
    console.log('criado ou atualizado');
    onConfirm();
    onClose();
    clearForm();
  };

  const handleCancel = () => {
    onClose();
    clearForm();
  };

  const clearForm = () => {
    formRef.current?.reset();
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
              <ProductData />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-base">Dados do comprador</p>
              <BuyerData />
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
