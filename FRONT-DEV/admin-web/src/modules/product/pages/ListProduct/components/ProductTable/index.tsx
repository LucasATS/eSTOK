import Table from '../../../../../../components/Table';
import iconApi from '../../../../../_shared/services/iconApi';
import Produto from '../../../../models/Produto';

type Props = {
  product?: Produto[];
  onClickDeleteProduto: (item: number) => void;
  onClickEditProduto: (productId: number) => void;
};

const ProductTable = ({ onClickEditProduto, onClickDeleteProduto, product }: Props) => {
  return (
    <>
      <div className="flex w-full">
        <Table
          columns={[
            {
              columnName: 'Id do Produto',
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
            },
            {
              columnName: '',
              key: '',
              component: (value, itemActive) => (
                <div className="flex justify-end space-x-2">
                  <img
                    src={iconApi + 'trash.svg'}
                    alt="trash"
                    className="w-6 h-6"
                    onClick={() => onClickDeleteProduto(itemActive)}
                  />
                </div>
              )
            },
            {
              columnName: '',
              key: '',
              component: (value, itemActive) => (
                <div className="flex justify-end space-x-2">
                  <img
                    src={iconApi + 'edit.svg'}
                    alt="edit"
                    className="w-6 h-6"
                    onClick={() => onClickEditProduto(itemActive.id)}
                  />
                </div>
              )
            }
          ]}
          values={product}
        />
      </div>
    </>
  );
};

export default ProductTable;
