import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import {
  getErrorMessage,
  getFieldErrors,
  manageApiErrorResponse
} from '../../../_shared/helpers/handleApiErrorResponse';
import CreateCategoryDto from '../../dto/category/CreateCategoryDto';
import CategoryService from '../../service/CategoryService';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewCategoryModal = ({ isOpen, onClose }: ConfigModalProps) => {
  const formMethods = useForm<CreateCategoryDto>();
  const {
    // register,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = formMethods;

  const handleAddNewCategoria = async (data: CreateCategoryDto) => {
    try {
      const result = await CategoryService.createCategory(data);

      if (result.data.status === 'erro') {
        toast.error(result.data.motivo);
        throw new Error(result.data.motivo);
      }

      toast.success(result.message);
      onClose();
      reset();
    } catch (error) {
      const fieldsErrors = getFieldErrors(error);
      // seta os erros no formulário
      Object.entries(fieldsErrors).forEach(([field, message]) => {
        setError(field as keyof CreateCategoryDto, { type: 'manual', message });
      });

      const resultErrorReponse = manageApiErrorResponse(error);
      const errorMsg = getErrorMessage(resultErrorReponse);
      console.warn(errorMsg);
    }
  };

  const handleCancel = () => {
    onClose();
    reset();
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(handleAddNewCategoria)} className="flex justify-center">
          <div className="relative bg-white rounded-lg shadow w-full">
            <div className="flex items-start py-1 px-6 rounded-t border-b">
              <TitleCard text="Cadastrar Categoria" />
            </div>
            <div className="p-6 space-y-3">
              <InputForm
                name="categoria"
                // {...register('descricao', { required: 'Descrição é obrigatória' })}
                type="text"
                placeholder="Nome da Categoria"
                error={errors.descricao?.message}
              />
            </div>
            <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
              <Button
                style={{ width: '200px' }}
                variant="cancel"
                type="button"
                onClick={handleCancel}
              >
                Cancelar
              </Button>
              <Button
                style={{ width: '200px' }}
                variant="primary"
                type="submit"
                buttonText="Cadastrar"
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </ModalComponent>
  );
};

export default NewCategoryModal;
