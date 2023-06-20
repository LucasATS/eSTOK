import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import Button from '../../../components/Button';
import SelectForm from '../../../components/FormComponents/SelectForm';
import Header from '../../../components/MainLayout/components/Header';
import TitleCard from '../../../components/TitleCard';
import {
  selectOptionsPeriodType,
  selectOptionsProductType,
  selectOptionsReportType
} from '../../_shared/constants/SelectOption';
import {
  getErrorMessage,
  getFieldErrors,
  manageApiErrorResponse
} from '../../_shared/helpers/handleApiErrorResponse';
import CreateReportDto from '../dto/CreateReportDto';
import ReportService from '../service/ReportService';

export const CreateReport = () => {
  const formRef = useRef<FormHandles>(null);

  const handleAddNewReport = async () => {
    try {
      const mainFormData = formRef?.current?.getData();
      const newReportToCreate = {
        ...mainFormData
      } as CreateReportDto;

      const result = await ReportService.createReport(newReportToCreate);

      toast.success(result.message);
      console.log('criado');
      clearForm();
    } catch (error) {
      handleErrors(error);
    }
  };

  const clearForm = () => {
    formRef.current?.reset();
  };

  const handleErrors = (resultError: unknown) => {
    const fieldsErrors = getFieldErrors(resultError);
    formRef.current?.setErrors(fieldsErrors);
    const resultErrorReponse = manageApiErrorResponse(resultError);
    const error = getErrorMessage(resultErrorReponse);
    toast.error(error);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white justify-start items-start px-6">
        <Header mainText="Relatório" />
      </div>
      <div className="flex flex-col mx-8 bg-white text-center mt-6 rounded-[30px] p-5">
        <TitleCard text="Gerar Relatório" />
        <Form ref={formRef} onSubmit={handleAddNewReport} className="flex flex-col gap-6">
          <div className="flex flex-row gap-2">
            <SelectForm
              name="reportType"
              placeholder="Tipo de Relatório"
              options={selectOptionsReportType}
            />
            <SelectForm name="Product" placeholder="Produto" options={selectOptionsProductType} />
            <SelectForm name="Period" placeholder="Período" options={selectOptionsPeriodType} />
          </div>
          <div className="flex justify-end">
            <Button
              variant="primary"
              style={{ width: '200px' }}
              type="button"
              onClick={handleAddNewReport}
              buttonText="Gerar Relatório"
            />
          </div>
        </Form>
      </div>
    </div>
  );
};
