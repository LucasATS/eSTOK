interface ResultProductDto {
  nome: string;
  categoria: string;
  unidade: number;
  tp_produto: string;
  tamanho: number;
  foto: File[];
  descricao?: string;
}

export default ResultProductDto;
