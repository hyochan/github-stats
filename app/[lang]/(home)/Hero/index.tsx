'use client';

import {MarkGithubIcon, SearchIcon} from '@primer/octicons-react';

import Button from '../../(common)/Button';
import ButtonGroup from '../../(common)/ButtonGroup';
import Dropdown from '../../(common)/Dropdown';
import type {ReactElement} from 'react';
import type {StatsInfo} from '../../../../src/fetches/github';
import StatsSymbols from './StatsSymbol';
import StatsUrlCard from './StatsUrlCards';
import TextInput from '../../(common)/TextInput';
import type {Translates} from '../../../../src/localization';
import clsx from 'clsx';
import {fetchGithubStats} from '../../../../src/fetches/github';
import {track} from '@amplitude/analytics-browser';
import {useForm} from 'react-hook-form';
import {useState} from 'react';

const rootUrl = `${process.env.NEXT_PUBLIC_ROOT_URL}/api`;

const generateSvgUrlToCopy = (login: string, isBasic?: boolean): string => {
  if (isBasic) {
    return `![${login} GitHub Stats](${rootUrl}/github-stats?login=${login})`;
  }

  return `![${login} GitHub Stats](${rootUrl}/github-stats-advanced?login=${login})`;
};

type SvgType = 'basic' | 'advanced' | 'trophies';

const getSVGUrl = (type: SvgType, login: string): string => {
  return type === 'advanced'
    ? `${rootUrl}/github-stats-advanced?login=${login}`
    : type === 'trophies'
    ? `${rootUrl}/github-trophies?login=${login}`
    : `${rootUrl}/github-stats?login=${login}`;
};

type Props = {
  t: Translates['home'];
  statsInfo: StatsInfo;
};

export type PluginType = {
  domain: string;
  icon: ReactElement;
};

function Hero({t, statsInfo}: Props): ReactElement {
  const statTypes: PluginType[] = [
    {
      domain: 'github.com',
      icon: <MarkGithubIcon size={24} />,
    },
  ];

  const [selectedPluginType, setSelectedPluginType] = useState(statTypes[0]);
  const [login, setLogin] = useState('');
  const [searchLogin, setSearchedUID] = useState('');
  const [githubSVG, setGithubSVG] = useState<string | null>(null);
  const [noTrophies, setNoTrophies] = useState(false);
  const [svgStatsURL, setSvgStatsURL] = useState<string>('');
  const [isBasic, setIsBasic] = useState<boolean | undefined>(undefined);
  const {register, formState, handleSubmit} = useForm();

  const searchUser = async (): Promise<void> => {
    if (selectedPluginType.domain === 'github.com') {
      try {
        const svgStats = await fetchGithubStats(login);

        track('Search User', {login});

        // NOTE: Should use `unescape` to translate chinese letters. The new api `decodeURIComponent` won't work.
        // Related issue https://stackoverflow.com/questions/23223718/failed-to-execute-btoa-on-window-the-string-to-be-encoded-contains-characte
        const base64dataStats = btoa(unescape(encodeURIComponent(svgStats)));
        setGithubSVG(base64dataStats);

        setSvgStatsURL(generateSvgUrlToCopy(login, false));
        setSearchedUID(login);
        setIsBasic(false);
        setNoTrophies(false);
      } catch (err) {
        setGithubSVG(null);
        setSvgStatsURL('');
        setIsBasic(undefined);
      }
    }
  };

  return (
    <div
      className={clsx(
        'self-stretch bg-cover',
        'flex flex-col justify-center items-center',
        'max-[425px]:p-0',
      )}
    >
      <div
        className={clsx(
          'self-stretch px-14',
          'flex flex-col align-start justify-start',
          'max-[425px]:px-8',
        )}
      >
        <p className="h1 text-[44px] text-left font-bold mt-[80px] mb-8">
          {t.visualizeDevStats}
        </p>
        <p className="body1 text-[20px] text-left mb-[36px] opacity-50">
          {t.visualizeDevStatsDesc}
        </p>
        {/* Begin: Search Form */}
        <form
          onSubmit={handleSubmit(searchUser)}
          className="self-stretch"
          autoComplete="off"
        >
          <div
            className={clsx(
              'rounded-[4px] bg-gray7 px-3 h-[64px] relative body2 max-w-[800px]',
              'flex flex-row-reverse items-center',
              'max-[425px]:p-3 max-[425px]:self-stretch max-[425px]:h-auto max-[425px]:flex-wrap',
              'max-[320px]:py-3 max-[320px]:items-start',
            )}
          >
            <Button
              isLoading={formState.isSubmitting}
              type="submit"
              className={clsx(
                'bg-transparent border-0 text-center max-w-[100px] p-2',
                'absolute',
              )}
              text={<SearchIcon size={22} fill="#FFF" />}
            />
            <div className={clsx('flex-1', 'flex flex-row items-center')}>
              <Dropdown
                data={statTypes}
                selected={selectedPluginType}
                setSelected={(el) => {
                  setSelectedPluginType(el);
                }}
              />
              <span
                className={clsx(
                  'text-white',
                  'mx-3 body3 text-[22px]',
                  'max-[425px]:invisible max-[425px]:hidden',
                )}
              >
                /
              </span>
              <TextInput
                className="text-white"
                {...register('githubID')}
                placeholder={t.githubUsername}
                onChange={(e) => {
                  setLogin(e.target.value.trim());
                }}
              />
            </div>
          </div>
        </form>
        {/* End: Search Form */}
        {/* Begin: Stats */}
        {githubSVG ? (
          <div
            className={clsx(
              'max-w-[800px] flex-1 self-stretch',
              'flex flex-col',
            )}
          >
            <ButtonGroup
              className="py-[4px] w-[98%] mt-[18px] mb-[10px]"
              selectedIndex={isBasic ? 0 : 1}
              buttons={[{label: t.basic}, {label: t.advanced}]}
              onClick={(index) => {
                const shouldBeBasic = index === 0;
                setSvgStatsURL(generateSvgUrlToCopy(login, shouldBeBasic));
                setIsBasic(shouldBeBasic);

                track('Press Stat Tab', {login, basic: shouldBeBasic});
              }}
            />
            {/* Begin: Scouter */}
            <div
              className={clsx(
                'flex-1 relative self-stretch max-w-[800px] mb-[8px] mt-[4px]',
                'max-[425px]:w-full max-[425px]:max-w-[425px]',
              )}
            >
              {!isBasic ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="w-full"
                  alt="github svg"
                  src={`data:image/svg+xml;base64,${githubSVG}`}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="w-full"
                  alt="github svg"
                  src={getSVGUrl(isBasic ? 'basic' : 'advanced', searchLogin)}
                />
              )}
            </div>
            {/* End: Scouter */}
            {!noTrophies ? (
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getSVGUrl('trophies', searchLogin)}
                  onError={() => setNoTrophies(true)}
                  alt="github trophies"
                  className="w-full mx-[4px] m-b[6px]"
                />
              </div>
            ) : null}
            {svgStatsURL ? (
              <StatsUrlCard
                t={t}
                selectedPluginType={selectedPluginType}
                svgStatsURL={svgStatsURL}
                svgTrophiesURL={
                  !noTrophies ? getSVGUrl('trophies', searchLogin) : ''
                }
                login={searchLogin}
              />
            ) : null}
          </div>
        ) : null}
        {/* End: Stats */}
        <StatsSymbols statsInfo={statsInfo} className="mt-3 mb-14" />
      </div>
    </div>
  );
}

export default Hero;
