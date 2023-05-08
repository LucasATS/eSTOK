import { Listbox, Transition } from '@headlessui/react';
import { useField } from '@unform/core';
import { useEffect, useRef, useState } from 'react';
import iconApi from '../../modules/_shared/services/iconApi';

export type OptionSelect = { value: any; label: string; unavailable?: boolean };

interface Props {
  name: string;
  label?: string;
  options: OptionSelect[];
}

type SelectProps = JSX.IntrinsicElements['select'] & Props;

const SelectForm = ({ name, label, options, ...rest }: SelectProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { fieldName, defaultValue = '', registerField, error, clearError } = useField(name);
  const [valueSelect, setValueSelect] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        return valueSelect?.value;
      },
      setValue: (ref: any, newValue: any) => {
        if (newValue) {
          setValueSelect(newValue);
        } else {
          setValueSelect(defaultValue);
        }
      },
      clearValue: () => {
        setValueSelect('');
      }
    });
  }, [fieldName, registerField, valueSelect, setValueSelect]);

  useEffect(() => {
    clearError();
  }, [valueSelect]);

  return (
    <div className="text-sm">
      <Listbox value={valueSelect} onChange={setValueSelect}>
        {({ open }) => (
          <div className="relative mt-2 z-10">
            <Listbox.Label
              className={`py-1 font-medium bg-neutral-200 ${
                error ? 'text-red-500' : 'text-[#B0B0B1]'
              }`}
            >
              {label}
            </Listbox.Label>
            <Listbox.Button
              className={`flex text-[#B0B0B1] bg-neutral-200 justify-between items-center group rounded-[30px] border focus:ring-1 p-2 w-full focus:outline-none ${
                error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
              }`}
            >
              <span
                className={`block truncate font-medium ${
                  error ? 'text-red-500' : 'text-[#B0B0B1]'
                }`}
              >
                {valueSelect.label || 'Selecione'}
              </span>
              <span className="inset-y-0 flex pr-2 pointer-events-none items-center">
                <img src={iconApi + 'chevron-solid.svg'} className="w-4 h-4" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-neutral-200 shadow-lg max-h-40 ring-1 ring-opacity-5 focus:outline-none">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    className={({ active }) =>
                      `${active ? 'text-sky-600' : 'text[#B0B0B1]'}
                        cursor-pointer select-none relative p-2 hover:bg-neutral-200`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate font-medium ${
                            selected ? 'text-sky-600' : ''
                          }  `}
                        >
                          {option.label}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
};

export default SelectForm;
