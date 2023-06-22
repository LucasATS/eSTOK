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
              key: 'idSale'
            },
            {
              columnName: 'Cliente',
              key: 'client'
            },
            {
              columnName: 'Categoria',
              key: 'category'
            },
            {
              columnName: 'Produtos',
              key: 'products'
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
              key: 'idVenda'
            },
            {
              label: 'Cliente',
              key: 'cliente'
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
              key: 'preco'
            },
            {
              label: 'Data da Compra',
              key: 'dataCompra'
            }
          ]}
          values={sale}
        />
      </div>
    </>
  );
};

export default SaleTable;
