import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { Control, Controller } from 'react-hook-form';

export type OptionSelect = { value: any; label: string };

interface Props {
  name: string;
  label?: string;
  options: OptionSelect[];
  placeholder?: string;
  control: Control<any>;
  error?: string;
}

const SelectForm = ({ name, label, options, placeholder, control, error }: Props) => {
  return (
    <div className="text-sm w-full">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Listbox
            value={options.find((opt) => opt.value === value) || ''}
            onChange={(val: OptionSelect) => onChange(val.value)}
          >
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
                      {options.find((opt) => opt.value === value)?.label || placeholder}
                    </span>
                    <span className="flex pointer-events-none items-center">
                      <ChevronDownIcon
                        className={`w-5 h-5 ${error ? 'text-red-500' : 'text-gray-400'}`}
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
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
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium text-sky-600' : 'font-normal'
                              }`}
                            >
                              {option.label}
                            </span>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        )}
      />
    </div>
  );
};

export default SelectForm;
