'use client';

import type {ReactElement} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useSnackbar} from 'react-simple-snackbar';
import {track} from '@amplitude/analytics-browser';
import {CopyIcon} from '@primer/octicons-react';
import {useRouter} from 'next/navigation';

import {useAuthContext} from '../../../../src/components/AuthProvider';
import type {Translates} from '../../../../src/localization';
import Button from '../../(common)/Button';
import type {PluginType} from '../Home';

const rootUrl = `${process.env.NEXT_PUBLIC_ROOT_URL}/api`;

type Props = {
  t: Translates['home'];
  login: string;
  svgStatsURL: string;
  svgTrophiesURL: string;
  selectedPluginType: PluginType;
};

export default function StatsUrlCard({
  t,
  login,
  svgStatsURL,
  svgTrophiesURL,
}: Props): ReactElement {
  const router = useRouter();
  const [openSnackbar] = useSnackbar();
  const {login: authLogin} = useAuthContext();

  const copyURLToClipboard = (type: 'stats' | 'trophies'): void => {
    openSnackbar(`${t.urlCopiedToClipboard}`);
    track('Copy URL to clipboard', {login, type});
  };

  const trophiesURL = `![${login} github-trophies](${rootUrl}/github-trophies?login=${login})`;

  return (
    <div className="mb-[32px] self-stretch relative flex flex-col">
      {/* Stats URL */}
      <CopyToClipboard text={svgStatsURL}>
        {/* @ts-ignore */}
        <div className="bg-basic relative flex-1 p-4 flex flex-col flex-wrap mt-2 mb-3 rounded-md">
          <div
            className="
              flex-1 self-stretch cursor-pointer rounded-[4px]
            "
            onClick={() => copyURLToClipboard('stats')}
          >
            <div className="px-[18px] py-[8px] flex flex-row items-center">
              <CopyIcon className="text-contrast" />
              <p className="body3 text-contrast pl-3">{svgStatsURL}</p>
            </div>
          </div>
        </div>
      </CopyToClipboard>
      {/* Trophies URL */}
      {svgTrophiesURL ? (
        <CopyToClipboard text={trophiesURL}>
          {/* @ts-ignore */}
          <div className="bg-basic relative flex-1 p-4 flex flex-col flex-wrap rounded-md">
            <div
              className="
                flex-1 self-stretch cursor-pointer rounded-[4px]
              "
              onClick={() => copyURLToClipboard('trophies')}
            >
              <div className="px-[18px] py-[8px] flex flex-row items-center">
                <CopyIcon className="text-contrast" />
                <p className="body3 text-contrast pl-3">{trophiesURL}</p>
              </div>
            </div>
          </div>
        </CopyToClipboard>
      ) : null}
      <div className="text-[14px] text-placeholder flex-wrap flex-row items-center justify-center self-center mt-4">
        {t.copyPasteToGithubReadme}
      </div>
      {!authLogin ? (
        <Button
          className="mt-6 border-0 bg-disabled p-2 rounded-[4px]"
          text={t.findOutMore}
          onClick={() => router.push(`/stats/${login}`)}
        />
      ) : null}
    </div>
  );
}
