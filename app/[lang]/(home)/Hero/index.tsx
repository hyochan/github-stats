'use client';

import type {ReactElement} from 'react';
import {useState, useRef} from 'react';
import {useForm} from 'react-hook-form';
import {track} from '@amplitude/analytics-browser';
import {MarkGithubIcon, SearchIcon} from '@primer/octicons-react';
import clsx from 'clsx';

import type {StatsInfo} from '../../../../src/fetches/github';
import {fetchGithubStats} from '../../../../src/fetches/github';
import type {Translates} from '../../../../src/localization';
import Button from '../../(common)/Button';
import ButtonGroup from '../../(common)/ButtonGroup';
import Dropdown from '../../(common)/Dropdown';
import TextInput from '../../(common)/TextInput';

import StatsSymbols from './StatsSymbol';
import StatsUrlCard from './StatsUrlCards';
import SearchHistoryDropdown from './SearchHistoryDropdown';
import {useMediaQuery} from 'usehooks-ts';
import GreatFrontEnd from '../../(common)/GreatFrontEnd';
import {useSearchHistory} from '../../../../src/hooks/useSearchHistory';

const rootUrl = `${process.env.NEXT_PUBLIC_ROOT_URL}/api`;
const baseUrl = process.env.NEXT_PUBLIC_ROOT_URL;

// For display (markdown format)
const generateSvgUrlToDisplay = (login: string, isBasic?: boolean): string => {
  const apiEndpoint = isBasic ? 'github-stats' : 'github-stats-advanced';
  return `![${login} github-stats](${rootUrl}/${apiEndpoint}?login=${login})`;
};

