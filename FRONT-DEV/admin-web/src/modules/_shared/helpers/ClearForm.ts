import { FormHandles } from '@unform/core';
import { useRef } from 'react';

const formRef = useRef<FormHandles>(null);

export const clearForm = () => {
  formRef.current?.reset();
};
