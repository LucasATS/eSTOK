import { useState } from 'react';
import { CardProduct } from './components/CardProduct';
import { ViewProductModal } from './components/ViewProductModal';

export const Home = () => {
  const [openConfirmViewModal, setOpenViewModal] = useState(false);

  const handleClickView = () => {
    setOpenViewModal(true);
  };

  const handleCloeseView = () => {
    setOpenViewModal(false);
  };

  return (
    <div>
      <div>
        <CardProduct onClick={handleClickView} />
      </div>
      <ViewProductModal isOpen={openConfirmViewModal} onClose={handleCloeseView} />
    </div>
  );
};
