import { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Header from '../../../components/MainLayout/components/Header';
import Pagination from '../../../components/Paginate';
import { PaginateDto } from '../../_shared/dto/PaginateDto';
import { Paginate } from '../../_shared/types/api.types';
import Stock from '../models/Stock';
import { NewStockModal } from './components/NewStockModal';
import { StockOut } from './components/StockOut';
import { StockTable } from './components/StockTable';

export const ListStock = () => {
  const [stockIdActive, setStockIdActive] = useState<number>();
  const [openNewStockModal, setOpenNewStockModal] = useState(false);
  const [openStockOut, setopenStockOut] = useState(false);
  const [paginationActive, setPaginationActive] = useState<PaginateDto>({});
  const [stocksPaginate, setStocksPaginate] = useState<Paginate<Stock>>();

  const loadStock = () => {
    // setStocksPaginate()
  };

  const handleNewStock = () => {
    loadStock();
  };

  const handleStockOut = () => {
    loadStock();
  };

  const handleClickStockOut = () => {
    setopenStockOut(true);
  };

  const handleCloseStockOut = () => {
    setopenStockOut(false);
  };

  const handleClickNewStock = () => {
    setOpenNewStockModal(true);
  };

  const handleCloseNewStock = () => {
    setOpenNewStockModal(false);
  };

  const onChangePage = async (page: number) => {
    setPaginationActive((old) => ({ ...old, page }));
    console.log('Próxima página');
  };

  useEffect(() => {
    loadStock();
  }, [paginationActive]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white justify-start items-start">
        <Header mainText="Estoque" />
      </div>
      <div className="flex flex-col mx-8 bg-white mt-6 rounded-[30px] p-5">
        <div className="flex flex-row md:px-4 w-auto gap-3 justify-end items-end">
          <Button type="button" variant="primary" onClick={handleClickStockOut}>
            Baixa
          </Button>
          <Button buttonText="Novo" variant="primary" type="button" onClick={handleClickNewStock} />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <StockTable />
          <Pagination
            currentPage={stocksPaginate?.results.length}
            page={stocksPaginate?.currentPage}
            pageSize={stocksPaginate?.limit}
            totalItems={stocksPaginate?.totalItems}
            onChangePage={onChangePage}
          />
        </div>
        <StockOut isOpen={openStockOut} onClose={handleCloseStockOut} onConfirm={handleStockOut} />
        <NewStockModal
          isOpen={openNewStockModal}
          onClose={handleCloseNewStock}
          onConfirm={handleNewStock}
        />
      </div>
    </div>
  );
};
