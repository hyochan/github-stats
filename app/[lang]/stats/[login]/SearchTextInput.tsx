'use client';

import Button from '../../(common)/Button';
import type {ReactElement} from 'react';
import {SearchIcon} from '@primer/octicons-react';
import TextInput from '../../(common)/TextInput';
import type {Translates} from '../../../../src/localization';
import clsx from 'clsx';
import {useForm} from 'react-hook-form';
import {useState} from 'react';

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
          'rounded-[4px] body4 bg-gray3 dark:bg-gray7 px-3 h-[32px] relative',
          'flex flex-row-reverse items-center',
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
