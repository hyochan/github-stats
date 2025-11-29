import type {Metadata} from 'next';
import type {ReactElement} from 'react';

import type {StatsInfo} from '../../src/fetches/github';
import {getTranslates} from '../../src/localization';

import Home from '@/app/(home)/Home';
import type {Locale} from '~/i18n';

type Props = {
  params: Promise<{lang: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {lang} = await params;
  const {home} = await getTranslates(lang as Locale);

  return {
    title: home.developerPowerMeter,
    description: home.developerPowerMeterDesc,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: '/en',
        ko: '/ko',
      },
    },
  };
}

export default async function Page(props: Props): Promise<ReactElement> {
  const params = await props.params;
  const lang = params.lang as Locale;
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
