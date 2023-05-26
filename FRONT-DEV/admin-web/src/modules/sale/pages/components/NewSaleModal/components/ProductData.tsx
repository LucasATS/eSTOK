import Button from '../../../../../../components/Button';
import InputForm from '../../../../../../components/FormComponents/InputForm';
import QuantityForm from '../../../../../../components/FormComponents/QuantityForm';
import SelectForm from '../../../../../../components/FormComponents/SelectForm';
import { selectOptionsProduct } from '../../../../../_shared/constants/SelectOption';

const ProductData = () => {
  return (
    <>
      <div className="flex flex-row gap-2">
        <SelectForm
          name="selectProduto"
          placeholder="Selecione o produto"
          options={selectOptionsProduct}
        />
        <InputForm name="tamanhoProduto" type="text" placeholder="Tamanho" />
        <InputForm name="quantidadee" type="number" placeholder="Quantidade" />
        <InputForm name="dataVenda" type="date" placeholder="Data da venda" />
        <div className="flex justify-between h-auto py-4">
          <Button variant="primary" type="button" buttonText="Adicionar" />
        </div>
      </div>
      <QuantityForm />
    </>
  );
};

export default ProductData;
