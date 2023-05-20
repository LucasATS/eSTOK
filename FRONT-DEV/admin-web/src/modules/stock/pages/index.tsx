import { useEffect, useState } from 'react';
import Header from '../../../components/MainLayout/components/Header';
import { AddEstoque } from './components/AddEstoque';
import { TableEstoque } from './components/TableEstoque';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import { NewProductModal } from '../../product/pages/ListProduct/components/NewProductModal';

export const ListStock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productIdActive, setProductIdActive] = useState<number>();
  const [openNewProductModal, setOpenNewProductModal] = useState(false);
  const navigate = useNavigate();

  const handleNewStock = () => {
    setIsOpen(true);
  };
  const handleClickDeleteProduct = (id: number) => {
    setProductIdActive(id);
  };

  const handleClickEditProduct = (productId: number) => {
    navigate(`/product/${productId}`);
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

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white justify-start items-start">
        <Header mainText="Estoque" />
      </div>
      <div className="flex flex-col mx-8 bg-white mt-6 rounded-[30px] p-5">
        <div className="flex flex-row md:px-4 w-auto gap-3 justify-end items-end">
          <Button
            buttonText="Novo"
            variant="primary"
            type="button"
            onClick={handleClickNewProduct}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <AddEstoque isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={handleNewStock} />
          <TableEstoque
            onClickDeleteProduct={handleClickDeleteProduct}
            onClickEditProduct={handleClickEditProduct}
          />
          <AddEstoque
            isOpen={openNewProductModal}
            onClose={handleCloseNewProduct}
            onConfirm={handleNewProduct}
          />
        </div>
      </div>
    </div>
  );
};
function loadProduct() {
  throw new Error('Function not implemented.');
}
