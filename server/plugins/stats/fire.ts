import type {PluginValue, Score} from '..';
import {convertToHundreds} from '../pluginUtils';
import type {UserGraph} from '../types/UserGraph';

const FIRE_WEIGHT = 4;

export const getGithubFireScore = (githubUser: UserGraph): PluginValue => {
  if (!githubUser) {
    return {
      name: 'FIRE',
      score: 0,
      statElements: [],
    };
  }

  const repos = githubUser.myRepos.edges
    .map((el) => {
      const node = el.node;
      const owner = node.owner?.login;

      if (!owner) return null;

      return {
        owner,
        name: node.name,
        languages: node.languages.edges.map((ele) => ele.node.name),
      };
    })
    .filter((el): el is NonNullable<typeof el> => Boolean(el));

  const repositoriesContributedTo = githubUser.collaboratedRepos.edges
    .map((el) => {
      const node = el.node;
      const owner = node.owner?.login;

      if (!owner) return null;

      return {
        owner,
        name: node.name,
        languages: node.languages.edges.map((ele) => ele.node.name),
      };
    })
    .filter((el): el is NonNullable<typeof el> => Boolean(el));

  const totalCommits =
    githubUser.contributionsCollection.totalCommitContributions;

  const totalRepositories =
    githubUser.contributionsCollection.totalRepositoryContributions;

  const totalPullRequests =
    githubUser.contributionsCollection.totalPullRequestContributions;

  const totalPullRequestsReviews =
    githubUser.contributionsCollection.totalPullRequestReviewContributions;

  const COMMITS_OFFSET = 1;
  const REPOSITORIES_OFFSET = 0.75;
  const PULL_REQUEST_OFFSET = 1.25;
  const PULL_REQUEST_REVIEWS_OFFSET = 1;

  const scores: Score[] = [
    {offset: COMMITS_OFFSET, count: totalCommits},
    {offset: REPOSITORIES_OFFSET, count: totalRepositories},
    {offset: PULL_REQUEST_OFFSET, count: totalPullRequests},
    {offset: PULL_REQUEST_REVIEWS_OFFSET, count: totalPullRequestsReviews},
  ];

  const allOffset = scores.reduce((pre, val) => pre + val.offset, 0);
  const sum: number =
    scores.reduce((pre, val) => pre + val.count * val.offset, 0) / FIRE_WEIGHT;
  const score = convertToHundreds(sum, allOffset);

  return {
    name: 'FIRE',
    score: score / 100,
    statElements: [
      {
        key: 'COMMITS',
        name: 'Commits',
        description: 'Total number of commits for an year.',
        totalCount: totalCommits,
        details: JSON.stringify(
          repositoriesContributedTo.map((el) => {
            return {
              type: 'repository',
              name: `${el.owner}/${el.name}`,
              url: `https://github.com/${el.owner}/${el.name}`,
            };
          }),
        ),
      },
      {
        key: 'REPOSITORIES',
        name: 'Repositories',
        description: 'Total number of repos.',
        totalCount: totalRepositories,
        details: JSON.stringify(
          repos.map((el) => {
            return {
              type: 'repository',
              name: `${el.owner}/${el.name}`,
              url: `https://github.com/${el.owner}/${el.name}`,
            };
          }),
        ),
      },
      {
        key: 'PULL_REQUESTS',
        name: 'Pull Requests',
        description: 'Total number of pull requests.',
        totalCount: totalPullRequests,
      },
      {
        key: 'REVIEWS',
        name: 'Reviews',
        description: 'Total number of pull requests reviews.',
        totalCount: totalPullRequestsReviews,
      },
    ],
  };
};
