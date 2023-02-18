import type {PluginValue, Score} from '..';

import type {UserGraph} from '../types/UserGraph';
import {convertToHundreds} from '../pluginUtils';

const WATER_WEIGHT = 7;

export const getGithubWaterScore = (githubUser: UserGraph): PluginValue => {
  if (!githubUser) {
    return {
      name: 'Water',
      score: 0,
      statsElements: [],
    };
  }

  const followerCount = githubUser.followers.totalCount;

  const collaboratedRepos = githubUser.collaboratedRepos.edges.map((el) => {
    if (!el) {
      return null;
    }

    const node = el.node;

    return {
      owner: node.owner.login,
      name: node.name,
      forkCount: node.forkCount,
      starCount: node.stargazerCount,
      watchCount: node.watchers.totalCount,
      languages: node.languages.edges.map((ele) => ele.node.name),
    };
  });

  const myRepos = githubUser.myRepos.edges.map((el) => {
    if (!el) {
      return null;
    }

    const node = el.node;

    return {
      owner: node.owner.login,
      name: node.name,
      forkCount: node.forkCount,
      starCount: node.stargazerCount,
      watchCount: node.watchers.totalCount,
      languages: node.languages.edges.map((ele) => ele.node.name),
    };
  });

  const repoForkCount = myRepos.reduce(
    (prev, current) => prev + (current?.forkCount || 0),
    0,
  );

  const contributedRepoForkCount = collaboratedRepos.reduce(
    (prev, current) => prev + (current?.forkCount || 0),
    0,
  );

  const repoWatchCount = myRepos.reduce(
    (prev, current) => prev + (current?.watchCount || 0),
    0,
  );

  const contributedRepoWatchCount = collaboratedRepos.reduce(
    (prev, current) => prev + (current?.watchCount || 0),
    0,
  );

  const FOLLOWER_OFFSET = 1;
  const FORK_OFFSET = 0.75;
  const WATCH_OFFSET = 0.75;

  const scores: Score[] = [
    {offset: FOLLOWER_OFFSET, count: followerCount},
    {offset: FORK_OFFSET, count: repoForkCount + contributedRepoForkCount},
    {offset: WATCH_OFFSET, count: repoWatchCount + contributedRepoWatchCount},
  ];

  const allOffset = scores.reduce((pre, val) => pre + val.offset, 0);
  const sum: number =
    scores.reduce((pre, val) => pre + val.count * val.offset, 0) / WATER_WEIGHT;
  const score = convertToHundreds(sum, allOffset);

  return {
    name: 'WATER',
    score: score / 100,
    statsElements: [
      {
        key: 'FOLLOWERS',
        name: 'Followers',
        description: 'Total number of followers.',
        totalCount: followerCount,
      },
      {
        key: 'FORKED_REPOSITORIES',
        name: 'Forked repositories',
        description: 'Total number of repositories forked by other users.',
        totalCount: repoForkCount,
      },
      {
        key: 'WATCHED_REPOSITORIES',
        name: 'Watched repositories',
        description: 'Total number of repositories users watching.',
        totalCount: repoWatchCount,
      },
    ],
  };
};
