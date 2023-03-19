import type {ReactElement} from 'react';
import type {Locale} from '../../../src/i18n';
import {getTranslates} from '../../../src/localization';
import Container from './Container';

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {stats: t} = await getTranslates(lang);

  return (
    <Container t={t}>
      <div className="max-[480px]:p-6">
        <p className="text-dark dark:text-paper-light">{t.searchUserHint}.</p>
      </div>
    </Container>
  );
}
