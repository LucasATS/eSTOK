interface BuyerSale {
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  bairro: string;
  uf: string;
  cidade: string;
  nome_cartao: string;
  numero_cartao: number;
  dt_vencimento: Date;
  cvv_e: string;
}

export default BuyerSale;
