import type {AuthorCommits, PluginStats, UserGraph} from '../plugins';

import type {GithubUser} from '../plugins/types';
import type {Json} from '../../src/types/supabase';
import type {Locale} from '../../src/i18n';
import type {Model} from '../../src/types/types';
import type {PluginTrophy} from '../plugins/trophies';
import type {TopLanguage} from '../plugins/topLanguages';
import axios from 'axios';
import {diffHours} from '../plugins/pluginUtils';
import {getGithubStatus} from '../plugins';
import {getSupabaseClient} from '../supabaseClient';
import {getTopLanguages} from '../plugins/topLanguages';
import {getTranslates} from '../../src/localization';
import {getTrophies} from '../plugins/trophies';

const {GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GH_TOKEN} = process.env;

export const getAccessToken = async (
  code: string,
  state?: string,
): Promise<string> => {
  const {data} = await axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token',
    headers: {
      accept: 'application/json',
    },
    data: {
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
      state,
    },
  });

  return data.access_token;
};

export const getGithubUser = async (
  login: string,
): Promise<{data: {user: UserGraph}}> => {
  // Note: Duration to 12 months fails intermittently for some users like `mcollina`. For that, we could try something like 6 months in the future.
  const date = new Date();
  date.setMonth(date.getMonth() - 12);

  const {data} = await axios({
    method: 'post',
    url: 'https://api.github.com/graphql',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `token ${GH_TOKEN}`,
    },
    data: {
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
    },
  });

  return data;
};

