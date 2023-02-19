import type {AuthorCommits, PluginStats, UserGraph} from '../plugins';
import type {Json, Model} from '../../src/types/supabase';

import type {GithubUser} from '../plugins/types';
import type {Locale} from '../../src/i18n';
import type {PluginTrophy} from '../plugins/trophies';
import type {TopLanguage} from '../plugins/topLanguages';
import {createSupabaseClient} from '../utils';
import {diffHours} from '../plugins/pluginUtils';
import {getGithubStatus} from '../plugins';
import {getTopLanguages} from '../plugins/topLanguages';
import {getTranslates} from '../../src/localization';
import {getTrophies} from '../plugins/trophies';

const {GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GH_TOKEN} = process.env;

export const getAccessToken = async (
  code: string,
  state?: string,
): Promise<string> => {
  const {json} = await fetch('https://github.com/login/oauth/access_token', {
    method: 'post',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
      state,
    }),
  });

  return (await json()).access_token;
};

export const getGithubUser = async (
  login: string,
): Promise<{data: {user: UserGraph}}> => {
  // Note: Duration to 12 months fails intermittently for some users like `mcollina`. For that, we could try something like 6 months in the future.
  const date = new Date();
  date.setMonth(date.getMonth() - 12);

  const {json} = await fetch('https://api.github.com/graphql', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `token ${GH_TOKEN}`,
    },
    body: JSON.stringify({
      query: /* GraphQL */ `
        query userInfo($username: String!, $date: DateTime!) {
          user(login: $username) {
            isCampusExpert
            isDeveloperProgramMember
            isGitHubStar
            isHireable
            commitComments {
              totalCount
            }
            gistComments {
              totalCount
            }
            repositoryDiscussionComments {
              totalCount
            }
            id
            login
            name
            email
            avatarUrl
            company
            location
            status {
              id
              emoji
              message
            }
            followers {
              totalCount
            }
            following {
              totalCount
            }
            starredRepositories {
              totalCount
            }
            bio
            gists {
              totalCount
            }
            pullRequests(
              first: 100
              orderBy: {field: CREATED_AT, direction: DESC}
            ) {
              edges {
                node {
                  title
                  number
                  createdAt
                  state
                  author {
                    login
                  }
                  repository {
                    owner {
                      login
                    }
                    name
                    stargazerCount
                  }
                }
              }
              totalCount
            }
            openIssues: issues(states: OPEN) {
              totalCount
            }
            closedIssues: issues(states: CLOSED) {
              totalCount
            }
            hasSponsorsListing
            sponsors {
              totalCount
            }
            contributionsCollection(from: $date) {
              totalCommitContributions
              totalRepositoryContributions
              totalPullRequestContributions
              totalPullRequestReviewContributions
            }
            contributedRepos: repositoriesContributedTo(
              includeUserRepositories: false
              first: 10
              contributionTypes: PULL_REQUEST
              orderBy: {direction: DESC, field: STARGAZERS}
            ) {
              totalCount
              edges {
                node {
                  createdAt
                  owner {
                    login
                  }
                  watchers {
                    totalCount
                  }
                  isFork
                  nameWithOwner
                  stargazerCount
                  id
                  name
                  owner {
                    login
                  }
                  stargazers {
                    totalCount
                  }
                  languages(first: 3, orderBy: {direction: DESC, field: SIZE}) {
                    edges {
                      size
                      node {
                        name
                        color
                      }
                    }
                  }
                  forkCount
                }
              }
            }
            myRepos: repositories(
              first: 10
              ownerAffiliations: OWNER
              orderBy: {direction: DESC, field: STARGAZERS}
            ) {
              totalCount
              edges {
                node {
                  owner {
                    login
                  }
                  watchers {
                    totalCount
                  }
                  isFork
                  nameWithOwner
                  stargazerCount
                  id
                  name
                  owner {
                    login
                  }
                  stargazers {
                    totalCount
                  }
                  languages(first: 3, orderBy: {direction: DESC, field: SIZE}) {
                    edges {
                      size
                      node {
                        name
                        color
                      }
                    }
                  }
                  forkCount
                }
              }
            }
            collaboratedRepos: repositories(
              first: 10
              ownerAffiliations: COLLABORATOR
              orderBy: {direction: DESC, field: STARGAZERS}
            ) {
              totalCount
              edges {
                node {
                  owner {
                    login
                  }
                  watchers {
                    totalCount
                  }
                  isFork
                  nameWithOwner
                  stargazerCount
                  id
                  name
                  owner {
                    login
                  }
                  stargazers {
                    totalCount
                  }
                  languages(first: 3, orderBy: {direction: DESC, field: SIZE}) {
                    edges {
                      size
                      node {
                        name
                        color
                      }
                    }
                  }
                  forkCount
                }
              }
            }
          }
        }
      `,
      variables: {username: login, date: date.toISOString()},
    }),
  });

  return await json();
};

