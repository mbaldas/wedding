'use client';

import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

const filters = [
  { id: 'lowPrice', name: 'Menor Preço' },
  { id: 'highPrice', name: 'Maior Preço' },
  { id: 'aToZ', name: 'A-Z' },
];

export default function Select({ selectedFilter, onChange }) {
  const handleFilterChange = (filterId) => {
    onChange(filterId === selectedFilter ? null : filterId);
  };

  return (
    <div className='relative mb-4 flex lg:justify-end'>
      <Listbox as='div' value={selectedFilter} onChange={handleFilterChange}>
        {({ open }) => (
          <>
            <Listbox.Button className='relative w-full lg:w-80 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 sm:text-sm sm:leading-6'>
              <span className='block truncate'>
                {selectedFilter
                  ? filters.find((filter) => filter.id === selectedFilter).name
                  : 'Ordenar por'}
              </span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ChevronUpDownIcon
                  aria-hidden='true'
                  className='h-5 w-5 text-gray-400'
                />
              </span>
            </Listbox.Button>

            {open && (
              <Listbox.Options className='absolute z-40 mt-1 w-full lg:w-80 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {filters.map((filter) => (
                  <Listbox.Option
                    key={filter.id}
                    value={filter.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-8 pr-4 ${
                        active ? 'bg-gray-800 text-white' : 'text-gray-900'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <label className='flex items-center'>
                        <input
                          type='radio'
                          checked={selectedFilter === filter.id}
                          onChange={() => handleFilterChange(filter.id)}
                          className='form-radio h-4 w-4 text-gray-800 transition duration-150 ease-in-out'
                        />
                        <span
                          className={`ml-3 block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {filter.name}
                        </span>
                      </label>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            )}
          </>
        )}
      </Listbox>
    </div>
  );
}
