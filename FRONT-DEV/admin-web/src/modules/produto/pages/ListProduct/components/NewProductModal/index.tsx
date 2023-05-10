import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../../../../components/Button';
import { DropzoneForm } from '../../../../../../components/FormComponents/DropzoneForm';
import { ImageForm } from '../../../../../../components/FormComponents/ImageForm';
import InputForm from '../../../../../../components/FormComponents/InputForm';
import SelectForm from '../../../../../../components/FormComponents/SelectForm';
import SwitchForm from '../../../../../../components/FormComponents/SwitchForm';
import TextareaForm from '../../../../../../components/FormComponents/TextAreaForm';
import { ModalComponent } from '../../../../../../components/ModalComponent';
import TitleCard from '../../../../../../components/TitleCard';

interface SelectOption {
  id: string;
  value: string;
  label: string;
}

const selectOptionsCategory: SelectOption[] = [
  { id: 'camiseta-feminina', value: 'feminine', label: 'Camiseta feminina' },
  { id: 'camiseta-masculina', value: 'masculine', label: 'Camiseta masculina' }
];

const selectOptionsUnit: SelectOption[] = [
  { id: 'camiseta-feminina', value: 'feminine', label: 'Camiseta feminina' },
  { id: 'camiseta-masculina', value: 'masculine', label: 'Camiseta masculina' }
];

const selectOptionsProductType: SelectOption[] = [
  { id: 'camiseta-feminina', value: 'feminine', label: 'Camiseta feminina' },
  { id: 'camiseta-masculina', value: 'masculine', label: 'Camiseta masculina' }
];

const selectOptionsProductSize: SelectOption[] = [
  { id: 'camiseta-feminina', value: 'feminine', label: 'Camiseta feminina' },
  { id: 'camiseta-masculina', value: 'masculine', label: 'Camiseta masculina' }
];

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

type ParamsProps = { id: string };

export const NewProductModal = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
  const formRef = useRef<FormHandles>(null);
  const [castabilityIsActive, setCastabilityIsActive] = useState(false);
  const [stockableIsActive, setStockableIsActive] = useState(false);
  const [file, setFile] = useState<File>();

  const { id } = useParams<ParamsProps>();

  const handleAddNewAggregatedHolerite = async () => {
    console.log('criado ou atualizado');
    onConfirm();
    clearForm();
  };

  const handleCancel = () => {
    onClose();
    clearForm();
  };

  const clearForm = () => {
    formRef.current?.reset();
  };

  const handleCastabilityActive = (value: boolean) => {
    if (value) {
      setCastabilityIsActive(true);
    } else {
      setCastabilityIsActive(false);
    }
    setCastabilityIsActive(value);
  };

  const handleStockableActive = (value: boolean) => {
    if (value) {
      setStockableIsActive(true);
    } else {
      setStockableIsActive(false);
    }
    setStockableIsActive(value);
  };

  const handleProductImage = (file: File) => {
    setFile(file);
  };

  const handleRemoveFile = () => {
    setFile(undefined);
    formRef.current?.reset();
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <Form ref={formRef} onSubmit={handleAddNewAggregatedHolerite} className="flex justify-center">
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="flex items-start py-1 px-4 rounded-t border-b">
            <TitleCard text="Cadastrar Produto" />
          </div>
          <div className="p-6 space-y-3">
            {file && (
              <div className="flex flex-col">
                <ImageForm removeImage={handleRemoveFile} file={file} />
              </div>
            )}
            <DropzoneForm
              name="imageFile"
              onChange={handleProductImage}
              label="selecionar um arquivo .png ou .jpeg"
              acceptFiles={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
            />
            <InputForm name="productName" type="text" placeholder="Nome do produto" />
            <div className="flex md:flex-row flex-col gap-3">
              <SelectForm name="category" placeholder="Categoria" options={selectOptionsCategory} />
              <SelectForm name="unit" placeholder="Unidade de medida" options={selectOptionsUnit} />
            </div>
            <div className="flex md:flex-row flex-col gap-3">
              <SelectForm
                name="productType"
                placeholder="Tipo de produto"
                options={selectOptionsProductType}
              />

              <SwitchForm
                text="Fundibilidade"
                onChange={handleCastabilityActive}
                value={castabilityIsActive}
              />
            </div>

            <div className="flex md:flex-row flex-col gap-3">
              <SelectForm
                name="productSize"
                placeholder="Tamanho do produto"
                options={selectOptionsProductSize}
              />
              <SwitchForm
                text="Estocável"
                onChange={handleStockableActive}
                value={stockableIsActive}
              />
            </div>

            <TextareaForm
              placeholder="Descrição do produto"
              name="description"
              cols={2}
              rows={4}
              maxLength={1000}
            />
          </div>

          <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
            <Button variant="cancel" type="button" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              type="button"
              onClick={handleAddNewAggregatedHolerite}
              buttonText="Salvar"
            />
          </div>
        </div>
      </Form>
    </ModalComponent>
  );
};
