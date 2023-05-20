import { Trash, Pencil } from 'heroicons-react';
import ListCard from '../../../../../components/ListCard';
import Table from '../../../../../components/Table';
import TitleCard from '../../../../../components/TitleCard';

const VendasTable = () => {
  return (
    <>
      <div className="flex items-start py-1 px-4 rounded-t border-b">
        <TitleCard text="Cadastrar venda" />
      </div>
      <div className="lg:flex hidden">
        <Table
          columns={[
            {
              columnName: 'id da venda',
              key: 'idVendas'
            },
            {
              columnName: 'Cliente',
              key: 'clientes'
            },
            {
              columnName: 'Categoria',
              key: 'categoria'
            },
            {
              columnName: 'Produtos',
              key: 'produtos'
            },
            {
              columnName: 'Unidades',
              key: 'unidades'
            },
            {
              columnName: 'Preço',
              key: 'preço'
            },
            {
              columnName: 'Data da Compra',
              key: 'dataCompra'
            }
          ]}
        />
      </div>
      <div className="flex lg:hidden">
        <ListCard
          itemsLabel={[
            {
              label: 'id da venda',
              key: 'idVendas'
            },
            {
              label: 'Cliente',
              key: 'clientes'
            },
            {
              label: 'Categoria',
              key: 'categoria'
            },
            {
              label: 'Produtos',
              key: 'produtos'
            },
            {
              label: 'Unidades',
              key: 'unidades'
            },
            {
              label: 'Preço',
              key: 'preço'
            },
            {
              label: 'Data da Compra',
              key: 'dataCompra'
            }
          ]}
        />
      </div>
    </>
  );
};

export default VendasTable;
