'use client';

import type {ReactElement} from 'react';
import {useState, useRef, useEffect} from 'react';
import {SearchIcon} from '@primer/octicons-react';
import clsx from 'clsx';

import {usePathname, useRouter} from 'next/navigation';

import type {Translates} from '../../../../src/localization';
import SearchHistoryDropdown from '../../(home)/Hero/SearchHistoryDropdown';
import {useSearchHistory} from '../../../../src/hooks/useSearchHistory';

export default function SearchTextInput({
  t,
  className,
  initialValue,
}: {
  t: Translates['stats'];
  className?: string;
  initialValue: string;
}): ReactElement {
  const [login, setLogin] = useState(initialValue);
  const [showHistory, setShowHistory] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pendingLoginRef = useRef<string | null>(null);
  const {history, addToHistory, removeFromHistory} = useSearchHistory();
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Extract language from pathname (e.g., /ko/stats/hyochan -> ko)
  const lang = pathname?.split('/')[1] || 'en';

  // Keep local login input in sync with incoming value
  useEffect(() => {
    setLogin(initialValue);
  }, [initialValue]);

  // Reset loading state when navigation completes
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (pendingLoginRef.current && initialValue === pendingLoginRef.current) {
        pendingLoginRef.current = null;
        setIsLoading(false);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [initialValue]);

  const navigateTo = (loginValue: string) => {
    // Avoid toggling loading when navigating to the same user
    if (loginValue === initialValue) {
      return;
    }

    pendingLoginRef.current = loginValue;
    setIsLoading(true);
    router.push(`/${lang}/stats/${loginValue}`);
  };

  const handleHistorySelect = (item: string) => {
    setLogin(item);
    setShowHistory(false);
    addToHistory(item);
    navigateTo(item);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login) {
      addToHistory(login);
      setShowHistory(false);
      navigateTo(login);
    }
  };

  return (
    <div ref={searchContainerRef} className={clsx('relative', className)}>
      <form
        onSubmit={handleSubmit}
        className="w-full"
        autoComplete="off"
      >
      <div
        className={clsx(
          'rounded-[16px] body4 px-3 h-[56px]',
          'bg-black/10 dark:bg-white/5',
          'backdrop-blur-md',
          'border border-black/20 dark:border-white/10',
          'flex items-center',
          'hover:bg-black/15 dark:hover:bg-white/8',
          'transition-all duration-300',
        )}
      >
        <input
          type="text"
          value={login}
          placeholder={t.githubUsername}
          onChange={(e) => {
            setLogin(e.target.value.trim());
          }}
          onFocus={() => setShowHistory(true)}
          onBlur={() => {
            // Delay to allow click on history items
            setTimeout(() => setShowHistory(false), 200);
          }}
          className={clsx(
            'flex-1 min-w-0 h-full',
            'bg-transparent border-none outline-none',
            'text-basic placeholder:text-placeholder',
            'font-inter px-2',
          )}
        />
        <button
          type="submit"
          disabled={isLoading || !login}
          aria-label={
            isLoading
              ? `${t.search ?? 'Search'}…`
              : t.search || 'Search'
          }
          className={clsx(
            'w-10 h-10 flex-shrink-0 rounded-full ml-1',
            'hover:bg-black/10 dark:hover:bg-white/10',
            'transition-all duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'flex items-center justify-center',
          )}
        >
          {isLoading ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-brand dark:border-gray-600 dark:border-t-brand" />
          ) : (
            <SearchIcon size={20} className="text-basic" />
          )}
        </button>
      </div>
      </form>
      <SearchHistoryDropdown
        history={history}
        query={login}
        onSelectAction={handleHistorySelect}
        onRemoveAction={removeFromHistory}
        show={showHistory}
      />
    </div>
  );
}
