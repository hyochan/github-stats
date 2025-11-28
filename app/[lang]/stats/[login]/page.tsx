import type {ReactElement} from 'react';

import {
  getDoobooStats,
  getMonthlyContribution,
} from '../../../../server/services/githubService';
import {getTranslates} from '../../../../src/localization';
import Container from '../Container';

import Scouter from './Scouter';
import GreatFrontEnd from '../../(common)/GreatFrontEnd';
import SearchTextInput from './SearchTextInput';

import type {Locale} from '~/i18n';

// Force dynamic rendering to ensure fresh data for each request
export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{lang: string; login: string}>;
  searchParams: Promise<{endDate?: string}>;
};

export default async function Page(props: Props): Promise<ReactElement> {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const lang = params.lang as Locale;
  const login = params.login;
  const endDate = searchParams.endDate;
  const {stats: tStats} = await getTranslates(lang);

  // Calculate start date (12 months before end date)
  const getStartDate = (end?: string) => {
    const endDateObj = end
      ? new Date(`${end}-01T00:00:00Z`)
      : new Date();
    const year = endDateObj.getUTCFullYear();
    const month = endDateObj.getUTCMonth() - 11; // 12 months before
    const date = new Date(Date.UTC(year, month, 1));
    return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`;
  };

  const startDate = getStartDate(endDate);

  // Fetch stats and monthly contributions in parallel
  const [stats, monthlyContributions] = await Promise.all([
    getDoobooStats({login, lang, startDate: endDate}),
    getMonthlyContribution({login, startDate}),
  ]);

  // Merge monthly contributions into stats
  const statsWithMonthly = stats
    ? {...stats, monthlyContributions}
    : null;

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
      {!!statsWithMonthly ? (
        <Scouter stats={statsWithMonthly} t={tStats} endDate={endDate} />
      ) : null}
    </Container>
  );
}
