import { useState } from 'react';

export default function QuantityProduct() {
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
    <div className="flex flex-row gap-3 mt-10">
      <button onClick={handleSubtractOne}>-</button>
      <p>{count}</p>
      <button onClick={handleAddOne}>+</button>
      <button onClick={handleResetCounter}>Reset Counter</button>
    </div>
  );
}
