interface CreateLowStockDto {
  motivo: string;
  produto: string;
  observacao: string;
  quantidade: number;
  validade: Date;
  lote: string;
}
export default CreateLowStockDto;
