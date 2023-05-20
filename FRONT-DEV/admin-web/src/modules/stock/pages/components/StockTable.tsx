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
              key: 'preco'
            },
            {
              columnName: 'Data Compra',
              key: 'datacompra'
            },
            {
              columnName: 'Data Vencimento',
              key: 'datavencimento'
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
              key: 'preco'
            },
            {
              label: 'Data Compra',
              key: 'datacompra'
            },
            {
              label: 'Data Vencimento',
              key: 'datavencimento'
            }
          ]}
          values={stock}
        />
      </div>
    </>
  );
};
