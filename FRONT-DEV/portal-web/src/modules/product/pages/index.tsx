import { useState } from 'react';
import Button from '../../../components/Button/Button';
import { PurchaseConfirmModal } from './components/PurchaseConfirmModal';
import { ViewProductModal } from './components/ViewProductModal';

export const Product = () => {
  const [openConfirmViewModal, setOpeonViewModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const handleClickView = () => {
    setOpeonViewModal(true);
  };

  const handleCloeseView = () => {
    setOpeonViewModal(false);
  };

  const handleClickNewBuy = () => {
    setOpenConfirmModal(true);
  };

  const handleCloseNewBuy = () => {
    setOpenConfirmModal(false);
  };

  return (
    <div>
      <div className="gap-3">
        <Button onClick={handleClickView} buttonText="view" variant="primary" />
        <Button onClick={handleClickNewBuy} buttonText="confirmar" variant="primary" />
      </div>
      <PurchaseConfirmModal isOpen={openConfirmModal} onClose={handleCloseNewBuy} />
      <ViewProductModal isOpen={openConfirmViewModal} onClose={handleCloeseView} />
    </div>
  );
};
