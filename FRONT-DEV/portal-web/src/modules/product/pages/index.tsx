import { useState } from 'react';
import Button from '../../../components/Button/Button';
import { ModalConfirm } from './components/ModalConfirm';

export const Product = () => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const handleClickNewBuy = () => {
    setOpenConfirmModal(true);
  };

  const handleCloseNewBuy = () => {
    setOpenConfirmModal(false);
  };

  return (
    <div>
      <div>
        <Button onClick={handleClickNewBuy} buttonText="confirmar" />
      </div>
      <ModalConfirm isOpen={openConfirmModal} onClose={handleCloseNewBuy} />
    </div>
  );
};
