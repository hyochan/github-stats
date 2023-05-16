import type {PluginValue, Score} from '..';
import {convertToHundreds} from '../pluginUtils';
import type {UserGraph} from '../types/UserGraph';

const TREE_WEIGHT = 1.8;

export const getGithubTreeScore = (githubUser: UserGraph): PluginValue => {
  if (!githubUser) {
    return {
      name: 'TREE',
      score: 0,
      statElements: [],
    };
  }

  const totalIssues =
    (githubUser.openIssues?.totalCount || 0) +
    (githubUser.closedIssues?.totalCount || 0);
  const totalFollowing = githubUser.following.totalCount;
  const totalStarredRepositories = githubUser.starredRepositories.totalCount;
  const totalComments =
    githubUser.commitComments.totalCount +
    githubUser.gistComments.totalCount +
    githubUser.repositoryDiscussionComments.totalCount;

  const forkCount = githubUser.myRepos.edges.reduce(
    (pre, cur) => pre + (cur.node.isFork ? 1 : 0),
    0,
  );

  const ISSUES_OFFSET = 1;
  const FOLLOWINGS_OFFSET = 0.7;
  const STARRED_OFFSET = 0.7;
  const COMMENTS_OFFSET = 1;
  const FORK_OFFSET = 1.5;

  const scores: Score[] = [
    {offset: ISSUES_OFFSET, count: totalIssues},
    {offset: FOLLOWINGS_OFFSET, count: totalFollowing},
    {offset: STARRED_OFFSET, count: totalStarredRepositories},
    {offset: COMMENTS_OFFSET, count: totalComments},
    {offset: FORK_OFFSET, count: forkCount},
  ];

  const allOffset = scores.reduce((pre, val) => pre + val.offset, 0);
  const sum: number =
    scores.reduce((pre, val) => pre + val.count * val.offset, 0) / TREE_WEIGHT;
  const score = convertToHundreds(sum, allOffset);

  return {
    name: 'TREE',
    score: score / 100,
    statElements: [
      {
        key: 'ISSUES',
        name: 'Issues',
        description: 'Total number of issues.',
        totalCount: totalIssues,
      },
      {
        key: 'FOLLOWINGS',
        name: 'Followings',
        description: 'Total number of followings.',
        totalCount: totalFollowing,
      },
      {
        key: 'STARRED',
        name: 'Starred',
        description: 'Total number of starred repositories.',
        totalCount: totalStarredRepositories,
      },
      {
        key: 'COMMENTS',
        name: 'Comments',
        description:
          'Total number of comments in commits, gists, issues and discussions.',
        totalCount: totalComments,
      },
      {
        key: 'FORKS',
        name: 'Forks',
        description: 'Total number of forks.',
        totalCount: forkCount,
      },
    ],
  };
};
