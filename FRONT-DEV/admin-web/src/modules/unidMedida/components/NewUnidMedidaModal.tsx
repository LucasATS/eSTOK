import { Form } from '@unform/web';
import { ModalComponent } from '../../../components/ModalComponent';
import TitleCard from '../../../components/TitleCard';
import InputForm from '../../../components/FormComponents/InputForm';
import Button from '../../../components/Button';
import { useRef } from 'react';
import { FormHandles } from '@unform/core';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const NewUnidMedidaModal = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
  const formRef = useRef<FormHandles>(null);

  const handleAddNewUnidMedida = () => {
    console.log('Cadastrado com sucesso');
    onConfirm();
    clearForm();
  };
  const handleCancel = () => {
    onClose();
    clearForm();
  };

  const clearForm = () => {
    formRef?.current?.reset;
  };
  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <Form ref={formRef} onSubmit={handleAddNewUnidMedida}>
        <div>
          <div>
            <TitleCard text="Cadastrar Unidade de Medida" />
          </div>
          <div>
            <InputForm name="nomeUnidade" type="text" placeholder="Unidade de Medida" />
          </div>
          <div>
            <Button variant="cancel" type="button" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              type="button"
              onClick={handleAddNewUnidMedida}
              buttonText="Salvar"
            />
          </div>
        </div>
      </Form>
    </ModalComponent>
  );
};

export default NewUnidMedidaModal;
