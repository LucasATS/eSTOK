import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../../assets/e-stok.png';
import Button from '../../../components/Button';
import InputForm from '../../../components/FormComponents/InputForm';
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
      // integração com o service
      const singInCredentials = formRef.current?.getData() as LoginCredentials;
      console.log('2', singInCredentials);
      await signIn(singInCredentials);
    } catch (resultError) {
      // para caso haja erro as informações abaixo são para retornar a mensagem de acordo com o erro ocorrido
      const fieldsErrors = getFieldErrors(resultError);
      formRef.current?.setErrors(fieldsErrors);
      const resultErrorResponse = manageApiErrorResponse(resultError);
      const resultErrors = manageApiErrorMessages(resultErrorResponse);
      resultErrors.map((resultError) => toast.error(resultError));
    }
  };

  return (
    <div className="flex flex-col items-center p-32 w-full">
      <div className="flex flex-col w-full gap-10">
        <div className="flex flex-col justify-center items-center">
          <Link to="/">
            <img src={logo} className="w-full h-auto py-2" alt="eStok Logo" />
          </Link>
        </div>
        <Form ref={formRef} onSubmit={handleLogin}>
          <div className="flex flex-col w-full gap-5">
            <InputForm name="login" type="text" placeholder="Digite o e-mail" />
            <InputForm name="senha" type="password" placeholder="Digite a senha" />
            <Button type="submit" variant="primary" buttonText="Acessar" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
