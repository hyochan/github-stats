'use client';

import type {ReactElement} from 'react';
import clsx from 'clsx';
import {twMerge} from 'tailwind-merge';

type Props = {
  isDark: boolean;
  onToggle: () => void;
};

export default function SwitchToggle({isDark, onToggle}: Props): ReactElement {
  return (
    <div
      className={clsx(
        'relative min-h-screen overflow-hidden',
        'flex flex-col items-center justify-center',
      )}
    >
      <div className="flex">
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isDark}
            readOnly
          />
          <div
            onClick={onToggle}
            className={twMerge(
              clsx(isDark ? 'bg-gray8' : 'bg-gray3'),
              clsx(
                'w-11 h-6 rounded-full',
                'after:absolute after:top-0.5 after:left-[2px]  after:rounded-full after:h-5 after:w-5 after:transition-all',
                'after:bg-dark after:border-gray4 after:border',
                'peer peer-focus:ring-green-300 peer-checked:bg-green-600',
                'peer-checked:after:translate-x-full peer-checked:after:border-white',
              ),
            )}
          />
        </label>
      </div>
    </div>
  );
}
