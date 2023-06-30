import type {ReactElement} from 'react';

import Home from '~/app/(home)/Home';
import type {Locale} from '~/src/i18n';
import type {StatsInfo} from '~/src/apis/github';
import {getTranslates} from '~/src/localization';

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
    people: {
      id: 'people',
      name: plugins.people,
      description: plugins.peopleDescription,
    },
  };

  return <Home t={home} statsInfo={statsInfo} />;
}
