import Header from '../../../components/MainLayout/components/Header';
import AddProduto from './components/AddProduto';
import VendasTable from './components/VendasTable';

const ListSale = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white justify-start items-start">
        <Header mainText="Venda" />
      </div>
      <div className="flex flex-col mx-8 bg-white mt-6 rounded-[30px] p-5">
        <div className="flex flex-col gap-2 mt-5">
          <AddProduto />
          <VendasTable />
        </div>
      </div>
    </div>
  );
};

export default ListSale;
