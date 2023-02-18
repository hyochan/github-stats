import {asNexusMethod, scalarType} from 'nexus';

import {GraphQLDateTime} from 'graphql-iso-date';
// @ts-ignore
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import {JSONResolver} from 'graphql-scalars';
import type {Prisma} from '@prisma/client';

export enum AuthType {
  email = 'email',
  github = 'github',
  apple = 'apple',
}

export const authType = scalarType({
  name: 'AuthType',
  asNexusMethod: 'auth',
  // @ts-ignore
  parseValue(value: AuthType): AuthType | undefined {
    if (AuthType[value]) {
      return value;
    }
  },
  serialize(value) {
    return value;
  },
});

enum GenderType {
  male = 'male',
  female = 'female',
}

export const Gender = scalarType({
  name: 'GenderType',
  asNexusMethod: 'gender',
  // @ts-ignore
  parseValue(value: GenderType): GenderType | undefined {
    if (GenderType[value]) {
      return value;
    }
  },
  serialize(value) {
    return value;
  },
});

export const Upload = GraphQLUpload;
// @ts-ignore
export const DateTime = asNexusMethod(GraphQLDateTime, 'date');

export const Decimal = scalarType({
  name: 'Decimal',
  asNexusMethod: 'decimal',
  // @ts-ignore
  parseValue(value: Prisma.Decimal): Prisma.Decimal | undefined {
    if (value) {
      return value;
    }
  },
  serialize(value) {
    return value;
  },
});

export const JSON = asNexusMethod(JSONResolver, 'json');
