interface Stock {
  id: string;
  produto: string;
  categoria: string;
  quantidade: number;
  preco: number;
  data_compra: Date;
  vencimento: Date;
  lotes: string;
}

export default Stock;
