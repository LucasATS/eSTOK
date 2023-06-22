interface CreateLowStockDto {
  motivo: string;
  observacao: string;
  quantidade: number;
  produto: string;
  validade: Date;
  lote: string;
}
export default CreateLowStockDto;
