interface CreateProductDto {
  nome_produto: string;
  categoria: string;
  unidade: string;
  tp_produto: string;
  tamanho: number;
  foto?: string;
  descricao?: string;
}

export default CreateProductDto;
