import React, { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

interface SelectFormProps {
  name: string;
  onChange: (value: boolean) => void;
}

export default function SelectForm({ name, onChange }: SelectFormProps) {
  const [selectedState, setSelectedState] = useState(false);

  const handleSelectChange = (value: boolean) => {
    setSelectedState(value); // Actualiza el estado seleccionado
    onChange(value); // Llama a la función onChange si está definida
  };

  return (
    <Listbox value={selectedState} onChange={handleSelectChange}>
      {({ open }) => (
        <>
          <Listbox.Label
            htmlFor={name}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {name}
          </Listbox.Label>

          <div className="relative mt-2">
            <Listbox.Button
              id={name}
              name={name}
              className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
            >
              <span className="flex items-center">
                <CheckIcon
                  className={`${selectedState ? 'text-indigo-600' : 'text-gray-400'} h-5 w-5 flex-shrink-0`}
                  aria-hidden="true"
                />
                <span className="ml-3 block truncate">
                  {selectedState ? 'True' : 'False'}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-36 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Listbox.Option
                  value={true}
                  className={({ active }) =>
                    `${active ? 'bg-indigo-600 text-white' : 'text-gray-900'} relative cursor-default select-none py-2 pl-3 pr-9`
                  }
                >
                  {({ selected, active }) => (
                    <div className="flex items-center">
                      <CheckIcon
                        className={`${selected ? 'text-white' : 'text-transparent'} absolute inset-y-0 left-0 ml-1.5 flex-shrink-0`}
                        aria-hidden="true"
                      />
                      <span
                        className={`${selected ? 'font-semibold' : 'font-normal'} ml-3 block truncate`}
                      >
                        True
                      </span>
                    </div>
                  )}
                </Listbox.Option>
                <Listbox.Option
                  value={false}
                  className={({ active }) =>
                    `${active ? 'bg-indigo-600 text-white' : 'text-gray-900'} relative cursor-default select-none py-2 pl-3 pr-9`
                  }
                >
                  {({ selected, active }) => (
                    <div className="flex items-center">
                      <CheckIcon
                        className={`${selected ? 'text-white' : 'text-transparent'} absolute inset-y-0 left-0 ml-1.5 flex-shrink-0`}
                        aria-hidden="true"
                      />
                      <span
                        className={`${selected ? 'font-semibold' : 'font-normal'} ml-3 block truncate`}
                      >
                        False
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
