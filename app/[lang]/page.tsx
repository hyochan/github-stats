import Header from './(home)/Header';
import Home from './(home)/Home';
import type {Locale} from '~/i18n';
import type {ReactElement} from 'react';
import type {StatsInfo} from '../../src/fetches/github';
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
  const {nav, langs, home, plugins} = await getTranslates(lang);

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

  const statsInfo: StatsInfo = {
    tree: {
      id: 'tree',
      name: plugins.tree,
      description: plugins.treeDescription,
    },
    fire: {
      id: 'fire',
      name: plugins.fire,
      description: plugins.fireDescription,
    },
    earth: {
      id: 'earth',
      name: plugins.earth,
      description: plugins.earthDescription,
    },
    gold: {
      id: 'gold',
      name: plugins.gold,
      description: plugins.goldDescription,
    },
    water: {
      id: 'water',
      name: plugins.water,
      description: plugins.waterDescription,
    },
    person: {
      id: 'person',
      name: plugins.person,
      description: plugins.personDescription,
    },
  };

  return (
    <div className="h-full flex flex-col">
      <Header
        navLinks={navLinks}
        langs={{
          en: langs.en,
          ko: langs.ko,
        }}
      />
      <Home t={home} statsInfo={statsInfo} />
    </div>
  );
}
