import { FormHandles } from '@unform/core';
import { useRef } from 'react';
import { Form } from 'react-router-dom';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/Form/InputForm';
import { LoginCredentials, useAuth } from '../../contexts/AuthProvider';

const Login = () => {
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles | any>(null);

  const handleLogin = async () => {
    try {
      const signInCredentials = formRef.current?.getData() as LoginCredentials;
      await signIn(signInCredentials);
    } catch (error) {}
  };

  return (
    <div className="lg:w-1/2 w-full flex flex-col gap-4">
      <div className="rounded border border-teal-500 border-dashed p-4 ">
        <p className="text-xl font-medium mb-4">Primeiro acesso?</p>
        <p className="text-md mb-5">Caso você seja um colaborador e ainda não criou seu usuário</p>
      </div>

      <div className="rounded border border-teal-500 border-dashed p-4">
        <Form ref={formRef} onSubmit={handleLogin}>
          <p className="text-xl font-medium mb-5">Entrar</p>
          <div className="mb-4 ">
            <InputForm name="email" type="email" label="E-mail" placeholder="email@example.com" />
            <div className="mb-4"></div>
            <InputForm name="password" type="password" label="Senha" placeholder="Senha" />
            <Button variant="primary">Acessar</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
