import Home from '@/app/(home)/Home';
import type {Locale} from '~/i18n';
import type {ReactElement} from 'react';
import SectionHowItWorks from './(home)/SectionHowItWorks';
import type {StatsInfo} from '../../src/fetches/github';
import {getTranslates} from '../../src/localization';

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {home, plugins} = await getTranslates(lang);

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
      <Home t={home} statsInfo={statsInfo} />
      <SectionHowItWorks t={home} />
    </div>
  );
}
