'use server';

import type {SupabaseClient} from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

import {isDev} from '../../../src/utils/const';
import {uploadFileToSupabase} from '../../../src/utils/storage';
import type {DoobooStatsResponse} from '../../services/githubService';

import {renderGithubStatsSvg, renderGithubStatsSvgWithLangs} from './assets';
import {
  tierBronzeSvg,
  tierChallengerSvg,
  tierDiamondSvg,
  tierGoldSvg,
  tierIronSvg,
  tierMasterSvg,
  tierPlatinumSvg,
  tierSilverSvg,
} from './githubTiers';

export type ScoreType = {
  tierName:
    | 'Iron'
    | 'Bronze'
    | 'Silver'
    | 'Gold'
    | 'Platinum'
    | 'Master'
    | 'Diamond'
    | 'Challenger';
  score: number;
};

export const getTierName = (
  score: number,
  pluginJSON: any,
): ScoreType['tierName'] => {
  if (pluginJSON) {
    type TierType = {
      tier: string;
      score: number;
    };

    const tierJSONArray: TierType[] = JSON.parse(JSON.stringify(pluginJSON));

    const tiers = tierJSONArray.filter((el) => el.score <= score);

    return !tiers.length
      ? 'Iron'
      : (tiers[tiers.length - 1].tier as ScoreType['tierName']);
  }

  return 'Iron';
};

export const generateGithubSVG = async ({
  login,
  stats,
  shouldIncludeLanguage,
  supabase,
}: {
  login: string;
  stats: DoobooStatsResponse;
  shouldIncludeLanguage?: boolean;
  supabase: SupabaseClient;
}): Promise<{
  file: string;
  path: string;
}> => {
  const languages = stats.json.languages;

  // const fileName = shouldIncludeLanguage
  // ? `${login}-advanced.svg`
  // : `${login}.svg`;

  // Note: Temporarily remove cached result. This will be applied when there are much memory usage by heavy traffics.
  // if (
  //   fs.existsSync(`./public/github/${fileName}`) &&
  //   stats.isCachedResult
  // ) {
  //   return svgURL;
  // }

  const calculateAxis = ({
    xMin,
    xMax,
    yMin,
    yMax,
    score,
  }: {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    score: number;
  }): string => {
    const xThreshold = xMax - xMin;
    const yThreshold = yMax - yMin;

    const x = xThreshold * score + xMin;
    const y = yThreshold * score + yMin;

    return `${x},${y}`;
  };

  const pluginStats = stats.pluginStats;

  const peopleAxis = calculateAxis({
    score: pluginStats.people.score,
    xMax: 278,
    xMin: 278,
    yMax: 39.5,
    yMin: 64.5,
  });

  const treeAxis = calculateAxis({
    score: pluginStats.tree.score,
    xMax: 306.2,
    xMin: 284.51,
    yMax: 55.75,
    yMin: 68.25,
  });

  const fireAxis = calculateAxis({
    score: pluginStats.fire.score,
    xMax: 306.2,
    xMin: 284.51,
    yMax: 88.25,
    yMin: 75.75,
  });

  const earthAxis = calculateAxis({
    score: pluginStats.earth.score,
    xMax: 278,
    xMin: 278,
    yMax: 104.5,
    yMin: 79.5,
  });

  const goldAxis = calculateAxis({
    score: pluginStats.gold.score,
    xMax: 249.81,
    xMin: 271.49,
    yMax: 88.25,
    yMin: 75.75,
  });

  const waterAxis = calculateAxis({
    score: pluginStats.water.score,
    xMax: 249.81,
    xMin: 271.49,
    yMax: 55.75,
    yMin: 68.25,
  });

  const sum =
    +pluginStats.earth.score +
    +pluginStats.fire.score +
    +pluginStats.gold.score +
    +pluginStats.people.score +
    +pluginStats.tree.score +
    +pluginStats.water.score;

  const avgScore = Math.round((sum * 100) / 6);
  const tierName = getTierName(avgScore, stats.plugin.json);

  const tierSvg =
    tierName === 'Challenger'
      ? tierChallengerSvg
      : tierName === 'Diamond'
      ? tierDiamondSvg
      : tierName === 'Master'
      ? tierMasterSvg
      : tierName === 'Platinum'
      ? tierPlatinumSvg
      : tierName === 'Gold'
      ? tierGoldSvg
      : tierName === 'Silver'
      ? tierSilverSvg
      : tierName === 'Bronze'
      ? tierBronzeSvg
      : tierIronSvg;

  const svgWithLangs = renderGithubStatsSvgWithLangs({
    avgScore,
    earthAxis,
    fireAxis,
    goldAxis,
    login,
    peopleAxis: peopleAxis,
    stats,
    tierName,
    tierSvg,
    treeAxis,
    waterAxis,
    languages,
  });

  const svg = renderGithubStatsSvg({
    avgScore,
    earthAxis,
    fireAxis,
    goldAxis,
    login,
    peopleAxis: peopleAxis,
    stats,
    tierName,
    tierSvg,
    treeAxis,
    waterAxis,
  });

  try {
    const generateBasicSVG = async (isAdvanced: boolean): Promise<string> => {
      const tmpName = `${isAdvanced ? `${login}-advanced` : login}.svg`;
      // https://stackoverflow.com/questions/53765403/how-to-access-tmp-folder-in-lambda-with-in-node/53770877#53770877
      const filePath = isDev
        ? path.resolve('public', tmpName)
        : `/tmp/${tmpName}`;

      try {
        fs.writeFileSync(filePath, isAdvanced ? svgWithLangs : svg);

        return await uploadFileToSupabase({
          file: filePath,
          bucket: 'public',
          destPath: `dooboo-github/${tmpName}`,
          supabase,
        });
      } catch (err: any) {
        throw new Error(err);
      } finally {
        fs.unlinkSync(filePath);
      }
    };

    const svgUrl = await generateBasicSVG(false);
    const svgUrlAdvanced = await generateBasicSVG(true);

    return {
      file: shouldIncludeLanguage ? svgWithLangs : svg,
      path: shouldIncludeLanguage ? svgUrlAdvanced : svgUrl,
    };
  } catch (err: any) {
    throw new Error(err);
  }
};

export const uploadTrophiesSvg = async ({
  login,
  svg,
  supabase,
}: {
  login: string;
  svg: string;
  supabase: SupabaseClient;
}): Promise<void> => {
  const tmpName = `${login}-trophies.svg`;
  // https://stackoverflow.com/questions/53765403/how-to-access-tmp-folder-in-lambda-with-in-node/53770877#53770877
  const filePath = isDev ? path.resolve('public', tmpName) : `/tmp/${tmpName}`;

  try {
    fs.writeFileSync(filePath, svg);

    await uploadFileToSupabase({
      file: filePath,
      bucket: 'public',
      destPath: `dooboo-github/${login}-trophies.svg`,
      supabase,
    });
  } finally {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
};
