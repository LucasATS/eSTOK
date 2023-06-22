interface Stock {
  id: string;
  quantidade: number;
  produto: string;
  categoria: string;
  preco: number;
  data_compra: Date;
  vencimento: Date;
  lotes: string;
}

export default Stock;
