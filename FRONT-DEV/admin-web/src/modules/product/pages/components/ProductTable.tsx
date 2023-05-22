import ListCard from '../../../../components/ListCard';
import Table from '../../../../components/Table';
import Product from '../../models/Product';

type Props = {
  product?: Product[];
};

const ProductTable = ({ product }: Props) => {
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
              columnName: 'Estocável',
              key: 'estocável'
            },
            {
              columnName: 'Fundibilidade',
              key: 'fundibilidade'
            },
            {
              columnName: 'Quantidade',
              key: 'quantidade'
            },
            {
              columnName: 'Preço',
              key: 'preço'
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
            }
          ]}
          values={product}
        />
      </div>
    </>
  );
};
export default ProductTable;
