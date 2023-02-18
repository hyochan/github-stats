import {renderGithubStatsSvg, renderGithubStatsSvgWithLangs} from './common';
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

import type {DoobooStatsResponse} from '../../services/githubService';
import type {TopLanguage} from '../topLanguages';
import fs from 'fs';
import path from 'path';
import {uploadFileToAzureBlobFromFile} from '../../../src/utils/azure';

const {ROOT_URL} = process.env;

type ScoreType = {
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

export const generateGithubSVG = async (
  login: string,
  stats: DoobooStatsResponse,
  languages: TopLanguage[],
): Promise<{
  file: string;
  path: string;
}> => {
  const shouldIncludeLanguage = languages?.length && languages.length > 0;
  const fileName = shouldIncludeLanguage
    ? `${login}-advanced.svg`
    : `${login}.svg`;

  languages = stats.json.languages;

  const svgURL = `${ROOT_URL}/files/github/${fileName}`;

  // Note: Temporarily remove cached result. This will be applied when there are much memory usage by heavy traffics.
  // if (
  //   fs.existsSync(path.join(__dirname, `../../../files/github/${fileName}`)) &&
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

  const personAxis = calculateAxis({
    score: pluginStats.person.score,
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
    +pluginStats.person.score +
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
    personAxis,
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
    personAxis,
    stats,
    tierName,
    tierSvg,
    treeAxis,
    waterAxis,
  });

  try {
    const dir = path.join(__dirname, '../../../files/github');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    const generateBasicSVG = async (isAdvanced: boolean): Promise<void> => {
      const filePath = path.join(
        __dirname,
        `../../../files/github/${isAdvanced ? `${login}-advanced` : login}.svg`,
      );
      fs.writeFileSync(filePath, isAdvanced ? svgWithLangs : svg);

      try {
        await uploadFileToAzureBlobFromFile(
          filePath,
          fileName,
          'github',
          'dooboo',
        );
      } finally {
        fs.unlinkSync(filePath);
      }
    };

    await generateBasicSVG(false);
    await generateBasicSVG(true);

    return {
      file: shouldIncludeLanguage ? svgWithLangs : svg,
      path: svgURL,
    };
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const uploadTrophiesSvg = async (
  login: string,
  svg: string,
): Promise<void> => {
  const filePath = path.join(
    __dirname,
    `../../../files/github/${login}-trophies.svg`,
  );
  fs.writeFileSync(filePath, svg);

  try {
    await uploadFileToAzureBlobFromFile(
      filePath,
      `${login}-trophies.svg`,
      'github',
      'dooboo',
    );
  } finally {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
};
