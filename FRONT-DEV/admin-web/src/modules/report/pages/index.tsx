import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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
  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = useForm<CreateReportDto>();

  const [productOptions, setProductOptions] = useState<OptionSelect[]>([]);

  const getProductOptions = async () => {
    const products = await ProductService.paginateOptionsProduct({
      limit: 10,
      isActive: true
    });
    if (products.length > 0) {
      const optionsProducts = products.map((product) => ({
        value: product.id,
        label: product.produto,
        status: product.status
      })) as OptionSelect[];
      setProductOptions(optionsProducts);
    }
  };

  const handleAddNewReport = async (data: CreateReportDto) => {
    try {
      const result = await ReportService.createReport(data);
      if (result.data.status === 'erro') {
        toast.error(result.data.motivo);
        throw new Error(result.data.motivo);
      }
      toast.success(result.data.motivo);
      reset();
    } catch (error) {
      handleErrors(error);
    }
  };

  const handleErrors = (resultError: unknown) => {
    const fieldsErrors = getFieldErrors(resultError);
    Object.entries(fieldsErrors).forEach(([field, message]) => {
      setError(field as keyof CreateReportDto, { message });
    });
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
        <form onSubmit={handleSubmit(handleAddNewReport)} className="flex flex-col gap-6">
          <div className="flex flex-row gap-2">
            <SelectForm
              name="tp_relatorio"
              placeholder="Tipo de Relatório"
              options={selectOptionsReportType}
              control={control}
              error={errors.descricao?.message}
            />
            <SelectForm
              name="produto"
              placeholder="Produto"
              options={productOptions}
              control={control}
              error={errors.descricao?.message}
            />
            <SelectForm
              name="periodo"
              placeholder="Período"
              options={selectOptionsPeriodType}
              control={control}
              error={errors.descricao?.message}
            />
          </div>
          <div className="flex justify-end">
            <Button
              variant="primary"
              style={{ width: '200px' }}
              type="submit"
              buttonText="Gerar Relatório"
            />
          </div>
        </form>
      </div>
      <ToastCustom />
    </div>
  );
};

export default CreateReport;
