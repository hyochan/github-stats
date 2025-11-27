'use client';

import type {ReactElement} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import {track} from '@amplitude/analytics-browser';
import {CopyIcon} from '@primer/octicons-react';
import {useRouter} from 'next/navigation';

import {useAuthContext} from '../../../../src/components/AuthProvider';
import type {Translates} from '../../../../src/localization';
import Button from '../../(common)/Button';
import type {PluginType} from '../Home';

const rootUrl = `${process.env.NEXT_PUBLIC_ROOT_URL}/api`;
const baseUrl = process.env.NEXT_PUBLIC_ROOT_URL;

type Props = {
  t: Translates['home'];
  login: string;
  svgStatsURLDisplay: string;
  svgStatsURLCopy: string;
  svgTrophiesURL: string;
  selectedPluginType: PluginType;
};

export default function StatsUrlCard({
  t,
  login,
  svgStatsURLDisplay,
  svgStatsURLCopy,
  svgTrophiesURL,
}: Props): ReactElement {
  const router = useRouter();
  const {login: authLogin} = useAuthContext();

  const copyURLToClipboard = (type: 'stats' | 'trophies'): void => {
    toast.success(t.urlCopiedToClipboard);

    if (process.env.NEXT_PUBLIC_AMPLITUDE_KEY) {
      track('Copy URL to clipboard', {login, type});
    }
  };

  // For display (markdown)
  const trophiesURLDisplay = `![${login} github-trophies](${rootUrl}/github-trophies?login=${login})`;
  // For copying (HTML)
  const trophiesURLCopy = `<a href="${baseUrl}/stats/${login}"><img src="${rootUrl}/github-trophies?login=${login}" width="600" /></a>`;

  return (
    <div className="mb-[32px] self-stretch relative flex flex-col">
      {/* Stats URL */}
      <CopyToClipboard text={svgStatsURLCopy}>
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
              <p className="body3 text-contrast pl-3">{svgStatsURLDisplay}</p>
            </div>
          </div>
        </div>
      </CopyToClipboard>
      {/* Trophies URL */}
      {svgTrophiesURL ? (
        <CopyToClipboard text={trophiesURLCopy}>
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
                <p className="body3 text-contrast pl-3">{trophiesURLDisplay}</p>
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
