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
              columnName: 'Tipo de Produto',
              key: 'tipo_do_produto'
            },
            {
              columnName: 'Unidade de Medida',
              key: 'unidade'
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
              label: 'Tipo de Produto',
              key: 'tipo_do_produto'
            },
            {
              label: 'Unidade de Medida',
              key: 'unidade'
            }
          ]}
          values={product}
        />
      </div>
    </>
  );
};
export default ProductTable;
