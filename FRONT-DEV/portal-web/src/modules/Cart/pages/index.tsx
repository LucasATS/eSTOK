import { useState } from 'react';
import Button from '../../../components/Button/Button';
import { PurchaseConfirmModal } from './components/PurchaseConfirmModal';

export const Cart = () => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const handleClickNewBuy = () => {
    setOpenConfirmModal(true);
  };

  const handleCloseNewBuy = () => {
    setOpenConfirmModal(false);
  };
  return (
    <div className="flex justify-end px-6 py-3 items-center">
      <div>
        <Button onClick={handleClickNewBuy} buttonText="confirmar" variant="primary" />
      </div>
      <PurchaseConfirmModal isOpen={openConfirmModal} onClose={handleCloseNewBuy} />
    </div>
  );
};
