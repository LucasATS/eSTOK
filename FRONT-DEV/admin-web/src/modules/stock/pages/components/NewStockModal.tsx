import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm, { OptionSelect } from '../../../../components/FormComponents/SelectForm';
import { ModalComponent } from '../../../../components/ModalComponent';
import TitleCard from '../../../../components/TitleCard';
import {
  getErrorMessage,
  getFieldErrors,
  manageApiErrorResponse
} from '../../../_shared/helpers/handleApiErrorResponse';
import ProductService from '../../../product/service/ProductService';
import CreateStockDto from '../../dto/Stock/CreateStockDto';
import StockService from '../../service/StockService';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const NewStockModal = ({ isOpen, onClose, onConfirm }: ConfigModalProps) => {
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

  const handleAddNewStock = async () => {
    try {
      const mainFormData = formRef?.current?.getData();

      const newStockToCreate = {
        ...mainFormData
      } as CreateStockDto;
      console.log('newStockToCreate', newStockToCreate);
      const result = await StockService.createStock(newStockToCreate);
      console.log('result', result);
      //SISTEMA DE INTERRUPÇÃO DE PIORIDADE ALTA PARA ERRO
      if (result.data.status === 'erro') {
        toast.error(result.data.motivo);
        throw new Error(result.data.motivo);
      }
      toast.success(result.data.motivo);

      onConfirm();
      onClose();
      clearForm();
    } catch (error) {
      handleErrors(error);
    }
  };

  const handleCancel = () => {
    onClose();
    clearForm();
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
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <Form ref={formRef} onSubmit={handleAddNewStock} className="flex justify-center">
        <div className="relative bg-white rounded-lg shadow w-full">
          <div className="flex items-start py-1 px-6 rounded-t border-b">
            <TitleCard text="Adicionar produto no estoque" />
          </div>
          <div className="p-6 space-y-3">
            <div className="flex flex-row gap-3">
              <SelectForm name="produto" placeholder="Produto" options={productOptions} />
              <InputForm name="unitario" type="number" placeholder="Preço" />
              <InputForm name="quantidade" type="number" placeholder="Quantidade" />
            </div>
            <div className="flex flex-row gap-3">
              <InputForm name="lote" type="text" placeholder="Lote" />
              <InputForm name="data_compra" type="date" placeholder="Data da compra" />
              <InputForm name="validade" type="date" placeholder="Vencimento" />
            </div>
          </div>

          <div className="flex items-center justify-end p-6 space-x-3 rounded-b border-t border-gray-200">
            <Button
              style={{ width: '200px' }}
              type="button"
              variant="cancel"
              onClick={handleCancel}
            >
              Cancelar
            </Button>
            <Button
              style={{ width: '200px' }}
              variant="primary"
              type="button"
              onClick={handleAddNewStock}
              buttonText="Cadastrar"
            />
          </div>
        </div>
      </Form>
    </ModalComponent>
  );
};
