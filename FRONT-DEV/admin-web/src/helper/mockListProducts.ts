import { Paginate } from '../modules/_shared/types/api.types';
import Product from '../modules/product/models/Product';

export const mockListProducts: Paginate<Product> = {
  response: [
    {
      id: '1',
      produto: 'Água Mineral',
      categoria: 'Bebidas',
      unidade: 'Litro (L)',
      tipo_do_produto: 'Produto Final',
      status: true
    },
    {
      id: '2',
      produto: 'Arroz Branco Tipo 1',
      categoria: 'Alimentos',
      unidade: 'Quilo (Kg)',
      tipo_do_produto: 'Produto Final',
      status: true
    },
    {
      id: '3',
      produto: 'Sabão em Pó',
      categoria: 'Limpeza',
      unidade: 'Quilo (Kg)',
      tipo_do_produto: 'Produto Final',
      status: false
    }
  ],
  totalItems: 3,
  currentPage: 1,
  totalPages: 1,
  limit: 10,
  length: 3,
  map: (callback) =>
    [
      {
        id: '1',
        produto: 'Água Mineral',
        categoria: 'Bebidas',
        unidade: 'Litro (L)',
        tipo_do_produto: 'Produto Final',
        status: true
      },
      {
        id: '2',
        produto: 'Arroz Branco Tipo 1',
        categoria: 'Alimentos',
        unidade: 'Quilo (Kg)',
        tipo_do_produto: 'Produto Final',
        status: true
      },
      {
        id: '3',
        produto: 'Sabão em Pó',
        categoria: 'Limpeza',
        unidade: 'Quilo (Kg)',
        tipo_do_produto: 'Produto Final',
        status: false
      }
    ].map(callback)
};
