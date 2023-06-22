interface CreateLowStockDto {
  motivo: string;
  observacao: string;
  quantidade: number;
  produto: string;
  validade: Date;
  lote: string;
  id_produto: string;
}
export default CreateLowStockDto;
