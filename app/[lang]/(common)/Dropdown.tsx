'use-client';

import type {MouseEventHandler, ReactElement} from 'react';
import {useRef, useState} from 'react';

import {TriangleDownIcon} from '@primer/octicons-react';
import {useOnClickOutside} from 'usehooks-ts';

interface DropdownProps<T extends {domain: string; icon: ReactElement}> {
  selected: T;
  setSelected: (value: T) => void;
  data: T[];
}

function Dropdown<T extends {domain: string; icon: ReactElement}>({
  selected,
  setSelected,
  data = [],
}: DropdownProps<T>): ReactElement {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);

  const handleClickOutside = (): void => {
    setIsOpened(false);
  };

  useOnClickOutside(dropdownRef, handleClickOutside);

  const onClick: MouseEventHandler<HTMLButtonElement> | undefined = (
    e,
  ): void => {
    e.preventDefault();
    setIsOpened(!isOpened);
  };

  return (
    <div
      ref={dropdownRef}
      className="
        rounded-[4px] relative font-inter h-10 outline-none
        flex justify-center items-center
      "
      style={{
        backgroundColor: 'rgb(84,84,84)',
        boxSizing: 'border-box',
      }}
    >
      <button
        onClick={onClick}
        className="
          rounded-[4px] text-white cursor-pointer p-[8px] ml-auto
          border-none align-middle transition-shadow
          flex flex-row items-center justify-center
        "
        style={{
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
        }}
      >
        {selected?.icon}
        <span className="font-semibold align-middle text-[14px] ml-2 max-[425px]:hidden">
          {selected?.domain || ''}
        </span>
        <TriangleDownIcon size={24} />
      </button>
      <nav
        className={`${
          isOpened
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-2'
        } bg-gray6 absolute top-12 right-0 rounded-md transition-all duration-400`}
        style={{
          boxShadow: '0 1px 8px rgba(0, 0, 0, 0.3)',
        }}
      >
        <ul className="list-none p-0 bg-gray9">
          {data.map((item) => (
            <li
              key={item.domain}
              onClick={() => {
                setIsOpened(false);
                setSelected(item);
              }}
              className="flex items-center py-2 px-4 hover:bg-gray-200 cursor-pointer text-white"
            >
              {item.icon}
              <span className="font-semibold text-sm ml-2">{item.domain}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Dropdown;
