import { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';
import Header from '../../../components/MainLayout/components/Header';
import Pagination from '../../../components/Paginate';
import { Action } from '../../../components/Table';
import { Paginate } from '../../_shared/types/api.types';
import PaginateProductDto from '../dto/product/PaginateProductDto';
import Product from '../models/Product';
import ProductService from '../service/ProductService';
import NewCategoryModal from './components/NewCategoryModal';
import { NewProductModal } from './components/NewProductModal';
import ProductTable from './components/ProductTable';

const ListProduct = () => {
  const [paginationActive, setPaginationActive] = useState<PaginateProductDto>({
    limit: 6
  });
  const [productsPaginate, setProductsPaginate] = useState<Paginate<Product>>();
  const [openNewProductModal, setOpenNewProductModal] = useState(false);
  const [openNewCategoryModal, setOpenNewCategoryModal] = useState(false);

  const menuItens: Action[] = [
    {
      label: 'Categoria',
      onClick: () => setOpenNewCategoryModal(true)
    }
  ];

  const loadProduct = async () => {
    const result = await ProductService.paginateProduct({
      ...paginationActive
    });
    setProductsPaginate(result);
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

  const handleCloseNewCategory = () => {
    setOpenNewCategoryModal(false);
  };

  const onChangePage = async (page: number) => {
    const newInitial = page * Number(paginationActive.limit) - Number(paginationActive.limit);
    setPaginationActive((old) => ({ ...old, page, initial: Math.ceil(newInitial) }));
  };

  useEffect(() => {
    if (Number.isNaN(Number(paginationActive.initial))) {
      setPaginationActive((old) => ({ ...old, page: 1, initial: 1 }));
    } else {
      loadProduct();
    }
  }, [paginationActive]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full px-6 bg-white justify-start items-start">
        <Header mainText="Produto" />
      </div>
      <div className="flex flex-col mx-8 bg-white mt-6 rounded-[30px] p-5">
        <div className="flex flex-row md:px-4 w-auto gap-3 justify-end items-end">
          <Dropdown menuItens={menuItens} text="Cadastros" variant="clean" />
          <Button
            style={{ width: '150px' }}
            buttonText="Novo"
            variant="primary"
            type="button"
            onClick={handleClickNewProduct}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <ProductTable product={productsPaginate} />
          <Pagination
            currentPageLength={productsPaginate?.length}
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
        <NewCategoryModal isOpen={openNewCategoryModal} onClose={handleCloseNewCategory} />
      </div>
    </div>
  );
};

export default ListProduct;
