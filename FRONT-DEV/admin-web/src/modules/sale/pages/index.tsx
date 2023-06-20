import { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Header from '../../../components/MainLayout/components/Header';
import Pagination from '../../../components/Paginate';
import { PaginateDto } from '../../_shared/dto/PaginateDto';
import { Paginate } from '../../_shared/types/api.types';
import Sale from '../models/Sale';
import NewSaleModal from './components/NewSaleModal';
import SaleTable from './components/SaleTable';

const ListSale = () => {
  const [openNewSaleModal, setOpenNewSaleModal] = useState(false);
  const [salesPaginate, setSalesPaginate] = useState<Paginate<Sale>>();
  const [paginationActive, setPaginationActive] = useState<PaginateDto>({});

  const handleClickNewSale = () => {
    setOpenNewSaleModal(true);
  };

  const loadSale = async () => {
    // setSalesPaginate();
  };

  const handleNewSale = () => {
    loadSale();
  };

  const handleCloseNewSale = () => {
    setOpenNewSaleModal(false);
  };

  const onChangePage = async (page: number) => {
    setPaginationActive((old) => ({ ...old, page }));
    console.log('Próxima página');
  };

  useEffect(() => {
    loadSale();
  }, [paginationActive]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white justify-start items-start">
        <Header mainText="Venda" />
      </div>
      <div className="flex flex-col mx-8 bg-white mt-6 rounded-[30px] p-5">
        <div className="flex flex-row md:px-4 w-auto gap-3 justify-end items-end">
          <Button buttonText="Novo" variant="primary" type="button" onClick={handleClickNewSale} />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <SaleTable />
          <Pagination
            currentPage={salesPaginate?.response.length}
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
    </div>
  );
};

export default ListSale;
