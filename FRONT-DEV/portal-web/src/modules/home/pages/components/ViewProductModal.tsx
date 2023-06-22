import { FormHandles } from '@unform/core';
import { X } from 'heroicons-react';
import { useRef } from 'react';
import Button from '../../../../components/Button/Button';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import QuantityProduct from './QuantityProduct';

interface ModalConfig {
  isOpen: boolean;
  onClose: () => void;
}

export const ViewProductModal = ({ isOpen, onClose }: ModalConfig) => {
  const formRef = useRef<FormHandles>(null);

  const handleClickAddToCard = () => {
    console.log('Adicionado ao carrinho');
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
      <div className="flex justify-center">
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="flex flex-col mt-3 px-3">
            <div className="flex justify-end">
              <X
                className="text-stone-500 hover:text-stone-600 cursor-pointer"
                onClick={handleCancel}
              />
            </div>
            <div className="flex flex-row justify-between mx-3 space-y-3 p-3 gap-4">
              <div className="flex w-1/2 h-full">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="flex flex-col">
                <TitleCard text="Blusa de Cetim" />
                <div className="flex flex-col gap-3">
                  <p>Tecido: Não elástico</p>
                  <p>Material: Tecido</p>
                  <p>Composição: 95% Poliéster, 5% Elastano</p>
                  <p>Instruções de manutenção: Lavagem de máquina ou lavágem profissional a seco</p>
                  <QuantityProduct />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end p-5 space-x-3 rounded-b border-t border-gray-200">
            <Button
              buttonText="Adicionar ao carrinho"
              variant="primary"
              onClick={handleClickAddToCard}
            />
          </div>
        </div>
      </div>
    </ModalComponent>
  );
};
