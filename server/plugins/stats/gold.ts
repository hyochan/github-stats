import type {PluginValue, Score} from '..';

import type {UserGraph} from '../types/UserGraph';
import {convertToHundreds} from '../pluginUtils';

const GOLD_WEIGHT = 24;

export const getGithubGoldScore = (githubUser: UserGraph): PluginValue => {
  if (!githubUser) {
    return {
      name: 'GOLD',
      score: 0,
      stat_element: [],
    };
  }

  const sponsorCount = githubUser.sponsors.totalCount;
  const gistCount = githubUser.gists.totalCount;
  const prRepos = githubUser.pullRequests.edges.map((el) => {
    if (!el) {
      return;
    }

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

  const contribRepoPRs = githubUser.contributedRepos.edges.map((el) => {
    if (!el) {
      return;
    }

    if (
      prRepos.find(
        (pr) =>
          pr?.repositoryName === el.node.name &&
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

  const contribReposStarCount = contribRepoPRs.reduce(
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

  const contribLangsMap = new Map();

  collaboratedRepos.forEach((item) => {
    item?.languages.forEach((language) => {
      const entry = contribLangsMap.get(language);
      if (!entry) {
        contribLangsMap.set(language, {
          type: 'language',
          name: language,
          count: 1,
        });
      } else {
        entry.count += 1;
      }
    });
  });

  const myLangsMap = new Map();

  myRepos.forEach((item) => {
    item?.languages.forEach((language) => {
      const entry = myLangsMap.get(language);
      if (!entry) {
        myLangsMap.set(language, {
          type: 'language',
          name: language,
          count: 1,
        });
      } else {
        entry.count += 1;
      }
    });
  });

  const uniqueContribLangs = [...contribLangsMap.values()].sort((a, b) =>
    b.count > a.count ? 1 : -1,
  );

  const uniqueMyLangs = [...myLangsMap.values()].sort((a, b) =>
    b.count > a.count ? 1 : -1,
  );

  const langsContribCount = uniqueContribLangs.filter(
    (el) => el.count > 3,
  ).length;
  const langsMyCount = uniqueContribLangs.filter((el) => el.count > 3).length;

  const SPONSORS_OFFSET = 1;
  const GIST_OFFSET = 0.75;
  const PEER_REPO_PR_STAR_OFFSET = 0.1;
  const REPO_CONTRIB_STAR_OFFSET = 0.75;
  const REPO_MY_STAR_OFFSET = 1;
  const LANG_CONTRIB_OFFSET = 0.2;
  const LANG_MY_OFFSET = 0.04;

  const scores: Score[] = [
    {offset: SPONSORS_OFFSET, count: sponsorCount},
    {offset: GIST_OFFSET, count: gistCount},
    {offset: PEER_REPO_PR_STAR_OFFSET, count: contribReposStarCount},
    {offset: REPO_CONTRIB_STAR_OFFSET, count: collaboratedReposStarCount},
    {offset: REPO_MY_STAR_OFFSET, count: myRepoStarCount},
    {offset: LANG_CONTRIB_OFFSET, count: langsContribCount},
    {offset: LANG_MY_OFFSET, count: langsMyCount},
  ];

  const allOffset = scores.reduce((pre, val) => pre + val.offset, 0);
  const sum: number =
    scores.reduce((pre, val) => pre + val.count * val.offset, 0) / GOLD_WEIGHT;
  const score = convertToHundreds(sum, allOffset);

  return {
    name: 'GOLD',
    score: score / 100,
    stat_element: [
      {
        key: 'SPONSORS',
        name: 'Sponsors',
        description: 'Total number of sponsors.',
        totalCount: sponsorCount,
      },
      {
        key: 'GISTS',
        name: 'Gists',
        description: 'Total number gists.',
        totalCount: gistCount,
      },
      {
        key: 'STARS_IN_CONTRIB_REPOS',
        name: 'Stars in contributed repositories',
        description: 'Total number stars earned in contributed repositories.',
        totalCount: contribReposStarCount,
        details: JSON.stringify(
          contribRepoPRs
            .filter((el) => !!el)
            .map((el) => {
              if (!el) {
                return;
              }

              return {
                type: 'repository',
                name: `${el.owner}/${el.name}`,
                url: `https://github.com/${el.owner}/${el.name}`,
              };
            }),
        ),
      },
      {
        key: 'STARS_IN_COLLABORATED_REPOS',
        name: 'Stars in collaborated repositories',
        description: 'Total number stars earned in repositories.',
        totalCount: collaboratedReposStarCount,
        details: JSON.stringify(
          contribRepoPRs
            .filter((el) => !!el)
            .map((el) => {
              if (!el) {
                return;
              }

              return {
                type: 'repository',
                name: `${el.owner}/${el.name}`,
                url: `https://github.com/${el.owner}/${el.name}`,
              };
            }),
        ),
      },
      {
        key: 'STARS_IN_REPOS',
        name: 'Stars in repositories',
        description: 'Total number stars earned in repositories.',
        totalCount: myRepoStarCount,
        details: JSON.stringify(
          myRepos
            .filter((el) => !!el)
            .map((el) => {
              if (!el) {
                return;
              }

              return {
                type: 'repository',
                name: `${el.owner}/${el.name}`,
                url: `https://github.com/${el.owner}/${el.name}`,
              };
            }),
        ),
      },
      {
        key: 'CONTRIB_LANGUAGES',
        name: 'Contributed Languages',
        description:
          'Total number of languages used more than 3 times in contributed repo.',
        totalCount: langsContribCount,
        details: JSON.stringify(uniqueContribLangs),
      },
      {
        key: 'MY_LANGUAGES',
        name: 'My Languages',
        description:
          'Total number of languages used more than 3 times in user repo.',
        totalCount: langsContribCount,
        details: JSON.stringify(uniqueMyLangs),
      },
    ],
  };
};
