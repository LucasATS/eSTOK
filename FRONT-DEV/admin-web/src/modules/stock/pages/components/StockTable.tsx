import { DocumentDownloadOutline } from 'heroicons-react';
import ListCard from '../../../../components/ListCard';
import Table from '../../../../components/Table';
import { Paginate } from '../../../_shared/types/api.types';
import Stock from '../../models/Stock';

type Props = {
  stock?: Paginate<Stock>;
  stockWriteOff?: () => void;
};

export const StockTable = ({ stock, stockWriteOff }: Props) => {
  return (
    <>
      <div role="table" tabIndex={-1} className="lg:flex hidden">
        <Table
          columns={[
            {
              columnName: 'Id',
              key: 'id'
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
              key: 'preco'
            },
            {
              columnName: 'Data da Compra',
              key: 'data_compra'
            },
            {
              columnName: 'Data do Vencimento',
              key: 'vencimento'
            },
            {
              columnName: '',
              key: '',
              component: (value, itemActive) => (
                <div className="flex justify-end space-x-2">
                  <DocumentDownloadOutline
                    className="w-5 cursor-pointer text-secondary hover:text-secondary"
                    onClick={stockWriteOff}
                  />
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
              key: 'id'
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
              label: 'Quantidade',
              key: 'quantidade'
            },
            {
              label: 'Preço',
              key: 'preco'
            },
            {
              label: 'Data da Compra',
              key: 'data_compra'
            },
            {
              label: 'Data do Vencimento',
              key: 'vencimento'
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
