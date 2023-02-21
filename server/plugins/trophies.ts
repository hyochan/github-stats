import type {Decimal} from '@prisma/client/runtime';
import type {UserGraph} from './types/UserGraph';
import {convertToHundreds} from './pluginUtils';

export type PluginTrophy = {
  type: string;
  score: number | Decimal;
  points: number;
};

const getIssueTrophy = (count: number): PluginTrophy => {
  const offset = 0.5;
  const weight = 1;
  const sum: number = (count * offset) / weight;
  const score = convertToHundreds(sum, offset);

  return {
    points: count,
    score,
    type: 'issues',
  };
};

const getCommentTrophy = (count: number): PluginTrophy => {
  const offset = 0.5;
  const weight = 0.5;
  const sum: number = (count * offset) / weight;
  const score = convertToHundreds(sum, offset);

  return {
    points: count,
    score,
    type: 'comments',
  };
};

const getCommitTrophy = (count: number): PluginTrophy => {
  const offset = 0.5;
  const weight = 1;
  const sum: number = (count * offset) / weight;
  const score = convertToHundreds(sum, offset);

  return {
    points: count,
    score,
    type: 'commits',
  };
};

const getPullRequestTrophy = (count: number): PluginTrophy => {
  const offset = 0.5;
  const weight = 0.2;
  const sum: number = (count * offset) / weight;
  const score = convertToHundreds(sum, offset);

  return {
    points: count,
    score,
    type: 'pullRequests',
  };
};

const getRepositoryTrophy = (count: number): PluginTrophy => {
  const offset = 0.25;
  const weight = 0.018;
  const sum: number = (count * offset) / weight;
  const score = convertToHundreds(sum, offset);

  return {
    points: count,
    score,
    type: 'repositories',
  };
};

const getReviewTrophy = (count: number): PluginTrophy => {
  const offset = 0.5;
  const weight = 1;
  const sum: number = (count * offset) / weight;
  const score = convertToHundreds(sum, offset);

  return {
    points: count,
    score,
    type: 'reviews',
  };
};

const getContribStarTrophy = (count: number): PluginTrophy => {
  const offset = 0.2;
  const weight = 23;
  const sum: number = (count * offset) / weight;
  const score = convertToHundreds(sum, offset);

  return {
    points: count,
    score,
    type: 'contributedRepos',
  };
};

const getCollaboratedStarTrophy = (count: number): PluginTrophy => {
  const offset = 0.2;
  const weight = 15;
  const sum: number = (count * offset) / weight;
  const score = convertToHundreds(sum, offset);

  return {
    points: count,
    score,
    type: 'collaboratedRepos',
  };
};

const getStarsTrophy = (count: number): PluginTrophy => {
  const offset = 0.2;
  const weight = 2;
  const sum: number = (count * offset) / weight;
  const score = convertToHundreds(sum, offset);

  return {
    points: count,
    score,
    type: 'stars',
  };
};

const getFollowerTrophy = (count: number): PluginTrophy => {
  const offset = 0.5;
  const weight = 4;
  const sum: number = (count * offset) / weight;
  const score = convertToHundreds(sum, offset);

  return {
    points: count,
    score,
    type: 'followers',
  };
};

export const getTrophies = (githubUser: UserGraph): PluginTrophy[] => {
  const trophies: PluginTrophy[] = [];

  const totalIssues =
    (githubUser.openIssues?.totalCount || 0) +
    (githubUser.closedIssues?.totalCount || 0);

  const totalCommits =
    githubUser.contributionsCollection?.totalCommitContributions || 0;

  const totalComments =
    githubUser.commitComments.totalCount +
    githubUser.gistComments.totalCount +
    githubUser.repositoryDiscussionComments.totalCount;

  const totalRepositories =
    githubUser.contributionsCollection.totalRepositoryContributions;

  const totalPullRequests =
    githubUser.contributionsCollection.totalPullRequestContributions;

  const totalPullRequestsReviews =
    githubUser.contributionsCollection.totalPullRequestReviewContributions;

  const prRepos = githubUser.pullRequests.edges.map((el) => {
    const node = el.node;

    return {
      name: node.title,
      number: node.number,
      state: node.state,
      createdAt: node.createdAt,
      owner: node.repository.owner.login,
      repositoryName: node.repository.name,
      repoStarCount: node.repository.stargazerCount,
    };
  });

  const contribRepos = githubUser.contributedRepos.edges.map((el) => {
    if (!el) {
      return;
    }

    if (
      prRepos.find(
        (pr) =>
          pr.repositoryName === el.node.name &&
          pr.owner === el.node.owner.login &&
          pr.state !== 'MERGED',
      )
    ) {
      // NOTE: Avoid counting contribution on `PR` opened
      return;
    }

    return {
      owner: el.node.owner.login,
      name: el.node.name,
      starCount: el.node.stargazerCount,
      languages: el.node.languages.edges.map((ele) => ele.node.name),
    };
  });

  const collaboratedRepos = githubUser.collaboratedRepos.edges.map((el) => {
    if (!el) {
      return null;
    }

    const node = el.node;

    return {
      owner: node.owner.login,
      name: node.name,
      starCount: node.stargazerCount,
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
      starCount: node.stargazerCount,
      languages: node.languages.edges.map((ele) => ele.node.name),
    };
  });

  const contribReposStarCount = contribRepos.reduce(
    (prev, current) => prev + (current?.starCount || 0),
    0,
  );

  const collaboratedReposStarCount = collaboratedRepos.reduce(
    (prev, current) => prev + (current?.starCount || 0),
    0,
  );

  const myRepoStarCount = myRepos.reduce(
    (prev, current) => prev + (current?.starCount || 0),
    0,
  );
  const followerCount = githubUser.followers.totalCount;

  const issueTrophy = getIssueTrophy(totalIssues);
  trophies.push(issueTrophy);

  const commentTrophy = getCommentTrophy(totalComments);
  trophies.push(commentTrophy);

  const commitTrophy = getCommitTrophy(totalCommits);
  trophies.push(commitTrophy);

  const prTrophy = getPullRequestTrophy(totalPullRequests);
  trophies.push(prTrophy);

  const repoTrophy = getRepositoryTrophy(totalRepositories);
  trophies.push(repoTrophy);

  const reviewTrophy = getReviewTrophy(totalPullRequestsReviews);
  trophies.push(reviewTrophy);

  const contribStarTrophy = getContribStarTrophy(contribReposStarCount);
  trophies.push(contribStarTrophy);

  const collaboratedStarTrophy = getCollaboratedStarTrophy(
    collaboratedReposStarCount,
  );
  trophies.push(collaboratedStarTrophy);

  const starsTrophy = getStarsTrophy(myRepoStarCount);
  trophies.push(starsTrophy);

  const followerTrophy = getFollowerTrophy(followerCount);
  trophies.push(followerTrophy);

  return trophies;
};
