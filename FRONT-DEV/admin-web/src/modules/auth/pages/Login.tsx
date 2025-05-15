import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import InputForm from '../../../components/FormComponents/InputForm';
import {
  getFieldErrors,
  manageApiErrorMessages,
  manageApiErrorResponse
} from '../../_shared/helpers/handleApiErrorResponse';
import { iconApi } from '../../_shared/services/iconApi';
import { LoginCredentials, useAuth } from '../contexts/AuthProvider';

const Login = () => {
  const methods = useForm<LoginCredentials>();
  const {
    handleSubmit,
    setError,
    formState: { errors }
  } = methods;

  const { signIn } = useAuth();

  const onSubmit = async (data: LoginCredentials) => {
    try {
      await signIn(data);
    } catch (error) {
      const fieldsErrors = getFieldErrors(error);
      Object.entries(fieldsErrors).forEach(([field, message]) => {
        setError(field as keyof LoginCredentials, {
          type: 'manual',
          message
        });
      });

      const resultErrorResponse = manageApiErrorResponse(error);
      const resultErrors = manageApiErrorMessages(resultErrorResponse);
      resultErrors.map((errMsg) => toast.error(errMsg));
    }
  };

  return (
    <div className="flex flex-col items-center p-32 w-full">
      <div className="flex flex-col h-full w-1/2 p-10 gap-10 justify-center items-center bg-white rounded-lg shadow-md">
        <div className="flex flex-col">
          <Link to="/">
            <img src={iconApi + 'e-stok.png'} className="w-full h-auto py-2" alt="eStok Logo" />
          </Link>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
            <InputForm
              name="login"
              type="text"
              placeholder="Digite o e-mail"
              error={errors.login?.message}
            />
            <InputForm
              name="senha"
              type="password"
              placeholder="Digite a senha"
              error={errors.senha?.message}
            />
            <Button type="submit" variant="primary" buttonText="Acessar" />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Login;
