import ListCard from '../../../../components/ListCard';
import Table from '../../../../components/Table';
import Sale from '../../models/Sale';

type Props = {
  sale?: Sale[];
};

const SaleTable = ({ sale }: Props) => {
  return (
    <>
      <div className="lg:flex hidden">
        <Table
          columns={[
            {
              columnName: 'Id',
              key: 'idVenda'
            },
            {
              columnName: 'Cliente',
              key: 'cliente'
            },
            {
              columnName: 'Categoria',
              key: 'categoria'
            },
            {
              columnName: 'Produtos',
              key: 'produtos'
            },
            {
              columnName: 'Unidades',
              key: 'unidades'
            },
            {
              columnName: 'Preço',
              key: 'preco'
            },
            {
              columnName: 'Data da Compra',
              key: 'dataCompra'
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
