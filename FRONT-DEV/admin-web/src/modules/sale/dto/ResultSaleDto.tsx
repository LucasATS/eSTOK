interface ResultSaleDto {
  id_produto: string;
  quantidade: number;
  unitario: number;
  total: string;
  validade: Date;
  lote: string;
  data_compra: Date;
}

export default ResultSaleDto;
