interface ResultProductDto {
  status: string;
  motivo: string;
  nome: string;
  categoria: string;
  unidade: string;
  tp_produto: string;
  tamanho: number;
  foto: File[];
  descricao?: string;
}

export default ResultProductDto;
