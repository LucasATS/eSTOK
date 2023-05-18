import { useState } from 'react';
import Button from '../../../components/Button/Button';
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
      <div className="gap-3">
        <Button onClick={handleClickView} buttonText="view" variant="primary" />
      </div>
      <ViewProductModal isOpen={openConfirmViewModal} onClose={handleCloeseView} />
    </div>
  );
};
