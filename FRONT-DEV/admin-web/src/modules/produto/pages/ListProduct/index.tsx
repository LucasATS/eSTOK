import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../../../components/Paginate';
import { Paginate } from '../../../_shared/types/api.types';
import Produto from '../../models/Produto';
import ProductTable from './components/ProductTable/index';

const ListProduct = () => {
  const [productIdActive, setProductIdActive] = useState<number>();
  const [productsPaginate, setProductsPaginate] = useState<Paginate<Produto>>();
  const navigate = useNavigate();

  const handleClickDeleteProduct = (id: number) => {
    setProductIdActive(id);
  };

  const handleClickEditProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const onChangePage = async (page: number) => {
    // setProductsPaginate((old) => ({ ...old, page }));
  };

  return (
    <div className="flex flex-col mx-8">
      <div className="flex bg-white mt-6 rounded-[30px] p-6 w-full">
        <ProductTable
          onClickEditProduto={handleClickEditProduct}
          onClickDeleteProduto={() => handleClickDeleteProduct}
        />
      </div>
      <div>
        <Pagination
          currentPage={productsPaginate?.results.length}
          page={productsPaginate?.currentPage}
          pageSize={productsPaginate?.limit}
          totalItems={productsPaginate?.totalItems}
          onChangePage={onChangePage}
        />
      </div>
    </div>
  );
};

export default ListProduct;
