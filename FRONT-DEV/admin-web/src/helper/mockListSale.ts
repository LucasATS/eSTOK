import { Paginate } from '../modules/_shared/types/api.types';
import Sale from '../modules/sale/models/Sale';

export const mockListSales: Paginate<Sale> = {
  response: [
    {
      id: '001',
      comprador: {
        nome: 'João Silva',
        email: 'joao.silva@email.com',
        telefone: '11999999999',
        endereco: 'Rua das Flores, 123',
        bairro: 'Centro',
        uf: 'SP',
        cidade: 'São Paulo',
        nome_cartao: 'João da Silva',
        numero_cartao: 1234567812345678,
        dt_vencimento: new Date('2026-12-01'),
        cvv_e: '123'
      },
      produtos: [
        {
          id: '1',
          produto: 'Camisa Polo',
          categoria: 'Roupas',
          quantidade: '2',
          preco: 49.99,
          total: 99.98,
          data_compra: '2025-05-10'
        },
        {
          id: '2',
          produto: 'Tênis Esportivo',
          categoria: 'Calçados',
          quantidade: '1',
          preco: 89.5,
          total: 89.5,
          data_compra: '2025-05-10'
        }
      ],
      total: 189.48
    },
    {
      id: '002',
      comprador: {
        nome: 'Maria Souza',
        email: 'maria.souza@email.com',
        telefone: '21988888888',
        endereco: 'Avenida Brasil, 456',
        bairro: 'Jardins',
        uf: 'RJ',
        cidade: 'Rio de Janeiro',
        nome_cartao: 'Maria Souza',
        numero_cartao: 8765432187654321,
        dt_vencimento: new Date('2027-05-01'),
        cvv_e: '456'
      },
      produtos: [
        {
          id: '3',
          produto: 'Calça Jeans',
          categoria: 'Roupas',
          quantidade: '3',
          preco: 30.0,
          total: 90.0,
          data_compra: '2025-05-12'
        }
      ],
      total: 90.0
    }
  ],
  totalItems: 2,
  currentPage: 1,
  totalPages: 1,
  limit: 10,
  length: 2,
  map: (callback) => {
    return [
      {
        id: '001',
        comprador: {
          nome: 'João Silva',
          email: 'joao.silva@email.com',
          telefone: '11999999999',
          endereco: 'Rua das Flores, 123',
          bairro: 'Centro',
          uf: 'SP',
          cidade: 'São Paulo',
          nome_cartao: 'João da Silva',
          numero_cartao: 1234567812345678,
          dt_vencimento: new Date('2026-12-01'),
          cvv_e: '123'
        },
        produtos: [
          {
            id: '1',
            produto: 'Camisa Polo',
            categoria: 'Roupas',
            quantidade: '2',
            preco: 49.99,
            total: 99.98,
            data_compra: '2025-05-10'
          },
          {
            id: '2',
            produto: 'Tênis Esportivo',
            categoria: 'Calçados',
            quantidade: '1',
            preco: 89.5,
            total: 89.5,
            data_compra: '2025-05-10'
          }
        ],
        total: 189.48
      },
      {
        id: '002',
        comprador: {
          nome: 'Maria Souza',
          email: 'maria.souza@email.com',
          telefone: '21988888888',
          endereco: 'Avenida Brasil, 456',
          bairro: 'Jardins',
          uf: 'RJ',
          cidade: 'Rio de Janeiro',
          nome_cartao: 'Maria Souza',
          numero_cartao: 8765432187654321,
          dt_vencimento: new Date('2027-05-01'),
          cvv_e: '456'
        },
        produtos: [
          {
            id: '3',
            produto: 'Calça Jeans',
            categoria: 'Roupas',
            quantidade: '3',
            preco: 30.0,
            total: 90.0,
            data_compra: '2025-05-12'
          }
        ],
        total: 90.0
      }
    ].map(callback);
  }
};
