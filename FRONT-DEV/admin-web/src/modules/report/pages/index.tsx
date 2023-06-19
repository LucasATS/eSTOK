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
} from '../../_shared/constants/SelectOption';

export const CreateReport = () => {
  const formRef = useRef<FormHandles>(null);

  const handleAddNewAggregatedHolerite = async () => {
    console.log('criado');
    clearForm();
  };

  const clearForm = () => {
    formRef.current?.reset();
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white justify-start items-start px-6">
        <Header mainText="Relatório" />
      </div>
      <div className="flex flex-col mx-8 bg-white text-center mt-6 rounded-[30px] p-5">
        <TitleCard text="Gerar Relatório" />
        <Form
          ref={formRef}
          onSubmit={handleAddNewAggregatedHolerite}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-row gap-2">
            <SelectForm
              name="productType"
              placeholder="Tipo de Relatório"
              options={selectOptionsReportType}
            />
            <SelectForm
              name="productType"
              placeholder="Produto"
              options={selectOptionsProductType}
            />
            <SelectForm
              name="productType"
              placeholder="Período"
              options={selectOptionsPeriodType}
            />
          </div>
          <div className="flex justify-end">
            <Button
              variant="primary"
              style={{ width: '200px' }}
              type="button"
              onClick={handleAddNewAggregatedHolerite}
              buttonText="Gerar Relatório"
            />
          </div>
        </Form>
      </div>
    </div>
  );
};
