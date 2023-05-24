import { DocumentDownloadOutline } from 'heroicons-react';
import ListCard from '../../../../components/ListCard';
import Table from '../../../../components/Table';
import Stock from '../../models/Stock';

type Props = {
  stock?: Stock[];
};

export const StockTable = ({ stock }: Props) => {
  return (
    <>
      <div className="lg:flex hidden">
        <Table
          columns={[
            {
              columnName: 'Id',
              key: 'idProduct'
            },
            {
              columnName: 'Produto',
              key: 'product'
            },
            {
              columnName: 'Categoria',
              key: 'category'
            },
            {
              columnName: 'Quantidade',
              key: 'quantity'
            },
            {
              columnName: 'Preço',
              key: 'price'
            },
            {
              columnName: 'Data da Compra',
              key: 'datePurchase'
            },
            {
              columnName: 'Data do Vencimento',
              key: 'dateExpiration'
            },
            {
              columnName: '',
              key: '',
              component: (value, itemActive) => (
                <div className="flex justify-end space-x-2">
                  <DocumentDownloadOutline className="w-5 cursor-pointer text-secondary hover:text-secondary" />
                </div>
              )
            }
          ]}
          values={stock}
        />
      </div>
      <div className="flex lg:hidden">
        <ListCard
          itemsLabel={[
            {
              label: 'Id',
              key: 'idProduct'
            },
            {
              label: 'Produto',
              key: 'product'
            },
            {
              label: 'Categoria',
              key: 'category'
            },
            {
              label: 'Quantidade',
              key: 'quantity'
            },
            {
              label: 'Preço',
              key: 'price'
            },
            {
              label: 'Data da Compra',
              key: 'datePurchase'
            },
            {
              label: 'Data do Vencimento',
              key: 'dateExpiration'
            },
            {
              label: '',
              key: '',
              component: (value, itemActive) => (
                <div className="flex justify-end space-x-2">
                  <DocumentDownloadOutline className="w-5 cursor-pointer text-secondary hover:text-secondary" />
                </div>
              )
            }
          ]}
          values={stock}
        />
      </div>
    </>
  );
};
