'use client';

import Button from '../(common)/Button';
import {H1} from '../../../src/components/Typography';
import {Inter} from '@next/font/google';
import type {ReactElement} from 'react';
import {SearchIcon} from '@primer/octicons-react';
import TextInput from '../(common)/TextInput';
import type {Translates} from '../../../src/localization';
import clsx from 'clsx';
import {useForm} from 'react-hook-form';
import {useState} from 'react';

const inter = Inter({subsets: ['latin']});

export default function UserStats({t}: {t: Translates['stats']}): ReactElement {
  const [login, setLogin] = useState('');
  const {register, formState, handleSubmit} = useForm();

  return (
    <div className="self-stretch flex flex-col">
      <div className="self-stretch flex flex-row mb-2">
        <form
          // onSubmit={handleSubmit(searchUser)}
          className="flex-1 max-w-[800px]"
          autoComplete="off"
        >
          <div
            className={clsx(
              'rounded-[4px] bg-gray7 px-3 h-[48px] relative body2',
              'flex flex-row-reverse items-center',
            )}
          >
            <TextInput
              className="text-white"
              {...register('githubID')}
              placeholder={t.githubUsername}
              onChange={(e) => {
                setLogin(e.target.value.trim());
              }}
            />
            <Button
              loading={formState.isSubmitting}
              type="submit"
              className={clsx(
                'bg-transparent border-0 text-center max-w-[100px] p-2',
                'absolute',
              )}
              text={<SearchIcon size={22} fill="#FFF" />}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
