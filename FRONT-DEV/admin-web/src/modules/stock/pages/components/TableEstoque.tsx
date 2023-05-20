import { Pencil, Trash } from 'heroicons-react';
import Table from '../../../../components/Table';
import ListCard from '../../../../components/ListCard';
import Product from '../../../product/models/Product';

type Props = {
  product?: Product[];
  onClickDeleteProduct: (item: number) => void;
  onClickEditProduct: (productId: number) => void;
};

export const TableEstoque = ({ onClickEditProduct, onClickDeleteProduct, product }: Props) => {
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
                  <Trash className="w-6 h-6" onClick={() => onClickDeleteProduct(itemActive)} />
                </div>
              )
            },
            {
              columnName: '',
              key: '',
              component: (value, itemActive) => (
                <div className="flex justify-end space-x-2">
                  <Pencil className="w-6 h-6" onClick={() => onClickEditProduct(itemActive.id)} />
                </div>
              )
            }
          ]}
          values={product}
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
                  <Trash className="w-6 h-6" onClick={() => onClickDeleteProduct(itemActive)} />
                </div>
              )
            },
            {
              label: '',
              key: '',
              component: (value, itemActive) => (
                <div className="flex justify-end space-x-2">
                  <Pencil className="w-6 h-6" onClick={() => onClickEditProduct(itemActive.id)} />
                </div>
              )
            }
          ]}
          values={product}
        />
      </div>
    </>
  );
};
