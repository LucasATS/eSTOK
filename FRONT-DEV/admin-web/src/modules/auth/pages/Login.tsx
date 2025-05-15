import { useForm } from 'react-hook-form';
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
  const { signIn } = useAuth();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors }
  } = useForm<LoginCredentials>();

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
      <div className="flex flex-col w-full gap-10">
        <div className="flex flex-col justify-center items-center">
          <Link to="/">
            <img src={iconApi + 'e-stok.png'} className="w-full h-auto py-2" alt="eStok Logo" />
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
          <InputForm
            {...register('login')}
            name="login"
            type="text"
            placeholder="Digite o e-mail"
            error={errors.login?.message}
          />
          <InputForm
            {...register('senha')}
            name="senha"
            type="password"
            placeholder="Digite a senha"
            error={errors.senha?.message}
          />
          <Button type="submit" variant="primary" buttonText="Acessar" />
        </form>
      </div>
    </div>
  );
};

export default Login;
