interface ResultStockDto {
  status: string;
  motivo: string;
  produto: string;
  categoria: string;
  quantidade: number;
  unitario: number;
  data_compra: Date;
  validade: Date;
  total: number;
  lote: string;
}

export default ResultStockDto;
