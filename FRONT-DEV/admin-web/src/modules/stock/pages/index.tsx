import Header from '../../../components/MainLayout/components/Header';

const ListStock = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white justify-start items-start">
        <Header mainText="Estoque" />
      </div>
      <div className="flex flex-col mx-8 bg-white mt-6 rounded-[30px] p-5">
        <div className="flex flex-col gap-2 mt-5">Estoque</div>
      </div>
    </div>
  );
};

export default ListStock;
