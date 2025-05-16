import { Paginate } from '../modules/_shared/types/api.types';
import Product from '../modules/product/models/Product';

export const mockListProducts: Paginate<Product> = {
  response: [
    {
      id: '1',
      produto: 'Água Mineral',
      categoria: 'Bebidas',
      unidade: 5,
      tipo_do_produto: 'Produto Final',
      status: true
    },
    {
      id: '2',
      produto: 'Arroz Branco Tipo 1',
      categoria: 'Alimentos',
      unidade: 10,
      tipo_do_produto: 'Produto Final',
      status: true
    },
    {
      id: '3',
      produto: 'Sabão em Pó',
      categoria: 'Limpeza',
      unidade: 3,
      tipo_do_produto: 'Produto Final',
      status: false
    },
    {
      id: '4',
      produto: 'Sabonete Líquido Corporal',
      categoria: 'Higiene Pessoal',
      unidade: 1,
      tipo_do_produto: 'Produto Final',
      status: false
    }
  ],
  totalItems: 4,
  currentPage: 1,
  totalPages: 1,
  limit: 10,
  length: 4,
  map: (callback) =>
    [
      {
        id: '1',
        produto: 'Água Mineral',
        categoria: 'Bebidas',
        unidade: 5,
        tipo_do_produto: 'Produto Final',
        status: true
      },
      {
        id: '2',
        produto: 'Arroz Branco Tipo 1',
        categoria: 'Alimentos',
        unidade: 10,
        tipo_do_produto: 'Produto Final',
        status: true
      },
      {
        id: '3',
        produto: 'Sabão em Pó',
        categoria: 'Limpeza',
        unidade: 3,
        tipo_do_produto: 'Produto Final',
        status: false
      },
      {
        id: '4',
        produto: 'Sabonete Líquido Corporal',
        categoria: 'Higiene Pessoal',
        unidade: 1,
        tipo_do_produto: 'Produto Final',
        status: false
      }
    ].map(callback)
};
