'use client';

import Button from '../../(common)/Button';
import {CopyIcon} from '@primer/octicons-react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import type {PluginType} from '../Home';
import type {ReactElement} from 'react';
import type {Translates} from '../../../../src/localization';
import {useSnackbar} from 'react-simple-snackbar';

const rootUrl = `${process.env.NEXT_PUBLIC_ROOT_URL}/api`;

type Props = {
  t: Translates['home'];
  uid: string;
  svgStatsURL: string;
  svgTrophiesURL: string;
  selectedPluginType: PluginType;
};

export default function StatsUrlCard({
  t,
  uid,
  svgStatsURL,
  svgTrophiesURL,
}: Props): ReactElement {
  const [openSnackbar] = useSnackbar();
  const copyURLToClipboard = (): void => {
    openSnackbar(`${t.urlCopiedToClipboard}`);
  };

  const trophiesURL = `![${uid} GitHub Trophies](${rootUrl}/github-trophies?login=${uid})`;

  return (
    <div className="mb-[32px] self-stretch relative flex flex-col">
      {/* Stats URL */}
      <CopyToClipboard text={svgStatsURL}>
        <div className="bg-basic relative flex-1 p-4 flex flex-col flex-wrap mt-2 mb-3 rounded-md">
          <div
            className="
              flex-1 self-stretch cursor-pointer rounded-[4px]
            "
            onClick={copyURLToClipboard}
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
          <div className="bg-basic relative flex-1 p-4 flex flex-col flex-wrap rounded-md">
            <div
              className="
                flex-1 self-stretch cursor-pointer rounded-[4px]
              "
              onClick={copyURLToClipboard}
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
      <Button
        className="mt-6 border-0 bg-disabled p-2 rounded-[4px]"
        text={t.findOutMore}
        onClick={() => {
          window.open(`https://app.dooboo.io/${uid}`, '_blank');
        }}
      />
    </div>
  );
}
