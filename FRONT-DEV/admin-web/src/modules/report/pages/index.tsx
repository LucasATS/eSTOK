import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from '../../../components/Button';
import SelectForm, { OptionSelect } from '../../../components/FormComponents/SelectForm';
import HeaderTitle from '../../../components/MainLayout/components/HeaderTitle';
import TitleCard from '../../../components/TitleCard';
import ToastCustom from '../../../components/ToastCustom';
import {
  selectOptionsPeriodType,
  selectOptionsReportType
} from '../../_shared/constants/SelectOption';
import {
  getErrorMessage,
  getFieldErrors,
  manageApiErrorResponse
} from '../../_shared/helpers/handleApiErrorResponse';
import ProductService from '../../product/service/ProductService';
import CreateReportDto from '../dto/CreateReportDto';
import ReportService from '../service/ReportService';

export const CreateReport = () => {
  const formRef = useRef<FormHandles>(null);
  const [productOptions, setProductOptions] = useState<OptionSelect[]>([]);

  const getProductOptions = async () => {
    const products = await ProductService.paginateOptionsProduct({
      limit: 10,
      isActive: true
    });
    const productOptions = products.length;
    if (productOptions > 0) {
      const optionsProducts = products.map((product) => {
        return {
          value: product.id,
          label: product.produto,
          status: product.status
        };
      }) as OptionSelect[];

      setProductOptions(optionsProducts);
    }
  };

  const handleAddNewReport = async () => {
    try {
      const mainFormData = formRef?.current?.getData();
      const newReportToCreate = {
        ...mainFormData
      } as CreateReportDto;

      const result = await ReportService.createReport(newReportToCreate);
      //SISTEMA DE INTERRUPÇÃO DE PIORIDADE ALTA PARA ERRO
      if (result.data.status === 'erro') {
        toast.error(result.data.motivo);
        throw new Error(result.data.motivo);
      }
      toast.success(result.data.motivo);
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
    console.warn(error);
  };

  useEffect(() => {
    getProductOptions();
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white justify-start items-start px-6">
        <HeaderTitle mainText="Relatório" />
      </div>
      <div className="flex flex-col mx-8 bg-white mt-6 rounded-[30px] p-5">
        <div className="text-center">
          <TitleCard text="Gerar Relatório" />
        </div>
        <Form ref={formRef} onSubmit={handleAddNewReport} className="flex flex-col gap-6">
          <div className="flex flex-row gap-2">
            <SelectForm
              name="reportType"
              placeholder="Tipo de Relatório"
              options={selectOptionsReportType}
            />
            <SelectForm name="Product" placeholder="Produto" options={productOptions} />
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
      <ToastCustom />
    </div>
  );
};
