import ListCard from '../../../../components/ListCard';
import Table from '../../../../components/Table';
import { Paginate } from '../../../_shared/types/api.types';
import Sale from '../../models/Sale';

type Props = {
  sale?: Paginate<Sale>;
};

const SaleTable = ({ sale }: Props) => {
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
              columnName: 'Cliente',
              key: 'nome'
            },
            {
              columnName: 'Categoria',
              key: 'categoria'
            },
            {
              columnName: 'Produto',
              key: 'produto'
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
              columnName: 'Compra',
              key: 'data_compra'
            }
          ]}
          values={sale}
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
              label: 'Cliente',
              key: 'nome'
            },
            {
              label: 'Categoria',
              key: 'categoria'
            },
            {
              label: 'Produto',
              key: 'produto'
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
              label: 'Compra',
              key: 'data_compra'
            }
          ]}
          values={sale}
        />
      </div>
    </>
  );
};

export default SaleTable;
