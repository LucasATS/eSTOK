export interface SelectOption {
  id: string;
  value: string;
  label: string;
}

export const selectOptionsProductType: SelectOption[] = [
  { id: 'depreciado', value: 'depreciado', label: 'Depreciado' },
  { id: 'vencido', value: 'vencido', label: 'Vencido' }
];

export const selectOptionsStates: SelectOption[] = [
  { id: 'acre', value: 'acre', label: 'AC' },
  { id: 'alagoas', value: 'alagoas', label: 'AL' },
  { id: 'amapá', value: 'amapa', label: 'AP' },
  { id: 'amazonas', value: 'amazonas', label: 'AM' },
  { id: 'bahia', value: 'bahia', label: 'BA' },
  { id: 'ceara', value: 'ceara', label: 'CE' },
  { id: 'distritoFederal', value: 'distritoFederal', label: 'DF' },
  { id: 'espiritoSanto', value: 'espiritoSanto', label: 'ES' },
  { id: 'goias', value: 'goias', label: 'GO' },
  { id: 'maranhao', value: 'maranhao', label: 'MA' },
  { id: 'matoGrosso', value: 'matoGrosso', label: 'MT' },
  { id: 'matoGrossoDoSul', value: 'matoGrossoDoSul', label: 'MS' },
  { id: 'minasGerais', value: 'minasGerais', label: 'MG' },
  { id: 'para', value: 'para', label: 'PA' },
  { id: 'paraiba', value: 'paraiba', label: 'PB' },
  { id: 'parana', value: 'parana', label: 'PR' },
  { id: 'pernambuco', value: 'pernambuco', label: 'PE' },
  { id: 'piaui', value: 'piaui', label: 'PI' },
  { id: 'rioDeJaneiro', value: 'rioDeJaneiro', label: 'RJ' },
  { id: 'rioGrandeDoNorte', value: 'rioGrandeDoNorte', label: 'RN' },
  { id: 'rioGrandeDoSul', value: 'rioGrandeDoSul', label: 'RS' },
  { id: 'rondonia', value: 'rondonia', label: 'RO' },
  { id: 'roraima', value: 'roraima', label: 'RR' },
  { id: 'santaCatarina', value: 'santaCatarina', label: 'SC' },
  { id: 'saoPaulo', value: 'saoPaulo', label: 'SP' },
  { id: 'sergipe', value: 'sergipe', label: 'SE' },
  { id: 'tocantis', value: 'tocantis', label: 'TO' }
];

export const selectOptionsReportType: SelectOption[] = [
  { id: 'vendaConsolidada', value: 'vendaConsolidada', label: 'Vendas Consolidados' },
  { id: 'vendaSite', value: 'vendaSite', label: 'Vendas Site' },
  { id: 'vendasAdmin', value: 'vendasAdmin', label: 'Vendas Administrador' },
  { id: 'baixaProdutos', value: 'baixaProdutos', label: 'Baixas de Produtos' },
  { id: 'entradaProduto', value: 'entradaProduto', label: 'Entradas de Produtos' },
  { id: 'itensEstoque', value: 'itensEstoque', label: 'Itens no Estoque' }
];

export const selectOptionsPeriodType: SelectOption[] = [
  { id: 'periodType', value: 'periodType', label: 'Tipo de Período 1' },
  { id: 'periodType', value: 'periodType', label: 'Tipo de Período 2' }
];

export const selectOptionsProductSize: SelectOption[] = [
  { id: 'productSize', value: 'productSize', label: 'Tamanho do Produto 1' },
  { id: 'productSize', value: 'productSize', label: 'Tamanho do Produto 2' }
];
