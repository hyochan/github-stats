'use client';

import type {MouseEventHandler, ReactElement} from 'react';
import {useRef, useState} from 'react';
import {TriangleDownIcon} from '@primer/octicons-react';
import clsx from 'clsx';
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
      className={clsx(
        'rounded-[12px] relative font-inter h-10 outline-none',
        'flex justify-center items-center',
        'bg-white/70 dark:bg-black/70',
        'backdrop-blur-xl',
        'border border-black/20 dark:border-white/30',
        'hover:bg-white/80 dark:hover:bg-black/80',
        'transition-all duration-300',
      )}
    >
      <button
        onClick={onClick}
        className={clsx(
          'rounded-[12px] text-gray7 dark:text-white cursor-pointer p-[8px] ml-auto border-none align-middle',
          'flex flex-row items-center justify-center',
          'transition-all duration-200',
        )}
      >
        {selected?.icon}
        <span
          className={clsx(
            'font-semibold align-middle text-[14px] ml-2',
            'max-[480px]:hidden',
          )}
        >
          {selected?.domain || ''}
        </span>
        <TriangleDownIcon size={24} />
      </button>
      <nav
        className={`${
          isOpened
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-2'
        } absolute top-12 left-0 rounded-[12px] transition-all duration-400 bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-black/20 dark:border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.3)]`}
      >
        <ul className="list-none p-0 rounded-[12px] overflow-hidden">
          {data.map((item) => (
            <li
              key={item.domain}
              onClick={() => {
                setIsOpened(false);
                setSelected(item);
              }}
              className={clsx(
                'py-2 px-4 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer text-gray7 dark:text-white',
                'flex items-center',
                'transition-all duration-200',
              )}
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
