import { Paginate } from '../modules/_shared/types/api.types';
import Stock from '../modules/stock/models/Stock';

export const mockListStock: Paginate<Stock> = {
  response: [
    {
      id: '001',
      produto: 'Camiseta Algodão',
      categoria: 'Vestuário',
      quantidade: 100,
      preco: 'R$ 39,90',
      data_compra: '01/04/2025',
      vencimento: '01/04/2027',
      lotes: 'L001'
    },
    {
      id: '002',
      produto: 'Tênis Esportivo',
      categoria: 'Calçados',
      quantidade: 45,
      preco: 'R$ 199,90',
      data_compra: '15/03/2025',
      vencimento: '15/03/2026',
      lotes: 'L002'
    },
    {
      id: '003',
      produto: 'Calça Jeans',
      categoria: 'Vestuário',
      quantidade: 75,
      preco: 'R$ 119,90',
      data_compra: '10/02/2025',
      vencimento: '10/02/2028',
      lotes: 'L003'
    }
  ],
  totalItems: 3,
  currentPage: 1,
  totalPages: 1,
  limit: 10,
  length: 3,
  map: (callback) => {
    return [
      {
        id: '001',
        produto: 'Camiseta Algodão',
        categoria: 'Vestuário',
        quantidade: 100,
        preco: 'R$ 39,90',
        data_compra: '01/04/2025',
        vencimento: '01/04/2027',
        lotes: 'L001'
      },
      {
        id: '002',
        produto: 'Tênis Esportivo',
        categoria: 'Calçados',
        quantidade: 45,
        preco: 'R$ 199,90',
        data_compra: '15/03/2025',
        vencimento: '15/03/2026',
        lotes: 'L002'
      },
      {
        id: '003',
        produto: 'Calça Jeans',
        categoria: 'Vestuário',
        quantidade: 75,
        preco: 'R$ 119,90',
        data_compra: '10/02/2025',
        vencimento: '10/02/2028',
        lotes: 'L003'
      }
    ].map(callback);
  }
};
