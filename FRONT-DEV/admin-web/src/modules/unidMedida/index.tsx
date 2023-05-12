import { useState } from 'react';
import Button from '../../components/Button';
import TitleCard from '../../components/TitleCard';
import NewUnidMedidaModal from './components/NewUnidMedidaModal';

const UnidMedida = () => {
  const [openNewUnidMedidaModal, setOpenNewUnidMedidaModal] = useState(false);

  const handleClickNewUnidMedida = () => {
    setOpenNewUnidMedidaModal(true);
  };

  const handleCloseNewUnidMedida = () => {
    setOpenNewUnidMedidaModal(false);
  };

  return (
    <div className="flex flex-col mx-8 bg-white mt-6 rounded-[30px] p-5">
      <div className="flex flex-wrap justify-between items-center">
        <TitleCard text="Unidade de Medida" />
        <div className="flex md:px-4 w-auto justify-end">
          <Button
            buttonText="Novo"
            variant="primary"
            type="button"
            onClick={handleClickNewUnidMedida}
          />
        </div>
      </div>

      <NewUnidMedidaModal
        onClose={handleCloseNewUnidMedida}
        isOpen={openNewUnidMedidaModal}
        onConfirm={handleClickNewUnidMedida}
      />
    </div>
  );
};
export default UnidMedida;
