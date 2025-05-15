import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm, { OptionSelect } from '../../../../components/FormComponents/SelectForm';
import ProductService from '../../../product/service/ProductService';

interface Props {
  newProduct: () => void;
}

const DataProducts = ({ newProduct }: Props) => {
  const { control, handleSubmit } = useForm();
  const [productOptions, setProductOptions] = useState<OptionSelect[]>([]);

  const onSubmit = (data: any) => {
    console.log('Dados do formulário:', data);
  };

  const getProductOptions = async () => {
    const products = await ProductService.paginateOptionsProduct({
      limit: 10,
      isActive: true
    });
    const productOptions = products.length;
    if (productOptions > 0) {
      const optionsProducts = products.map((product) => {
        return {
          value: product.ID,
          label: product.Produto,
          status: product.Status
        };
      }) as OptionSelect[];
      setProductOptions(optionsProducts);
    }
  };

  useEffect(() => {
    getProductOptions();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-2">
      <span className="font-semibold text-center text-base">Dados do produto</span>
      <div className="space-y-3 flex gap-3">
        <div className="flex mt-8 gap-3">
          <SelectForm
            name="selectProduto"
            placeholder="Produto"
            options={productOptions}
            control={control}
          />
          <InputForm name="tamanhoProduto" type="text" placeholder="Tamanho" />
          <InputForm name="quantidadee" type="text" placeholder="Quantidade" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 font-medium">Venda</span>
          <InputForm name="data_compra" type="date" placeholder="Venda" />
        </div>
      </div>
      <div className="flex mb-2 mt-2">
        <Button
          style={{ width: '150px' }}
          variant="primary"
          type="submit"
          buttonText="Adicionar"
          onClick={newProduct}
        />
      </div>
    </form>
  );
};

export default DataProducts;
