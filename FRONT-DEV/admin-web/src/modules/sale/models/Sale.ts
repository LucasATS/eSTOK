import BuyerSale from './BuyerSale';
import ProductSale from './ProductSale';

interface Sale {
  id: string;
  comprador: BuyerSale;
  produtos: ProductSale[];
  total: number;
}

export default Sale;

export type FlattenedSaleItem = {
  id: string;
  nome: string;
  categoria: string;
  produto: string;
  quantidade: string;
  preco: number;
  data_compra: string;
};
