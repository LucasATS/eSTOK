import ListCard from '../../../../components/ListCard';
import Table from '../../../../components/Table';
import { Paginate } from '../../../_shared/types/api.types';
import Sale, { FlattenedSaleItem } from '../../models/Sale';

type Props = {
  sale?: Paginate<Sale>;
};

const SaleTable = ({ sale }: Props) => {
  const flattenSales = (salesPaginate?: Paginate<Sale>): FlattenedSaleItem[] => {
    if (!salesPaginate) return [];

    return salesPaginate.response.flatMap((sale) =>
      sale.produtos.map((prod) => ({
        id: prod.id,
        nome: sale.comprador.nome,
        categoria: prod.categoria ?? 'N/A',
        produto: prod.produto ?? 'N/A',
        quantidade: prod.quantidade,
        preco: prod.preco,
        data_compra: prod.data_compra ?? ''
      }))
    );
  };

  const flattenedData = flattenSales(sale);
  return (
    <>
      <div role="table" tabIndex={-1} className="lg:flex hidden">
        <Table
          columns={[
            { columnName: 'Id', key: 'id' },
            { columnName: 'Cliente', key: 'nome' },
            { columnName: 'Categoria', key: 'categoria' },
            { columnName: 'Produto', key: 'produto' },
            { columnName: 'Quantidade', key: 'quantidade' },
            { columnName: 'Preço', key: 'preco' },
            { columnName: 'Compra', key: 'data_compra' }
          ]}
          values={flattenedData}
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
          values={flattenedData}
        />
      </div>
    </>
  );
};

export default SaleTable;
