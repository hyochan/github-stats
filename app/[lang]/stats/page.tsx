import type {ReactElement} from 'react';

import type {Locale} from '../../../src/i18n';
import {getTranslates} from '../../../src/localization';

import Container from './Container';
import AdFitResponsive from '../(common)/AdFitResponsive';

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {stats: t} = await getTranslates(lang);

  return (
    <Container t={t}>
      <div className="max-[480px]:pt-10 max-[480px]:px-6">
        <p className="text-dark dark:text-paper-light">{t.searchUserHint}.</p>
      </div>
      <AdFitResponsive className="mt-8 max-[480px]:px-6" />
    </Container>
  );
}
