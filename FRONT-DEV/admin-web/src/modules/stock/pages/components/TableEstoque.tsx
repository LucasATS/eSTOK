import { Pencil, Trash } from 'heroicons-react';
import ListCard from '../../../../components/ListCard';
import Table from '../../../../components/Table';
import Stock from '../../models/Stock';

type Props = {
  Stock?: Stock[];
  onClickDeleteStock: (item: number) => void;
  onClickEditStock: (stockId: number) => void;
};

export const TableEstoque = ({ onClickEditStock, onClickDeleteStock, Stock }: Props) => {
  return (
    <>
      <div className="lg:flex hidden">
        <Table
          columns={[
            {
              columnName: 'Id',
              key: 'idProduto'
            },
            {
              columnName: 'Produto',
              key: 'produto'
            },
            {
              columnName: 'Categoria',
              key: 'categoria'
            },
            {
              columnName: 'Quantidade',
              key: 'quantidade'
            },
            {
              columnName: 'Preço',
              key: 'preço'
            },
            {
              columnName: 'Data Compra',
              key: 'datacompra'
            },
            {
              columnName: 'Data Vencimento',
              key: 'datavencimento'
            },
            {
              columnName: '',
              key: '',
              component: (value, itemActive) => (
                <div className="flex justify-end space-x-2">
                  <Trash className="w-6 h-6" onClick={() => onClickDeleteStock(itemActive)} />
                </div>
              )
            },
            {
              columnName: '',
              key: '',
              component: (value, itemActive) => (
                <div className="flex justify-end space-x-2">
                  <Pencil className="w-6 h-6" onClick={() => onClickEditStock(itemActive.id)} />
                </div>
              )
            }
          ]}
          values={Stock}
        />
      </div>
      <div className="flex lg:hidden">
        <ListCard
          itemsLabel={[
            {
              label: 'Id',
              key: 'idProduto'
            },
            {
              label: 'Produto',
              key: 'produto'
            },
            {
              label: 'Categoria',
              key: 'categoria'
            },
            {
              label: 'Estocável',
              key: 'estocável'
            },
            {
              label: 'Fundibilidade',
              key: 'fundibilidade'
            },
            {
              label: 'Quantidade',
              key: 'quantidade'
            },
            {
              label: 'Preço',
              key: 'preço'
            },
            {
              label: 'Data Compra',
              key: 'datacompra'
            },
            {
              label: 'Data Vencimento',
              key: 'datavencimento'
            },
            {
              label: '',
              key: '',
              component: (value, itemActive) => (
                <div className="flex justify-end space-x-2">
                  <Trash className="w-6 h-6" onClick={() => onClickDeleteStock(itemActive)} />
                </div>
              )
            },
            {
              label: '',
              key: '',
              component: (value, itemActive) => (
                <div className="flex justify-end space-x-2">
                  <Pencil className="w-6 h-6" onClick={() => onClickEditStock(itemActive.id)} />
                </div>
              )
            }
          ]}
          values={Stock}
        />
      </div>
    </>
  );
};
