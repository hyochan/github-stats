'use client';

import type {ReactElement} from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {SearchIcon} from '@primer/octicons-react';
import clsx from 'clsx';

import type {Translates} from '../../../../src/localization';
import Button from '../../(common)/Button';
import TextInput from '../../(common)/TextInput';

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
  const {formState} = useForm();

  return (
    <form
      action={`/stats/${login}`}
      method="get"
      className={clsx('', className)}
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
  );
}
