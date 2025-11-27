'use client';

import type {ReactElement} from 'react';
import {XIcon, ClockIcon} from '@primer/octicons-react';
import clsx from 'clsx';

type Props = {
  history: string[];
  query: string;
  onSelectAction: (item: string) => void;
  onRemoveAction: (item: string) => void;
  show: boolean;
};

export default function SearchHistoryDropdown({
  history,
  query,
  onSelectAction,
  onRemoveAction,
  show,
}: Props): ReactElement | null {
  const filteredHistory = query
    ? history.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase()),
      )
    : history;

  if (!show || filteredHistory.length === 0) {
    return null;
  }

  return (
    <div
      className={clsx(
        'absolute top-full left-0 right-0 mt-2 mx-2',
        'bg-white/95 dark:bg-black/95',
        'backdrop-blur-xl',
        'border border-black/10 dark:border-white/20',
        'rounded-2xl shadow-xl',
        'overflow-hidden',
        'z-50',
      )}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="max-h-[240px] overflow-y-auto">
        <div className="flex flex-wrap gap-2 p-3">
          {filteredHistory.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className={clsx(
                'flex items-center gap-2',
                'px-3 py-1.5',
                'cursor-pointer',
                'transition-colors duration-150',
                'group',
                'rounded-full',
                'bg-black/5 dark:bg-white/10',
                'hover:bg-black/10 dark:hover:bg-white/20',
              )}
              onClick={() => onSelectAction?.(item)}
            >
              <ClockIcon
                size={14}
                className="text-gray5 dark:text-gray4 flex-shrink-0"
              />
              <span className="text-gray5 dark:text-gray3 group-hover:text-black dark:group-hover:text-white text-sm">
                {item}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveAction?.(item);
                }}
                className={clsx(
                  'ml-1',
                  'text-gray4 dark:text-gray3 hover:text-red1',
                  'transition-colors duration-150',
                  'flex-shrink-0',
                )}
                aria-label="Remove from history"
              >
                <XIcon size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
