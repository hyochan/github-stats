import type {PluginValue, Score} from '..';
import {convertToHundreds} from '../pluginUtils';

const PEOPLE_WEIGHT = 0.005;

export const getGithubPeopleScore = ({
  tree,
  fire,
  earth,
  gold,
  water,
}: {
  tree: number;
  fire: number;
  earth: number;
  gold: number;
  water: number;
}): PluginValue => {
  const TREE_OFFSET = 0.5;
  const FIRE_OFFSET = 0.5;
  const EARTH_OFFSET = 0.5;
  const GOLD_OFFSET = 1;
  const WATER_OFFSET = 1;

  const scores: Score[] = [
    {
      offset: TREE_OFFSET,
      count: tree,
    },
    {
      offset: FIRE_OFFSET,
      count: fire,
    },
    {
      offset: EARTH_OFFSET,
      count: earth,
    },
    {
      offset: GOLD_OFFSET,
      count: gold,
    },
    {
      offset: WATER_OFFSET,
      count: water,
    },
  ];

  const allOffset = scores.reduce((pre, val) => pre + val.offset, 0);
  const sum: number =
    scores.reduce((pre, val) => pre + val.count * val.offset, 0) /
    PEOPLE_WEIGHT;
  const score = convertToHundreds(sum, allOffset);

  return {
    name: 'PEOPLE',
    score: score / 100,
    statElements: [
      {
        key: 'TREE',
        name: 'Tree',
        description: 'The score of tree.',
        totalCount: Math.round(tree * 100),
      },
      {
        key: 'FIRE',
        name: 'Fire',
        description: 'The score of fire.',
        totalCount: Math.round(fire * 100),
      },
      {
        key: 'EARTH',
        name: 'Earth',
        description: 'The score of earth.',
        totalCount: Math.round(earth * 100),
      },
      {
        key: 'GOLD',
        name: 'Gold',
        description: 'The score of gold.',
        totalCount: Math.round(gold * 100),
      },
      {
        key: 'WATER',
        name: 'Water',
        description: 'The score of water.',
        totalCount: Math.round(water * 100),
      },
    ],
  };
};
