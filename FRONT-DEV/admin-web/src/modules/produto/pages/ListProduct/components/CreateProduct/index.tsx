import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../../../../components/Button';
import InputForm from '../../../../../../components/FormComponents/InputForm';
import SelectForm from '../../../../../../components/FormComponents/SelectForm';
import SwitchForm from '../../../../../../components/FormComponents/SwitchForm';
import TextareaForm from '../../../../../../components/FormComponents/TextAreaForm';

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

type ParamsProps = { id: string };

const CreateProduct = () => {
  const formRef = useRef<FormHandles>(null);
  const [castabilityIsActive, setCastabilityIsActive] = useState(false);
  const [stockableIsActive, setStockableIsActive] = useState(false);

  const { id } = useParams<ParamsProps>();

  const createOrUpdateProduct = async () => {
    console.log('criado ou atualizado');
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

  return (
    <div className="flex flex-col items-center w-full">
      <Form ref={formRef} onSubmit={createOrUpdateProduct}>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-center w-full">
            <div>Foto</div>
          </div>
          <div className="flex flex-row items-center w-full gap-4">
            <InputForm name="productName" type="text" placeholder="Nome do produto" />
            <SelectForm name="category" placeholder="Categoria" options={selectOptionsCategory} />
            <SelectForm name="unit" placeholder="Unidade de medida" options={selectOptionsUnit} />
          </div>

          <div className="flex flex-row w-full gap-4">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-row gap-9 w-full">
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
              <div className="flex flex-row gap-3 w-full">
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
            </div>
            <div className="flex items-center justify-center w-full">
              <TextareaForm
                placeholder="Descrição do produto"
                name="description"
                cols={2}
                rows={4}
                maxLength={1000}
              />
            </div>
          </div>
        </div>
      </Form>
      <div className="flex w-full justify-center items-center px-6 py-5 gap-3">
        <Button
          variant="primary"
          buttonText="Cadastrar produto"
          type="button"
          onClick={createOrUpdateProduct}
        />
      </div>
    </div>
  );
};

export default CreateProduct;