export const getGithubLogin = async (login: string): Promise<GithubUser> => {
  const {json} = await fetch(`https://api.github.com/users/${login}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return await json();
};

export const getGithubCommits = async (
  login: string,
): Promise<AuthorCommits> => {
  const {json} = await fetch(
    `https://api.github.com/search/commits?q=author:${login}&sort=author-date&order=desc`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );

  return await json();
};

type GithubStats = Omit<
  Model['Stats']['Row'],
  'score' | 'userPluginId' | 'id' | 'iconURL' | 'iconURLSelected'
> & {
  score: number;
  statsElements: any;
};

export type DoobooStatsResponse = {
  plugin: Model['Plugin']['Row'];
  pluginStats: PluginStats;
  pluginTrophies: PluginTrophy[];
  json: {
    login: string;
    avatarUrl?: string;
    bio?: string;
    score?: number;
    languages: TopLanguage[];
  };
  isCachedResult: boolean;
  userName: string | null;
  githubId: string;
  score: number;
};

const upsertGithubStats = async ({
  login,
  plugin,
  userPlugin,
  lang = 'en',
}: {
  login: string;
  plugin: Model['Plugin']['Row'];
  userPlugin: Model['UserPlugin']['Row'] | null;
  lang?: Locale;
}): Promise<DoobooStatsResponse | null> => {
  try {
    const supabase = createSupabaseClient();
    const {plugins} = await getTranslates(lang);

    // NOTE: Unknown user or user without commits will gracefully fail here.
    const results: [{data: {user: UserGraph}}, AuthorCommits] =
      await Promise.all([getGithubUser(login), getGithubCommits(login)]);

    const {
      data: {user: githubUser},
    } = results[0];

    const githubStatus = getGithubStatus(githubUser, results[1]);
    const languages = getTopLanguages(githubUser);
    const trophies = getTrophies(githubUser);

    const stats: Model['Stats']['Insert'][] = [
      {
        name: 'TREE',
        score: githubStatus.tree.score,
        description: 'The dooboo default tree stats.',
        statsElements: githubStatus.tree.statsElements,
      },
      {
        name: 'FIRE',
        score: githubStatus.fire.score,
        description: 'The dooboo default fire stats.',
        statsElements: githubStatus.fire.statsElements,
      },
      {
        name: 'EARTH',
        score: githubStatus.earth.score,
        description: 'The dooboo default earth stats.',
        statsElements: githubStatus.earth.statsElements,
      },
      {
        name: 'GOLD',
        score: githubStatus.gold.score,
        description: 'The dooboo default gold stats.',
        statsElements: githubStatus.gold.statsElements,
      },
      {
        name: 'WATER',
        score: githubStatus.water.score,
        description: 'The dooboo default water stats.',
        statsElements: githubStatus.water.statsElements,
      },
      {
        name: 'PERSON',
        score: githubStatus.person.score,
        description: 'The dooboo default person stats.',
        statsElements: githubStatus.person.statsElements,
      },
    ];

    if (userPlugin) {
      const deleteStatsPromise = supabase
        .from('Stats')
        .delete()
        .match({userPluginLogin: userPlugin.login});

      const deleteTrophiesPromise = supabase.from('Trophy').delete().match({
        userPluginLogin: userPlugin.login,
      });

      await Promise.all([deleteStatsPromise, deleteTrophiesPromise]);
    }

    const sum =
      (githubStatus.tree?.score || 0) +
      (githubStatus.fire?.score || 0) +
      (githubStatus.earth?.score || 0) +
      (githubStatus.gold?.score || 0) +
      (githubStatus.water?.score || 0) +
      (githubStatus.person?.score || 0);

    const score = Math.round((sum / 6) * 100);

    await supabase.from('UserPlugin').upsert({
      login,
      userName: githubUser.name,
      avatarUrl: githubUser.avatarUrl,
      description: githubUser.bio,
      pluginId: plugin.id,
      score,
      githubId: githubUser.id,
      json: {
        login: githubUser.login,
        avatarUrl: githubUser.avatarUrl,
        bio: githubUser.bio,
        score,
        languages,
      },
    });

    trophies.forEach(async (el) => {
      const trophyScore = el.score as number;

      await supabase.from('Trophy').upsert({
        ...el,
        score: trophyScore,
      });
    });

    stats.forEach(async (el) => {
      const statScore = el.score as number;
      const statsElements = el.statsElements as Json;

      await supabase.from('Stats').upsert({
        ...el,
        score: statScore,
        statsElements: statsElements,
      });
    });

    return {
      plugin,
      pluginStats: githubStatus,
      pluginTrophies: trophies.map((el) => {
        const type = el.type as keyof typeof plugins;

        return {
          ...el,
          type: plugins[type],
        };
      }),
      isCachedResult: false,
      json: {
        login: githubUser.login,
        avatarUrl: githubUser.avatarUrl,
        bio: githubUser.bio,
        score,
        languages,
      },
      userName: githubUser.name,
      githubId: githubUser.id,
      score,
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error in upsertGithubStats', err);

    return null;
  }
};

export const getDoobooStats = async ({
  login,
  lang = 'en',
}: {
  login: string;
  lang?: Locale;
}): Promise<DoobooStatsResponse | null> => {
  const supabase = createSupabaseClient();
  const {common, plugins} = await getTranslates(lang);
  login = login.toLowerCase();

  try {
    const PLUGIN_ID = 'dooboo-github';

    const {data: plugin} = await supabase
      .from('Plugin')
      .select()
      .eq('id', PLUGIN_ID)
      .single();

    if (!plugin) {
      throw new Error(common.pluginNotFound);
    }

    const {data: userPlugin} = await supabase
      .from('UserPlugin')
      .select()
      .match({
        pluginId: plugin.id,
        login,
      })
      .single();

    // NOTE: Return the data when user was fetched.
    if (userPlugin) {
      const {data: stats} = await supabase.from('Stats').select().match({
        userPluginLogin: userPlugin.login,
      });

      const ghStats: GithubStats[] =
        stats?.map((el) => {
          return {
            id: el.id,
            description: el.description,
            score: el.score,
            name: el.name,
            statsElements: el.statsElements,
            userPluginLogin: el.userPluginLogin,
          };
        }) || [];

      const tree = ghStats.find((el) => el.name === 'TREE');
      const fire = ghStats.find((el) => el.name === 'FIRE');
      const earth = ghStats.find((el) => el.name === 'EARTH');
      const gold = ghStats.find((el) => el.name === 'GOLD');
      const water = ghStats.find((el) => el.name === 'WATER');
      const person = ghStats.find((el) => el.name === 'PERSON');

      const result: PluginStats = {
        tree: {
          name: plugins.tree,
          description: plugins.treeDescription,
          score: tree?.score || 0,
          statsElements: tree?.statsElements,
        },
        fire: {
          name: plugins.fire,
          description: plugins.fireDescription,
          score: fire?.score || 0,
          statsElements: fire?.statsElements,
        },
        earth: {
          name: plugins.earth,
          description: plugins.earthDescription,
          score: earth?.score || 0,
          statsElements: earth?.statsElements,
        },
        gold: {
          name: plugins.gold,
          description: plugins.goldDescription,
          score: gold?.score || 0,
          statsElements: gold?.statsElements,
        },
        water: {
          name: plugins.water,
          description: plugins.waterDescription,
          score: water?.score || 0,
          statsElements: water?.statsElements,
        },
        person: {
          name: plugins.person,
          description: plugins.personDescription,
          score: person?.score || 0,
          statsElements: person?.statsElements,
        },
      };

      const updatedAt = new Date(userPlugin?.updatedAt || '');
      const today = new Date();

      // When user was queried after 3 hours, update the data in background.
      let isCachedResult = false;

      if (userPlugin.login) {
        await supabase
          .from('UserPlugin')
          .update({
            viewCount: userPlugin?.viewCount ? userPlugin.viewCount + 1 : 1,
          })
          .match({login: userPlugin.login});

        if (diffHours(updatedAt, today) < 3) {
          upsertGithubStats({
            plugin,
            userPlugin,
            login,
            lang,
          });
          isCachedResult = true;
        }
      }

      const {data: trophies} = await supabase
        .from('Trophy')
        .select('score, points,type')
        .eq('userPluginLogin', userPlugin.login);

      return {
        plugin,
        pluginStats: result,
        pluginTrophies:
          trophies?.map((el) => {
            const type = el.type as keyof typeof plugins;

            return {
              ...el,
              type,
            };
          }) || [],
        json: JSON.parse(JSON.stringify(userPlugin.json)),
        isCachedResult,
        userName: userPlugin.userName,
        githubId: userPlugin.githubId,
        score: userPlugin.score,
      };
    }

    return await upsertGithubStats({
      plugin,
      userPlugin,
      login,
      lang,
    });
  } catch (e: any) {
    throw new Error(e);
  }
};
