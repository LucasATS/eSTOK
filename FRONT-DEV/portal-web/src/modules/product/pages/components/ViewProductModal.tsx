import Button from '../../../../components/Button/Button';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import { SizeRadio } from './SizeRadio';
import { X } from 'heroicons-react';

interface ModalConfig {
  isOpen: boolean;
  onClose: () => void;
}

export const ViewProductModal = ({ isOpen, onClose }: ModalConfig) => {
  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-center">
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="flex justify-between py-1 px-4 rounded-t border-b">
            <TitleCard text="Blusa de Cetim" />
            <X className="flex justify-end text-default hover:text-gray-400" />
          </div>
          <div className="p-6 space-y-3 flex flex-row gap-4">
            <div>IMAGE</div>
            <div className="flex flex-col">
              <p>Tecido: Não elástico</p>
              <p>Material: Tecido</p>
              <p>Composição: 95% Poliéster, 5% Elastano</p>
              <p>Instruções de manutenção: Lavagem de máquina ou lavágem profissional a seco</p>
              <SizeRadio />
            </div>
          </div>
          <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
            <Button buttonText="Adicionar no carrinho" variant="primary" />
          </div>
        </div>
      </div>
    </ModalComponent>
  );
};
