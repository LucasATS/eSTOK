interface Stock {
  id: string;
  quantidade: number;
  produto: string;
  categoria: string;
  // preco: number;
  preco: string;
  // data_compra: Date;
  data_compra: string;
  // vencimento: Date;
  vencimento: string;
  lotes: string;
}

export default Stock;
