import type {ReactElement} from 'react';

import {revalidatePath} from 'next/cache';
import {getDoobooStats} from '../../../../server/services/githubService';
import {getTranslates} from '../../../../src/localization';
import Container from '../Container';

import Scouter from './Scouter';
import GreatFrontEnd from '../../(common)/GreatFrontEnd';
import SearchTextInput from './SearchTextInput';

import type {Locale} from '~/i18n';

type Props = {
  params: Promise<{lang: string; login: string}>;
};

export default async function Page(props: Props): Promise<ReactElement> {
  const params = await props.params;
  const lang = params.lang as Locale;
  const login = params.login;
  const {stats: tStats} = await getTranslates(lang);

  const stats = await getDoobooStats({
    login,
    lang,
  });

  revalidatePath('/stats', 'page');

  return (
    <Container
      t={tStats}
      headerSearch={
        <SearchTextInput
          t={tStats}
          className="mt-4 flex-1 min-w-[400px] max-[768px]:min-w-[300px] max-[480px]:hidden"
          initialValue={login}
        />
      }
      headerRight={
        <GreatFrontEnd
          className="mt-4 max-[480px]:hidden"
          href="https://www.greatfrontend.com/questions/formats/system-design?fpr=hyo73"
          title="Front End System design questions"
        />
      }
    >
      {!!stats ? <Scouter stats={stats} t={tStats} /> : null}
    </Container>
  );
}
