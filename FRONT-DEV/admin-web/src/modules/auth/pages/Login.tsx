import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import iconApi from '../../../assets/e-stok.png';
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import InputForm from '../../../components/FormComponents/InputForm';
import {
  getFieldErrors,
  manageApiErrorMessages,
  manageApiErrorResponse
} from '../../_shared/helpers/handleApiErrorResponse';
// import { iconApi } from '../../_shared/services/iconApi';
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
    <Container className="flex flex-col justify-center items-center">
      <div className="flex flex-col h-auto w-full md:w-[450px] lg:w-[560px] px-10 py-14 md:p-10 gap-10 justify-center items-center bg-white md:rounded-lg md:shadow-md">
        <div className="flex flex-col">
          <Link to="/">
            <img src={iconApi} className="w-full h-16 py-2" alt="eStok Logo" />
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
    </Container>
  );
};

export default Login;
