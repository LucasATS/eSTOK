import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import logo from '../../../assets/e-stok.png';
import Button from '../../../components/Button';
import InputForm from '../../../components/FormComponents/InputForm';
import TitleCard from '../../../components/TitleCard';
import {
  getFieldErrors,
  manageApiErrorMessages,
  manageApiErrorResponse
} from '../../_shared/helpers/handleApiErrorResponse';
import { LoginCredentials, useAuth } from '../contexts/AuthProvider';

const Login = () => {
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);

  const handleLogin = async () => {
    try {
      const singInCredentials = formRef.current?.getData() as LoginCredentials;
      await signIn(singInCredentials);
    } catch (resultError) {
      const fieldsErrors = getFieldErrors(resultError);
      formRef.current?.setErrors(fieldsErrors);
      const resultErrorResponse = manageApiErrorResponse(resultError);
      const resultErrors = manageApiErrorMessages(resultErrorResponse);
      resultErrors.forEach((resultError) => toast.error(resultError));
    }
  };

  return (
    <div className="flex flex-col justify-center gap-4 bg-neutral-200 h-screen">
      <div className="bg-white p-16 xl:mx-96 md:mx-60 mx-14 rounded-[30px] flex flex-col justify-center items-center">
        <Form
          ref={formRef}
          onSubmit={handleLogin}
          className="w-full flex flex-col justify-center items-center xl:px-4 px-0 gap-6"
        >
          <div className="flex flex-col justify-center items-center">
            <img src={logo} alt="logo" />
            <TitleCard text="Login" />
          </div>
          <div className="flex flex-col w-full gap-4">
            <InputForm name="email" type="text" placeholder="Digite o e-mail" />
            <InputForm name="password" type="password" placeholder="Digite a senha" />
          </div>
          <Button
            variant="primary"
            buttonText="Acessar"
            className=" flex w-full justify-center rounded-[30px]"
          />
        </Form>
      </div>
    </div>
  );
};

export default Login;
