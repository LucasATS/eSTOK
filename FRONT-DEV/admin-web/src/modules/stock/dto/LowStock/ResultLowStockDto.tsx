interface ResultLowStockDto {
  status: string;
  motivo: string;
  produto: string;
  observacao: string;
  quantidade: number;
  validade: Date;
  lote: string;
}
export default ResultLowStockDto;
