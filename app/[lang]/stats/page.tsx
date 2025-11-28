import type {ReactElement} from 'react';

import type {Locale} from '../../../src/i18n';
import {getTranslates} from '../../../src/localization';

import Container from './Container';
import GreatFrontEnd from '../(common)/GreatFrontEnd';
import SearchTextInput from './[login]/SearchTextInput';

type Props = {
  params: Promise<{lang: string}>;
};

export default async function Page(props: Props): Promise<ReactElement> {
  const params = await props.params;
  const lang = params.lang as Locale;
  const {stats: t} = await getTranslates(lang);

  return (
    <Container t={t}>
      <div className="flex flex-col items-center gap-8 max-[480px]:px-6">
        <p className="text-dark dark:text-paper-light text-center">{t.searchUserHint}</p>
        <SearchTextInput
          t={t}
          className="w-full max-w-[600px]"
          initialValue={''}
        />
        <GreatFrontEnd
          href="https://www.greatfrontend.com/front-end-interview-playbook?fpr=hyo73"
          title="Front End Interview Guidebook"
        />
      </div>
    </Container>
  );
}
