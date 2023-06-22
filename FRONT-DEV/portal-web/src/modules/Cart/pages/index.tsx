import { useState } from 'react';
import Button from '../../../components/Button/Button';
import TitleCard from '../../../components/TitleCard';
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
    <div className="flex flex-col gap-3">
      <div className="flex justify-center">
        <TitleCard text="Carrinho" />
      </div>
      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-col gap-3">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="#">Throwback Hip Bag</a>
              </h3>
              <p className="ml-4">$130.00</p>
            </div>
            <div className="flex items-end justify-between text-sm">
              <p className="mt-1 text-sm text-gray-500">Salmon</p>
              <p className="text-gray-500">Qty 1</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
              alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="#">Medium Stuff Satchel</a>
              </h3>
              <p className="ml-4">$32.00</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">Blue</p>
          </div>
          <div className="flex items-end justify-between text-sm">
            <p className="text-gray-500">Qty 1</p>
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$262.00</p>
        </div>
        <div className="flex justify-center">
          <Button onClick={handleClickNewBuy} buttonText="Confirmar" variant="primary" />
        </div>
      </div>
      <PurchaseConfirmModal isOpen={openConfirmModal} onClose={handleCloseNewBuy} />
    </div>
  );
};
