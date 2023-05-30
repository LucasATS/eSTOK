import { Minus, Plus, Refresh } from 'heroicons-react';
import { useState } from 'react';

const QuantityProduct = () => {
  const [count, setCount] = useState(0);

  const handleSubtractOne = () => {
    if (count <= 0) {
      return 0;
    }
    setCount(count - 1);
  };

  const handleAddOne = () => {
    setCount(count + 1);
  };

  const handleResetCounter = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-row gap-3">
      <Minus
        onClick={handleSubtractOne}
        className="w-6 h-6 border-[#afafb1] hover:bg-[#afafb1] border rounded-lg p-0.5 cursor-pointer"
      />
      <p>{count}</p>
      <Plus
        onClick={handleAddOne}
        className="w-6 h-6 border-[#afafb1] hover:bg-[#afafb1] border rounded-lg p-0.5 cursor-pointer"
      />
      <button onClick={handleResetCounter}>
        <Refresh className="w-5 h-5 text-[#afafb1] hover:text-[#878788]" />
      </button>
    </div>
  );
};

export default QuantityProduct;
