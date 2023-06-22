import { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Header from '../../../components/MainLayout/components/Header';
import Pagination from '../../../components/Paginate';
import ToastCustom from '../../../components/ToastCustom';
import { Paginate } from '../../_shared/types/api.types';
import PaginateSaleDto from '../dto/PaginateSaleDto';
import Sale from '../models/Sale';
import NewSaleModal from './components/NewSaleModal';
import SaleTable from './components/SaleTable';

const ListSale = () => {
  const [openNewSaleModal, setOpenNewSaleModal] = useState(false);
  const [salesPaginate, setSalesPaginate] = useState<Paginate<Sale>>();
  const [paginationActive, setPaginationActive] = useState<PaginateSaleDto>({ limit: 2 });

  const handleClickNewSale = () => {
    setOpenNewSaleModal(true);
  };

  const loadSale = async () => {
    // const result = await SaleService.paginateSale({
    //   ...paginationActive
    // });
    // setSalesPaginate(result);
  };

  const handleNewSale = () => {
    loadSale();
  };

  const handleCloseNewSale = () => {
    setOpenNewSaleModal(false);
  };

  const onChangePage = async (page: number) => {
    const newInitial = page * Number(paginationActive.limit) - Number(paginationActive.limit);
    setPaginationActive((old) => ({ ...old, page, initial: Math.ceil(newInitial) }));
  };

  useEffect(() => {
    if (Number.isNaN(Number(paginationActive.initial))) {
      setPaginationActive((old) => ({ ...old, page: 1, initial: 1 }));
    } else {
      loadSale();
    }
  }, [paginationActive]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full px-4 bg-white justify-start items-start">
        <Header mainText="Venda" />
      </div>
      <div className="flex flex-col mx-8 bg-white mt-6 rounded-[30px] p-5">
        <div role="button" className="flex flex-row md:px-4 w-auto gap-3 justify-end items-end">
          <Button
            style={{ width: '150px' }}
            buttonText="Novo"
            variant="primary"
            type="button"
            onClick={handleClickNewSale}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <SaleTable sale={salesPaginate} />
          <Pagination
            currentPageLength={salesPaginate?.length}
            page={salesPaginate?.currentPage}
            pageSize={salesPaginate?.limit}
            totalItems={salesPaginate?.totalItems}
            onChangePage={onChangePage}
          />
        </div>
        <NewSaleModal
          isOpen={openNewSaleModal}
          onClose={handleCloseNewSale}
          onConfirm={handleNewSale}
        />
      </div>
      <ToastCustom />
    </div>
  );
};

export default ListSale;