export const getGithubLogin = async (login: string): Promise<GithubUser> => {
  const {data} = await axios({
    method: 'GET',
    url: `https://api.github.com/users/${login}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return data;
};

export const getGithubCommits = async (
  login: string,
): Promise<AuthorCommits> => {
  const {data} = await axios({
    method: 'GET',
    url: `https://api.github.com/search/commits?q=author:${login}&sort=author-date&order=desc`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return data;
};

type GithubStats = Omit<
  Model['stats']['Row'],
  'score' | 'user_plugin_login' | 'id' | 'icon_url' | 'icon_url_selected'
> & {
  score: number;
  stat_element: any;
};

export type DoobooStatsResponse = {
  plugin: Model['plugins']['Row'];
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
  user_plugin,
  lang = 'en',
}: {
  login: string;
  plugin: Model['plugins']['Row'];
  user_plugin: Model['user_plugins']['Row'] | null;
  lang?: Locale;
}): Promise<DoobooStatsResponse | null> => {
  try {
    const supabase = getSupabaseClient();
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

    const stats: Model['stats']['Insert'][] = [
      {
        name: 'TREE',
        score: githubStatus.tree.score,
        description: 'The dooboo default tree stats.',
        stat_element: githubStatus.tree.stat_element,
      },
      {
        name: 'FIRE',
        score: githubStatus.fire.score,
        description: 'The dooboo default fire stats.',
        stat_element: githubStatus.fire.stat_element,
      },
      {
        name: 'EARTH',
        score: githubStatus.earth.score,
        description: 'The dooboo default earth stats.',
        stat_element: githubStatus.earth.stat_element,
      },
      {
        name: 'GOLD',
        score: githubStatus.gold.score,
        description: 'The dooboo default gold stats.',
        stat_element: githubStatus.gold.stat_element,
      },
      {
        name: 'WATER',
        score: githubStatus.water.score,
        description: 'The dooboo default water stats.',
        stat_element: githubStatus.water.stat_element,
      },
      {
        name: 'PERSON',
        score: githubStatus.person.score,
        description: 'The dooboo default person stats.',
        stat_element: githubStatus.person.stat_element,
      },
    ];

    if (user_plugin) {
      const deleteStatsPromise = supabase
        .from('stats')
        .delete()
        .match({user_plugin_login: user_plugin.login});

      const deleteTrophiesPromise = supabase.from('trophies').delete().match({
        user_plugin_login: user_plugin.login,
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

    await supabase.from('user_plugins').upsert({
      login,
      user_name: githubUser.name,
      avatar_url: githubUser.avatarUrl,
      description: githubUser.bio,
      plugin_id: plugin.id,
      score,
      github_id: githubUser.id,
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

      await supabase.from('trophies').upsert({
        ...el,
        score: trophyScore,
        user_plugin_login: login,
      });
    });

    stats.forEach(async (el) => {
      const statScore = el.score as number;
      const stat_element = el.stat_element as Json;

      await supabase.from('stats').upsert({
        ...el,
        score: statScore,
        stat_element: stat_element,
        user_plugin_login: login,
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
  login = login.toLowerCase();

  const supabase = getSupabaseClient();

  const {
    common: tCommon,
    plugins: tPlugins,
    trophies: tTrophies,
  } = await getTranslates(lang);

  try {
    const PLUGIN_ID = 'dooboo-github';

    const {data: plugin} = await supabase
      .from('plugins')
      .select()
      .eq('id', PLUGIN_ID)
      .single();

    if (!plugin) {
      throw new Error(tCommon.pluginNotFound);
    }

    const {data: userPlugin} = await supabase
      .from('user_plugins')
      .select()
      .match({
        plugin_id: plugin.id,
        login,
      })
      .single();

    const {data: stats} = await supabase.from('stats').select('*').match({
      user_plugin_login: login,
    });

    // NOTE: Return the data when user was fetched.
    if (userPlugin && stats?.length === 6) {
      const ghStats: GithubStats[] =
        stats?.map((el) => {
          return {
            id: el.id,
            description: el.description,
            score: el.score,
            name: el.name,
            stat_element: el.stat_element,
            user_plugin_login: el.user_plugin_login,
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
          name: tPlugins.tree,
          description: tPlugins.treeDescription,
          score: tree?.score || 0,
          stat_element: tree?.stat_element,
        },
        fire: {
          name: tPlugins.fire,
          description: tPlugins.fireDescription,
          score: fire?.score || 0,
          stat_element: fire?.stat_element,
        },
        earth: {
          name: tPlugins.earth,
          description: tPlugins.earthDescription,
          score: earth?.score || 0,
          stat_element: earth?.stat_element,
        },
        gold: {
          name: tPlugins.gold,
          description: tPlugins.goldDescription,
          score: gold?.score || 0,
          stat_element: gold?.stat_element,
        },
        water: {
          name: tPlugins.water,
          description: tPlugins.waterDescription,
          score: water?.score || 0,
          stat_element: water?.stat_element,
        },
        person: {
          name: tPlugins.person,
          description: tPlugins.personDescription,
          score: person?.score || 0,
          stat_element: person?.stat_element,
        },
      };

      const updatedAt = new Date(userPlugin?.updated_at || '');
      const today = new Date();

      // When user was queried after 3 hours, update the data in background.
      let isCachedResult = false;

      if (userPlugin.login) {
        await supabase
          .from('user_plugins')
          .update({
            view_count: userPlugin?.view_count ? userPlugin.view_count + 1 : 1,
          })
          .match({login: userPlugin.login});

        if (diffHours(updatedAt, today) < 3) {
          upsertGithubStats({
            plugin,
            user_plugin: userPlugin,
            login,
            lang,
          });
          isCachedResult = true;
        }
      }

      const {data: trophyData} = await supabase
        .from('trophies')
        .select('score, points, type')
        .eq('user_plugin_login', userPlugin.login);

      return {
        plugin,
        pluginStats: result,
        pluginTrophies:
          trophyData?.map((el) => {
            const type = el.type as keyof typeof tTrophies;

            return {
              ...el,
              type: tTrophies[type],
            };
          }) || [],
        json: JSON.parse(JSON.stringify(userPlugin.json)),
        isCachedResult,
        userName: userPlugin.user_name,
        githubId: userPlugin.github_id,
        score: userPlugin.score,
      };
    }

    return await upsertGithubStats({
      plugin,
      user_plugin: userPlugin,
      login,
      lang,
    });
  } catch (e: any) {
    throw new Error(e);
  }
};
