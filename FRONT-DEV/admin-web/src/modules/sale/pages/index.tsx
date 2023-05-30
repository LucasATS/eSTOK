import { useState } from 'react';
import Button from '../../../components/Button';
import Header from '../../../components/MainLayout/components/Header';
import NewSaleModal from './components/NewSaleModal';
import SaleTable from './components/SaleTable';

const ListSale = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickNewSale = () => {
    setIsOpen(true);
  };

  // const handleNewSale = () => {
  // };

  const handleCloseNewSale = () => {
    setIsOpen(false);
  };

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
        </div>
        <NewSaleModal isOpen={isOpen} onClose={handleCloseNewSale} onConfirm={handleClickNewSale} />
      </div>
    </div>
  );
};

export default ListSale;
