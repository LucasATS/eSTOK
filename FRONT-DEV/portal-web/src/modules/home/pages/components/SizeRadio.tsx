import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

const sizes = [
  {
    name: 'P',
    id: 1
  },
  {
    name: 'M',
    id: 2
  },
  {
    name: 'G',
    id: 3
  },
  {
    name: 'GG',
    id: 4
  }
];

export const SizeRadio = () => {
  const [size, setSize] = useState(sizes[0]);

  return (
    <RadioGroup value={size} onChange={setSize}>
      <div className="flex flex-col gap-5">
        <RadioGroup.Label>Escolha o tamanho:</RadioGroup.Label>
        <div className="flex flex-row gap-3">
          {sizes.map((size) => (
            <RadioGroup.Option
              key={size.id}
              value={size}
              className={({ checked }) => `
            ${checked ? 'border-black bg-indigo-50' : 'border-gray-200'}
            relative rounded-sm flex bg-white cursor-pointer border py-1 px-2
          `}
            >
              {size.name}
            </RadioGroup.Option>
          ))}
        </div>
      </div>
    </RadioGroup>
  );
};
