'use client';

import type {ReactElement} from 'react';
import {useState, useRef} from 'react';
import {useForm} from 'react-hook-form';
import {SearchIcon} from '@primer/octicons-react';
import clsx from 'clsx';

import type {Translates} from '../../../../src/localization';
import Button from '../../(common)/Button';
import TextInput from '../../(common)/TextInput';
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
  const {formState} = useForm();
  const {history, addToHistory, removeFromHistory} = useSearchHistory();
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleHistorySelect = (item: string) => {
    setLogin(item);
    setShowHistory(false);
    addToHistory(item);
    // Trigger navigation
    setTimeout(() => {
      window.location.href = `/stats/${item}`;
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login) {
      addToHistory(login);
      setShowHistory(false);
      window.location.href = `/stats/${login}`;
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
          'rounded-[16px] body4 px-4 h-[56px]',
          'bg-black/10 dark:bg-white/5',
          'backdrop-blur-md',
          'border border-black/20 dark:border-white/10',
          'flex flex-row-reverse items-center',
          'hover:bg-black/15 dark:hover:bg-white/8',
          'transition-all duration-300',
        )}
      >
        <TextInput
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
        />
        <Button
          loading={formState.isSubmitting}
          type="submit"
          className={clsx(
            'bg-transparent border-0 text-center px-2 pt-2',
            'absolute',
          )}
          text={<SearchIcon size={14} className="text-basic" />}
        />
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
