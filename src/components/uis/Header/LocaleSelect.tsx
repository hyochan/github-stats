'use client';

import type {ChangeEventHandler, ReactElement} from 'react';
import clsx from 'clsx';
import {usePathname, useRouter} from 'next/navigation';

import {useLocaleContext} from '../../providers/LocaleProvider';

import type {i18n} from '~/src/i18n';
import type {TupleToUnion} from '~/src/types/types';

type Props = {
  languages: {en: string; ko: string};
};

export default function LocaleSwitcher({languages}: Props): ReactElement {
  const {locale: curLocale, changeLocale} = useLocaleContext();
  const pathName = usePathname();
  const router = useRouter();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e): void => {
    const path = pathName || '/';
    const newLocale = e.target.value as TupleToUnion<(typeof i18n)['locales']>;
    const segments = path.split('/');

    segments[1] = newLocale;
    changeLocale(newLocale);
    router.push(segments.join('/'));
  };

  return (
    <div>
      <select
        name="lang-switcher"
        onChange={handleChange}
        defaultValue={curLocale}
        style={{fontSize: 12}}
        className={clsx(
          'appearance-none bg-gray-50 border border-gray-300 text-gray-900',
          'rounded-md shadow-sm py-1',
          'focus:ring-blue-500 focus:border-blue-500',
        )}
      >
        {Object.keys(languages).map((lang) => {
          const curLang = lang === 'en' ? 'en' : 'ko';

          return (
            <option key={lang} value={lang}>
              {languages[curLang]}
            </option>
          );
        })}
      </select>
    </div>
  );
}
