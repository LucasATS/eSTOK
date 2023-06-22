import { useEffect, useState } from 'react';
import Button from '../../../../components/Button';
import InputForm from '../../../../components/FormComponents/InputForm';
import SelectForm, { OptionSelect } from '../../../../components/FormComponents/SelectForm';
import ProductService from '../../../product/service/ProductService';

interface Props {
  newProduct: () => void;
}

const DataProducts = ({ newProduct }: Props) => {
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
    <div className="flex flex-wrap gap-2">
      <span className="font-semibold mb-3 text-center text-base">Dados do produto</span>
      <SelectForm name="selectProduto" placeholder="Produto" options={productOptions} />
      <InputForm name="tamanhoProduto" type="text" placeholder="Tamanho" />
      <InputForm name="quantidadee" type="text" placeholder="Quantidade" />
      <InputForm name="dataVenda" type="date" placeholder="Data da venda" />
      <div className="flex mb-2 mt-2">
        <Button
          style={{ width: '150px' }}
          variant="primary"
          type="button"
          buttonText="Adicionar"
          onClick={newProduct}
        />
      </div>
    </div>
  );
};

// --------

// function App() {
//   const inputArr = [
//     {
//       type: 'text',
//       id: 1,
//       value: ''
//     }
//   ];

//   const [arr, setArr] = useState(inputArr);

//   const addInput = () => {
//     setArr((s: any) => {
//       return [
//         ...s,
//         {
//           type: 'text',
//           value: ''
//         }
//       ];
//     });
//   };

//   const handleChange = (e: any) => {
//     e.preventDefault();

//     const index = e.target.id;
//     setArr((s) => {
//       const newArr = s.slice();
//       newArr[index].value = e.target.value;

//       return newArr;
//     });
//   };

//   return (
//     <div>
//       <button onClick={addInput}>+</button>
//       {arr.map((item, i) => {
//         return <input onChange={handleChange} value={item.value} key={i} type={item.type} />;
//       })}
//     </div>
//   );
// };
export default DataProducts;
