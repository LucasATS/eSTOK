import ListCard from '../../../../components/ListCard';
import Table from '../../../../components/Table';
import { Paginate } from '../../../_shared/types/api.types';
import Product from '../../models/Product';

type Props = {
  product?: Paginate<Product>;
};

const ProductTable = ({ product }: Props) => {
  return (
    <>
      <div role="table" tabIndex={-1} className="lg:flex hidden">
        <Table
          columns={[
            {
              columnName: 'Id',
              key: 'ID'
            },
            {
              columnName: 'Produto',
              key: 'Produto'
            },
            {
              columnName: 'Categoria',
              key: 'Categoria'
            },

            {
              columnName: 'Tipo de Produto',
              key: 'Tipo_do_Produto'
            },
            {
              columnName: 'Unidade de Medida',
              key: 'Unidade'
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
              key: 'ID'
            },
            {
              label: 'Produto',
              key: 'Produto'
            },
            {
              label: 'Categoria',
              key: 'categoria'
            },
            {
              label: 'Tipo de Produto',
              key: 'Tipo_do_Produto'
            },
            {
              label: 'Unidade de Medida',
              key: 'Unidade'
            }
          ]}
          values={product}
        />
      </div>
    </>
  );
};
export default ProductTable;
