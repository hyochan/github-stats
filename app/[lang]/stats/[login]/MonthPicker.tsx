'use client';

import type {ReactElement} from 'react';
import {useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from '@primer/octicons-react';

import type {Translates} from '../../../../src/localization';

type Props = {
  t: Translates['stats'];
  value?: string; // YYYY-MM format
  onChangeAction: (value: string | undefined) => void;
  className?: string;
  isLoading?: boolean;
};

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec',
];

export default function MonthPicker({
  t,
  value,
  onChangeAction,
  className,
  isLoading,
}: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [viewYear, setViewYear] = useState(() => {
    if (value) {
      return parseInt(value.split('-')[0]);
    }
    return new Date().getFullYear();
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const selectedYear = value ? parseInt(value.split('-')[0]) : null;
  const selectedMonth = value ? parseInt(value.split('-')[1]) - 1 : null;

  const handleMonthClick = (monthIndex: number) => {
    const newValue = `${viewYear}-${String(monthIndex + 1).padStart(2, '0')}`;
    onChangeAction(newValue);
    setIsOpen(false);
  };

  const handleClear = () => {
    onChangeAction(undefined);
    setIsOpen(false);
  };

  const isMonthDisabled = (monthIndex: number) => {
    if (viewYear > currentYear) return true;
    if (viewYear === currentYear && monthIndex > currentMonth) return true;
    if (viewYear < currentYear - 10) return true;
    return false;
  };

  const formatDisplay = () => {
    if (!value) {
      return t.selectPeriod;
    }
    const [year, month] = value.split('-');
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const monthName = monthNames[parseInt(month) - 1];
    // Show year only if it's not the current year
    if (parseInt(year) === currentYear) {
      return monthName;
    }
    return `${monthName} ${year}`;
  };

  return (
    <div
      ref={containerRef}
      className={clsx('relative flex items-center gap-2', className)}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'rounded-[12px] px-3 h-[40px]',
          'bg-gray1 dark:bg-gray8',
          'border border-border-light dark:border-border-dark',
          'flex items-center gap-2',
          'hover:bg-gray2 dark:hover:bg-gray7',
          'transition-all duration-300',
          'text-body4 whitespace-nowrap',
          'text-black dark:text-white',
        )}
      >
        <CalendarIcon size={14} />
        <span className={clsx(!value && 'text-placeholder-light dark:text-placeholder-dark')}>
          {formatDisplay()}
        </span>
      </button>
      {value && !isLoading && (
        <button
          type="button"
          onClick={handleClear}
          className={clsx(
            'rounded-full p-1.5',
            'bg-gray2 dark:bg-gray7',
            'hover:bg-gray3 dark:hover:bg-gray6',
            'text-black dark:text-white',
            'transition-all duration-200',
          )}
          title="Clear date"
        >
          <XIcon size={14} />
        </button>
      )}
      {isLoading && (
        <div
          style={{
            width: '20px',
            height: '20px',
            border: '2px solid #BEBEBE',
            borderTopColor: '#4190EB',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
      )}

      {isOpen && (
        <div
          className={clsx(
            'absolute top-full left-0 mt-2 z-50 w-[260px] p-4',
            'border border-border-light dark:border-border-dark rounded-[12px] shadow-xl',
            'bg-paper-light dark:bg-paper-dark',
            'text-black dark:text-white',
            'flex flex-col',
          )}
        >
          {/* Year navigation */}
          <div className="flex flex-row items-center justify-center gap-4 mb-4 w-full">
            <button
              type="button"
              onClick={() => setViewYear(viewYear - 1)}
              disabled={viewYear <= currentYear - 10}
              className="p-2 rounded-lg hover:bg-gray1 dark:hover:bg-gray8 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeftIcon size={16} />
            </button>
            <span className="font-semibold text-h3 min-w-[60px] text-center">
              {viewYear}
            </span>
            <button
              type="button"
              onClick={() => setViewYear(viewYear + 1)}
              disabled={viewYear >= currentYear}
              className="p-2 rounded-lg hover:bg-gray1 dark:hover:bg-gray8 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRightIcon size={16} />
            </button>
          </div>

          {/* Month grid - 4 columns x 3 rows */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
              width: '100%',
            }}
          >
            {MONTHS.map((month, monthIndex) => {
              const isSelected =
                selectedYear === viewYear && selectedMonth === monthIndex;
              const isDisabled = isMonthDisabled(monthIndex);

              return (
                <button
                  key={month}
                  type="button"
                  onClick={() => !isDisabled && handleMonthClick(monthIndex)}
                  disabled={isDisabled}
                  style={{
                    display: 'block',
                    padding: '8px 4px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 500,
                    textAlign: 'center',
                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                    opacity: isDisabled ? 0.3 : 1,
                    backgroundColor: isSelected ? '#4190EB' : 'transparent',
                    color: isSelected ? '#FFFFFF' : 'inherit',
                  }}
                  className={clsx(
                    'text-black dark:text-white',
                    !isSelected &&
                      !isDisabled &&
                      'hover:bg-gray2 dark:hover:bg-gray7',
                  )}
                >
                  {month}
                </button>
              );
            })}
          </div>

          {/* Description and clear button */}
          <div className="mt-4 pt-3 border-t border-border-light dark:border-border-dark w-full">
            <p className="text-body4 mb-2 text-placeholder-light dark:text-placeholder-dark">
              {t.periodDescription}
            </p>
            {value && (
              <button
                type="button"
                onClick={handleClear}
                className={clsx(
                  'block w-full py-2 rounded-lg text-body3 font-semibold',
                  'bg-gray1 dark:bg-gray8 hover:bg-gray2 dark:hover:bg-gray7',
                  'text-black dark:text-white',
                )}
              >
                {t.resetToDefault}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
