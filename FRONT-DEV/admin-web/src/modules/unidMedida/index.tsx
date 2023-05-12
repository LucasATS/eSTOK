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
    <div className="">
      <div>
        <TitleCard text="Unidade de Medida" />
      </div>
      <div>
        <Button buttonText="Novo" onClick={handleClickNewUnidMedida} />
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
