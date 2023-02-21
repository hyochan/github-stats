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
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
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
              // eslint-disable-next-line max-len
              "w-11 h-6 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-dark after:border-gray4 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600",
            )}
          />
        </label>
      </div>
    </div>
  );
}
