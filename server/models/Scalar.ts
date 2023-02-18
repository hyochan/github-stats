import {GraphQLDate, GraphQLDateTime} from 'graphql-iso-date';
import {asNexusMethod, scalarType} from 'nexus';

export enum Gender {
  male = 'male',
  female = 'female',
}

export const gender = scalarType({
  name: 'Gender',
  asNexusMethod: 'gender',
  parseValue: (value): Gender | undefined => {
    if (Gender[value as Gender]) {
      return value as Gender;
    }
  },
  serialize(value) {
    return value;
  },
});

export const GQLDate = GraphQLDate;
//@ts-ignore
export const GQLDateTime = asNexusMethod(GraphQLDateTime, 'date');
