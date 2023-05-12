import Button from '../../../components/Button';
import TitleCard from '../../../components/TitleCard';
import { useState } from 'react';
import NewCategoriaModal from './components/NewCategoriaModal';

const Categoria = () => {
  const [openNewCategoriaModal, setOpenNewCategoriaModal] = useState(false);

  const handleClickNewCategoria = () => {
    setOpenNewCategoriaModal(true);
  };

  const handleCloseNewCategoria = () => {
    setOpenNewCategoriaModal(false);
  };

  return (
    <div className="flex flex-col mx-8 bg-white mt-6 rounded-[30px] p-5">
      <div className="flex flex-wrap justify-between items-center">
        <TitleCard text="Categoria" />
        <div className="flex md:px-4 w-auto justify-end">
          <Button
            buttonText="Novo"
            variant="primary"
            type="button"
            onClick={handleClickNewCategoria}
          />
        </div>
      </div>
      <NewCategoriaModal
        isOpen={openNewCategoriaModal}
        onClose={handleCloseNewCategoria}
        onConfirm={handleClickNewCategoria}
      />
    </div>
  );
};

export default Categoria;
