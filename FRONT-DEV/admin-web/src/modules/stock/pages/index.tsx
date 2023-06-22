import { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Header from '../../../components/MainLayout/components/Header';
import Pagination from '../../../components/Paginate';
import ToastCustom from '../../../components/ToastCustom';
import { Paginate } from '../../_shared/types/api.types';
import Stock from '../models/Stock';
import StockService from '../service/StockService';
import { LowStock } from './components/LowStock';
import { NewStockModal } from './components/NewStockModal';
import { StockTable } from './components/StockTable';
import PaginateStockDto from '../dto/Stock/PaginateStockDto';

export const ListStock = () => {
  const [openNewStockModal, setOpenNewStockModal] = useState(false);
  const [openStockWriteOff, setopenStockWriteOff] = useState(false);
  const [paginationActive, setPaginationActive] = useState<PaginateStockDto>({ limit: 2 });
  const [stocksPaginate, setStocksPaginate] = useState<Paginate<Stock>>();

  const loadStock = async () => {
    const result = await StockService.paginateStock({
      ...paginationActive
    });
    setStocksPaginate(result);
  };

  const handleNewStock = () => {
    loadStock();
  };

  const handleStockWriteOff = () => {
    loadStock();
  };

  const handleClickStockWriteOff = () => {
    setopenStockWriteOff(true);
  };

  const handleCloseStockWriteOff = () => {
    setopenStockWriteOff(false);
  };

  const handleClickNewStock = () => {
    setOpenNewStockModal(true);
  };

  const handleCloseNewStock = () => {
    setOpenNewStockModal(false);
  };

  const onChangePage = async (page: number) => {
    const newInitial = page * Number(paginationActive.limit) - Number(paginationActive.limit);
    setPaginationActive((old) => ({ ...old, page, initial: Math.ceil(newInitial) }));
  };

  useEffect(() => {
    if (Number.isNaN(Number(paginationActive.initial))) {
      setPaginationActive((old) => ({ ...old, page: 1, initial: 1 }));
    } else {
      loadStock();
    }
  }, [paginationActive]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full px-6 bg-white justify-start items-start">
        <Header mainText="Estoque" />
      </div>
      <div className="flex flex-col mx-8 bg-white mt-6 rounded-[30px] p-5">
        <div className="flex flex-row md:px-4 w-auto gap-3 justify-end items-end">
          <Button
            style={{ width: '150px' }}
            buttonText="Novo"
            variant="primary"
            type="button"
            onClick={handleClickNewStock}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <StockTable stock={stocksPaginate} stockWriteOff={handleClickStockWriteOff} />
          <Pagination
            currentPageLength={stocksPaginate?.length}
            page={stocksPaginate?.currentPage}
            pageSize={stocksPaginate?.limit}
            totalItems={stocksPaginate?.totalItems}
            onChangePage={onChangePage}
          />
        </div>
        <LowStock
          isOpen={openStockWriteOff}
          onClose={handleCloseStockWriteOff}
          onConfirm={handleStockWriteOff}
        />
        <NewStockModal
          isOpen={openNewStockModal}
          onClose={handleCloseNewStock}
          onConfirm={handleNewStock}
        />
      </div>
      <ToastCustom />
    </div>
  );
};
