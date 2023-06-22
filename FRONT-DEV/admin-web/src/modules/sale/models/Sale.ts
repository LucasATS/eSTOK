import BuyerSale from './BuyerSale';
import ProductSale from './ProductSale';

interface Sale {
  produtos: ProductSale[];
  comprador: BuyerSale;
  total: number;
}

export default Sale;
