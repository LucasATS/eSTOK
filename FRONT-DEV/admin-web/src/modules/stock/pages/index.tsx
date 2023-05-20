import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import Header from '../../../components/MainLayout/components/Header';
import { NewStockModal } from './components/NewStockModal';
import { TableEstoque } from './components/TableEstoque';

export const ListStock = () => {
  const [stockIdActive, setStockIdActive] = useState<number>();
  const [openNewStockModal, setOpenNewStockModal] = useState(false);
  const navigate = useNavigate();

  const handleNewStock = () => {
    setOpenNewStockModal(true);
  };

  const handleClickDeleteStock = (id: number) => {
    setStockIdActive(id);
  };

  const handleClickEditStock = (stockId: number) => {
    navigate(`/stock/${stockId}`);
  };

  const handleClickNewStock = () => {
    setOpenNewStockModal(true);
  };

  const handleCloseNewStock = () => {
    setOpenNewStockModal(false);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white justify-start items-start">
        <Header mainText="Estoque" />
      </div>
      <div className="flex flex-col mx-8 bg-white mt-6 rounded-[30px] p-5">
        <div className="flex flex-row md:px-4 w-auto gap-3 justify-end items-end">
          <Button buttonText="Novo" variant="primary" type="button" onClick={handleClickNewStock} />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <TableEstoque
            onClickDeleteStock={handleClickDeleteStock}
            onClickEditStock={handleClickEditStock}
          />
        </div>
        <NewStockModal
          isOpen={openNewStockModal}
          onClose={handleCloseNewStock}
          onConfirm={handleNewStock}
        />
      </div>
    </div>
  );
};
