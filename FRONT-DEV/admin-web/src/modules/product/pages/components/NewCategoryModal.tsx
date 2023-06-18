import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import CreateCategoryDto from '../../dto/category/CreateCategoryDto';
import ProductService from '../../service/CategoryService';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const NewCategoryModal = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
  const formRef = useRef<FormHandles>(null);

  const handleAddNewCategoria = async () => {
    try {
      const mainFormData = formRef?.current?.getData();
      const newCategoryToCreate = {
        ...mainFormData
      } as CreateCategoryDto;

      const result = await ProductService.createCategory(newCategoryToCreate);
      // console.log('result', result);

      toast.success(result.message);

      onConfirm();
      onClose();
      clearForm();
    } catch (error) {
      // para caso haja erro as informações abaixo são para retornar a mensagem de acordo com o erro ocorrido
    }
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
            <TitleCard text="Cadastrar Categoria" />
          </div>
          <div className="p-6 space-y-3">
            <InputForm name="descricao" type="text" placeholder="Nome da Categoria" />
          </div>
          <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
            <Button variant="cancel" type="button" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              type="button"
              onClick={handleAddNewCategoria}
              buttonText="Cadastrar"
            />
          </div>
        </div>
      </Form>
    </ModalComponent>
  );
};

export default NewCategoryModal;
