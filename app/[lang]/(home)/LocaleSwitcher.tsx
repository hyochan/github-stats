'use client';

import type {ChangeEventHandler, ReactElement} from 'react';
import {usePathname, useRouter} from 'next/navigation';

import type {TupleToUnion} from '~/types/utils';
import type {i18n} from '~/i18n';
import {useLocaleContext} from '../../../src/components/LocaleProvider';

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
        className="
          appearance-non
          bg-gray-50 border border-gray-300 text-gray-900
          rounded-md shadow-sm py-1
          focus:ring-blue-500 focus:border-blue-500"
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
