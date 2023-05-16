import type {PluginValue, Score} from '..';
import {convertToHundreds} from '../pluginUtils';
import type {AuthorCommits} from '../types/AuthorCommits';

const EARTH_WEIGHT = 30;

export const getGithubEarthScore = (
  userCommits: AuthorCommits,
): PluginValue => {
  const totalCount = userCommits.total_count;
  const lastDate = new Date(userCommits.items?.[0]?.commit?.author?.date || 0);
  const firstDate = new Date(
    userCommits.items?.[userCommits.items?.length - 1]?.commit?.author?.date ||
      0,
  );

  const diffTimes = lastDate.getTime() - firstDate.getTime();
  const diffDays = Math.round(diffTimes / (1000 * 3600 * 24));

  const COMMITS_OFFSET = 2.5;
  const DAYS_OFFSET = 15;

  const scores: Score[] = [
    {offset: COMMITS_OFFSET, count: totalCount},
    {
      offset: DAYS_OFFSET,
      count: diffDays === 0 || diffDays > 365 ? 1 : 365 - diffDays,
    },
  ];

  const allOffset = scores.reduce((pre, val) => pre + val.offset, 0);
  const sum: number =
    scores.reduce((pre, val) => pre + val.count * val.offset, 0) / EARTH_WEIGHT;
  const score = convertToHundreds(sum, allOffset);

  return {
    name: 'EARTH',
    score: score / 100,
    statElements: [
      {
        key: 'COMMITS',
        name: 'Commits',
        description: 'Total number of commits.',
        totalCount,
      },
      {
        key: 'ACTIVE_LATENCY_IN_DAYS',
        name: 'Active latency in days',
        description:
          // eslint-disable-next-line max-len
          'Total number of days period for all commits. The shorter the duration, the more treaks there are, so the smaller the score, the more points.',
        totalCount: diffDays,
        details: JSON.stringify(
          userCommits.items.splice(0, 10).map((el) => {
            return {
              type: 'commit',
              name: `${el.repository.owner.login}/${el.repository.name}`,
              message: el.commit.message,
              comment_count: el.commit.comment_count,
              sha: el.sha,
              score: el.score,
              author: el.author.login,
              url: el.commit.url,
            };
          }),
        ),
      },
    ],
  };
};
