import type {AuthorCommits} from './types/AuthorCommits';
import type {UserGraph} from './types/UserGraph';
import {getGithubEarthScore} from './stats/earth';
import {getGithubFireScore} from './stats/fire';
import {getGithubGoldScore} from './stats/gold';
import {getGithubPeopleScore} from './stats/people';
import {getGithubTreeScore} from './stats/tree';
import {getGithubWaterScore} from './stats/water';

export * from './types/AuthorCommits';
export * from './types/UserGraph';

export const LOWEST_TROPHIES_SCORE = 5;

export type Score = {
  count: number;
  offset: number;
};

export type StatsDetail =
  | {
      type: 'repository';
      name: string;
      url: string;
    }
  | {
      type: 'language';
      name: string;
      count: number;
    }
  | {
      type: 'commit';
      name: string;
      message: string;
      comment_count: number;
      sha: string;
      score: number;
      author: string;
      url: string;
    };

export type StatsElement = {
  key: string;
  name: string;
  description: string;
  totalCount: number;
  details?: StatsDetail[] | string;
};

export type PluginValue = {
  name: string;
  description?: string;
  score: number;
  statElements: StatsElement[];
};

export type PluginStats = {
  earth: PluginValue;
  fire: PluginValue;
  gold: PluginValue;
  people: PluginValue;
  tree: PluginValue;
  water: PluginValue;
};

export const getGithubStatus = (
  githubUser: UserGraph,
  userCommits: AuthorCommits,
): PluginStats => {
  const tree = getGithubTreeScore(githubUser);
  const fire = getGithubFireScore(githubUser);
  const earth = getGithubEarthScore(userCommits);
  const gold = getGithubGoldScore(githubUser);
  const water = getGithubWaterScore(githubUser);
  const people = getGithubPeopleScore({
    tree: tree.score,
    fire: fire.score,
    earth: earth.score,
    gold: gold.score,
    water: water.score,
  });

  const stats: PluginStats = {
    tree,
    fire,
    earth,
    gold,
    water,
    people,
  };

  return stats;
};
