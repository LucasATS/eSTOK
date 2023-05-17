import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button';
import Dropdown from '../../../../components/Dropdown';
import Header from '../../../../components/MainLayout/components/Header';
import Pagination from '../../../../components/Paginate';
import { Action } from '../../../../components/Table';
import RoutesURL from '../../../_shared/constants/RoutesURL.enum';
import { PaginateDto } from '../../../_shared/dto/PaginateDto';
import { Paginate } from '../../../_shared/types/api.types';
import Product from '../../models/Product';
import { NewProductModal } from './components/NewProductModal';
import ProductTable from './components/ProductTable/index';

const ListProduct = () => {
  const [productIdActive, setProductIdActive] = useState<number>();
  const [paginationActive, setPaginationActive] = useState<PaginateDto>({});
  const [productsPaginate, setProductsPaginate] = useState<Paginate<Product>>();
  const [openNewProductModal, setOpenNewProductModal] = useState(false);
  const navigate = useNavigate();

  const menuItens: Action[] = [
    { label: 'Categoria', onClick: () => navigate(RoutesURL.HOME) }
    // { label: 'Tipo de Produto', onClick: () => navigate(RoutesURL.HOME) },
    // { label: 'Unidade de Medida', onClick: () => navigate(RoutesURL.HOME) },
    // { label: 'Tamanho de Produto', onClick: () => navigate(RoutesURL.HOME) }
  ];

  const loadProduct = async () => {
    // setProductsPaginate();
  };

  const handleNewProduct = () => {
    loadProduct();
  };

  const handleClickNewProduct = () => {
    setOpenNewProductModal(true);
  };

  const handleCloseNewProduct = () => {
    setOpenNewProductModal(false);
  };

  const handleClickDeleteProduct = (id: number) => {
    setProductIdActive(id);
  };

  const handleClickEditProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const onChangePage = async (page: number) => {
    setPaginationActive((old) => ({ ...old, page }));
    console.log('Próxima página');
  };

  useEffect(() => {
    loadProduct();
  }, [paginationActive]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white justify-start items-start">
        <Header mainText="Produto" />
      </div>
      <div className="flex flex-col mx-8 bg-white mt-6 rounded-[30px] p-5">
        <div className="flex flex-row md:px-4 w-auto gap-3 justify-end items-end">
          <Dropdown menuItens={menuItens} text="Cadastros" variant="clean" />
          <Button
            buttonText="Novo"
            variant="primary"
            type="button"
            onClick={handleClickNewProduct}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <ProductTable
            onClickEditProduct={handleClickEditProduct}
            onClickDeleteProduct={() => handleClickDeleteProduct}
          />
          <Pagination
            currentPage={productsPaginate?.results.length}
            page={productsPaginate?.currentPage}
            pageSize={productsPaginate?.limit}
            totalItems={productsPaginate?.totalItems}
            onChangePage={onChangePage}
          />
        </div>
        <NewProductModal
          isOpen={openNewProductModal}
          onClose={handleCloseNewProduct}
          onConfirm={handleNewProduct}
        />
      </div>
    </div>
  );
};

export default ListProduct;