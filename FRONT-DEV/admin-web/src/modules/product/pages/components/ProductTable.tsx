import ListCard from '../../../../components/ListCard';
import Table from '../../../../components/Table';
import Product from '../../models/Product';

type Props = {
  product?: Product[];
};

const ProductTable = ({ product }: Props) => {
  return (
    <>
      <div role="table" tabIndex={-1} className="lg:flex hidden">
        <Table
          columns={[
            {
              columnName: 'Id',
              key: 'idProduct'
            },
            {
              columnName: 'Produto',
              key: 'name'
            },
            {
              columnName: 'Categoria',
              key: 'category'
            },

            {
              columnName: 'Tipo de Produto',
              key: 'productType'
            },
            {
              columnName: 'Unidade de Medida',
              key: 'unit'
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
              key: 'idProduct'
            },
            {
              label: 'Produto',
              key: 'name'
            },
            {
              label: 'Categoria',
              key: 'category'
            },
            {
              label: 'Tipo de Produto',
              key: 'productType'
            },
            {
              label: 'Unidade de Medida',
              key: 'unit'
            }
          ]}
          values={product}
        />
      </div>
    </>
  );
};
export default ProductTable;