// For copying (HTML format)
const generateSvgUrlToCopy = (login: string, isBasic?: boolean): string => {
  const apiEndpoint = isBasic ? 'github-stats' : 'github-stats-advanced';
  return `<a href="${baseUrl}/stats/${login}"><img src="${rootUrl}/${apiEndpoint}?login=${login}" width="600" /></a>`;
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

  const isMobile = useMediaQuery('(max-width: 768px)');
  const [selectedPluginType, setSelectedPluginType] = useState(statTypes[0]);
  const [login, setLogin] = useState('');
  const [searchLogin, setSearchedUID] = useState('');
  const [githubSVG, setGithubSVG] = useState<string | null>(null);
  const [noTrophies, setNoTrophies] = useState(false);
  const [svgStatsURLDisplay, setSvgStatsURLDisplay] = useState<string>('');
  const [svgStatsURLCopy, setSvgStatsURLCopy] = useState<string>('');
  const [isBasic, setIsBasic] = useState<boolean | undefined>(undefined);
  const [showHistory, setShowHistory] = useState(false);
  const {register, formState, handleSubmit} = useForm();
  const {history, addToHistory, removeFromHistory} = useSearchHistory();
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const searchUser = async (): Promise<void> => {
    if (selectedPluginType.domain === 'github.com') {
      try {
        const svgStats = await fetchGithubStats(login);

        // Add to search history
        addToHistory(login);
        setShowHistory(false);

        track('Search User', {login});

        // NOTE: Should use `unescape` to translate chinese letters. The new api `decodeURIComponent` won't work.
        // Related issue https://stackoverflow.com/questions/23223718/failed-to-execute-btoa-on-window-the-string-to-be-encoded-contains-characte
        const base64dataStats = btoa(unescape(encodeURIComponent(svgStats)));
        setGithubSVG(base64dataStats);

        setSvgStatsURLDisplay(generateSvgUrlToDisplay(login, false));
        setSvgStatsURLCopy(generateSvgUrlToCopy(login, false));
        setSearchedUID(login);
        setIsBasic(false);
        setNoTrophies(false);
      } catch (err) {
        setGithubSVG(null);
        setSvgStatsURLDisplay('');
        setSvgStatsURLCopy('');
        setIsBasic(undefined);
      }
    }
  };

  const handleHistorySelect = (item: string) => {
    setLogin(item);
    setShowHistory(false);
    // Trigger search
    setTimeout(() => {
      const form = searchContainerRef.current?.querySelector('form');
      if (form) {
        form.requestSubmit();
      }
    }, 100);
  };

  return (
    <div
      className={clsx(
        'self-stretch bg-paper relative',
        'flex flex-col justify-center items-center',
        'max-[425px]:p-0',
      )}
    >
      <div
        className={clsx(
          'self-stretch px-14',
          'flex flex-col align-start justify-start',
          'max-[425px]:px-8',
          'min-[1200px]:self-center min-[1200px]:w-[1200px]',
        )}
      >
        <p className="h1 text-[44px] text-left font-bold mt-[80px] mb-8 text-contrast-light dark:text-contrast-dark">
          {t.developerPowerMeter}
        </p>
        <p className="body1 text-[20px] text-left mb-[36px] text-gray5 dark:text-gray3">
          {t.developerPowerMeterDesc}
        </p>
        {/* Begin: GreatFrontEnd Banner */}
        <GreatFrontEnd
          className="mb-6"
          href="https://www.greatfrontend.com?fpr=hyo73"
        />
        {/* End: GreatFrontEnd Banner */}
        {/* Begin: Search Form */}
        <div ref={searchContainerRef} className="relative self-stretch max-w-[800px] w-full">
          <form
            onSubmit={handleSubmit(searchUser)}
            className="self-stretch w-full"
            autoComplete="off"
          >
            <div
              className={clsx(
                'rounded-[16px] px-3 h-[64px] relative body2 w-full',
                'flex flex-row-reverse items-center',
                'bg-white/50 dark:bg-black/40',
                'backdrop-blur-2xl',
                'border border-black/10 dark:border-white/20',
                'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]',
                'hover:bg-white/60 dark:hover:bg-black/50',
                'transition-all duration-300',
                'max-[425px]:p-3 max-[425px]:self-stretch max-[425px]:h-auto max-[425px]:flex-wrap',
                'max-[320px]:py-3 max-[320px]:items-start',
              )}
            >
              <Button
                loading={formState.isSubmitting}
                type="submit"
                className={clsx(
                  'bg-transparent border-0 text-center max-w-[100px] p-2',
                  'absolute',
                )}
                text={<SearchIcon size={22} className="text-gray8 dark:text-white" />}
              />
              <div
                className={clsx(
                  'flex-1',
                  'flex flex-row items-center overflow-x-clip',
                )}
              >
                <Dropdown
                  data={statTypes}
                  selected={selectedPluginType}
                  setSelected={(el) => {
                    setSelectedPluginType(el);
                  }}
                />
                <span
                  className={clsx(
                    'text-gray5 dark:text-gray3',
                    'mx-3 body3 text-[22px]',
                    'max-[425px]:invisible max-[425px]:hidden',
                  )}
                >
                  /
                </span>
                <TextInput
                  className="text-gray7 dark:text-white placeholder:text-gray5 dark:placeholder:text-gray4"
                  placeholder={t.githubUsername}
                  value={login}
                  onChange={(e) => {
                    setLogin(e.target.value.trim());
                  }}
                  onFocus={() => setShowHistory(true)}
                  onBlur={() => {
                    // Delay to allow click on history items
                    setTimeout(() => setShowHistory(false), 200);
                  }}
                />
              </div>
            </div>
          </form>
          <SearchHistoryDropdown
            history={history}
            query={login}
            onSelectAction={handleHistorySelect}
            onRemoveAction={removeFromHistory}
            show={showHistory}
          />
        </div>
        {/* End: Search Form */}
        {/* Begin: Stats */}
        {githubSVG ? (
          <div
            className={clsx(
              'max-w-[800px] flex-1 self-stretch',
              'flex flex-col',
              'rounded-[20px] p-6 mt-6',
              'bg-white/50 dark:bg-black/40',
              'backdrop-blur-2xl',
              'border border-black/10 dark:border-white/20',
              'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]',
            )}
          >
            <ButtonGroup
              className="py-[4px] w-full mb-4"
              selectedIndex={isBasic ? 0 : 1}
              buttons={[{label: t.basic}, {label: t.advanced}]}
              onClick={(index) => {
                const shouldBeBasic = index === 0;
                setSvgStatsURLDisplay(generateSvgUrlToDisplay(login, shouldBeBasic));
                setSvgStatsURLCopy(generateSvgUrlToCopy(login, shouldBeBasic));
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
            {svgStatsURLDisplay ? (
              <StatsUrlCard
                t={t}
                selectedPluginType={selectedPluginType}
                svgStatsURLDisplay={svgStatsURLDisplay}
                svgStatsURLCopy={svgStatsURLCopy}
                svgTrophiesURL={
                  !noTrophies ? getSVGUrl('trophies', searchLogin) : ''
                }
                login={searchLogin}
              />
            ) : null}
          </div>
        ) : null}
        {/* End: Stats */}
        <StatsSymbols statsInfo={statsInfo} className="mt-2 mb-16" />
      </div>
    </div>
  );
}

export default Hero;
