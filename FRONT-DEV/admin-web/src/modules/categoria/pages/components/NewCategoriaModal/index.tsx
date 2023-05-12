import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { ModalComponent } from '../../../../../components/ModalComponent';
import TitleCard from '../../../../../components/TitleCard';
import { useRef } from 'react';
import InputForm from '../../../../../components/FormComponents/InputForm';
import Button from '../../../../../components/Button';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const NewCategoriaModal = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
  const formRef = useRef<FormHandles>(null);

  const handleAddNewCategoria = () => {
    console.log('Cadastrado com sucesso');
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
      <Form ref={formRef} onSubmit={handleAddNewCategoria} className="flex justify-center">
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="flex items-start py-1 px-4 rounded-t border-b">
            <TitleCard text="Cadastrar categoria" />
          </div>
          <div className="flex-col mx-4">
            <InputForm name="nomeCategoria" type="text" placeholder="Nome da Categoria" />
          </div>
          <br></br>
          <div className="flex md:px-4 justify-between py-4 px-1">
            <Button variant="cancel" type="button" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              type="button"
              onClick={handleAddNewCategoria}
              buttonText="Salvar"
            />
          </div>
        </div>
      </Form>
    </ModalComponent>
  );
};

export default NewCategoriaModal;
