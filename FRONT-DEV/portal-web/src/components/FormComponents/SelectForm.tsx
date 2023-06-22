import { Listbox, Transition } from '@headlessui/react';
import { useField } from '@unform/core';
import { Selector } from 'heroicons-react';
import { useEffect, useState } from 'react';

export type OptionSelect = { value: any; label: string };

interface Props {
  name: string;
  label?: string;
  options: OptionSelect[];
  placeholder?: string;
}
type SelectProps = JSX.IntrinsicElements['select'] & Props;

const SelectForm = ({ name, label, options, placeholder, ...rest }: SelectProps) => {
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
          <>
            <Listbox.Label
              className={`py-1 font-medium ${error ? 'text-red-500' : 'text-gray-500'}`}
            >
              {label}
            </Listbox.Label>
            <div className="relative border rounded mt-2 z-10">
              <Listbox.Button
                className={`flex justify-between items-center group rounded border focus:ring-1 p-2 focus:outline-none font-sans w-full ${
                  error
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'text-gray-500 focus:border-sky-600 focus:ring-sky-600 active:border-sky-600'
                }`}
              >
                <span className={`font-semibold ${error ? 'text-red-500' : 'text-stone-500'}`}>
                  {valueSelect.label || placeholder}
                </span>
                <span className="flex pointer-events-none items-center">
                  <Selector
                    className={`w-5 h-5 ${error ? 'text-red-500' : 'text-gray-400'}`}
                    aria-hidden="true"
                  />
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
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-sm shadow-lg max-h-40 ring-sky-600 ring-1 ring-opacity-5 focus:outline-none font-sans">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.value}
                      className={({ active }) =>
                        `${active ? 'text-sky-600 bg-gray-100' : 'text-stone-700'}
                        cursor-pointer select-none relative p-2 hover:bg-gray-200 hover:bg-opacity-50 `
                      }
                      value={option}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium text-sky-600' : 'font-normal'
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
          </>
        )}
      </Listbox>
    </div>
  );
};
export default SelectForm;
