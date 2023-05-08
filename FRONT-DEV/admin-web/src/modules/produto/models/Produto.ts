interface Produto {
  nome: string;
  categoria: string;
  uniMedida: number;
  tipoProduto: string;
  fundibilidade: boolean;
  estocavel: boolean;
  tamanho: number;
  descricao?: string;
}

export default Produto;
