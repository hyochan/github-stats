'use client';

import type {ChangeEventHandler, ReactElement} from 'react';
import {usePathname, useRouter} from 'next/navigation';

import type {TupleToUnion} from '~/types/utils';
import {i18n} from '~/i18n';
import {useLocaleContext} from './LocaleProvider';

export default function LocaleSwitcher(): ReactElement {
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
      >
        {i18n.locales.map((locale) => {
          return (
            <option key={locale} value={locale}>
              {locale}
            </option>
          );
        })}
      </select>
    </div>
  );
}
