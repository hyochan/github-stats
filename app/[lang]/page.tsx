import Header from './(home)/header';
import Home from './(home)/Home';
import type {Locale} from '~/i18n';
import type {ReactElement} from 'react';
import {getTranslates} from '../../src/localization';

type Props = {
  params: {lang: Locale};
};

export type NavLink = {
  name: string;
  path: string;
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {nav} = await getTranslates(lang);
  const navLinks: NavLink[] = [
    {
      name: nav.recentList,
      path: '/recentList',
    },
    // TODO: remove this comment when the feature is ready.
    // {
    //   name: nav.certifiedUsers,
    //   path: '/certifiedUsers',
    // },
  ];

  return (
    <div className="h-full flex flex-col">
      <Header navLinks={navLinks} />
      <Home lang={lang} />
    </div>
  );
}
