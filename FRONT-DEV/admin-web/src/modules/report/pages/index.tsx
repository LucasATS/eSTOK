import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import Button from '../../../components/Button';
import SelectForm from '../../../components/FormComponents/SelectForm';
import Header from '../../../components/MainLayout/components/Header';
import TitleCard from '../../../components/TitleCard';
import {
  selectOptionsPeriodType,
  selectOptionsProductType,
  selectOptionsReportType
} from '../constants/SelectOption';

export const CreateReport = () => {
  const formRef = useRef<FormHandles>(null);
  const handleAddNewAggregatedHolerite = async () => {
    console.log('criado ou atualizado');
    clearForm();
  };
  const clearForm = () => {
    formRef.current?.reset();
  };
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white justify-start items-start">
        <Header mainText="Relatório" />
      </div>
      <div className="flex flex-col mx-8 bg-white mt-6 rounded-[30px] p-5">
        <Form ref={formRef} onSubmit={handleAddNewAggregatedHolerite}>
          <div>
            <div>
              <TitleCard text="Gerar relatório" />
            </div>
            <div>
              <SelectForm
                name="productType"
                placeholder="Selecione o tipo de relatório"
                options={selectOptionsReportType}
              />
              <SelectForm
                name="productType"
                placeholder="Selecione o produto"
                options={selectOptionsProductType}
              />
              <SelectForm
                name="productType"
                placeholder="Selecione o período"
                options={selectOptionsPeriodType}
              />
            </div>
            <div>
              <Button
                variant="primary"
                type="button"
                onClick={handleAddNewAggregatedHolerite}
                buttonText="Gerar"
              />
            </div>
          </div>
          <div></div>
        </Form>
      </div>
    </div>
  );
};
