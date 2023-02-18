import {objectType} from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.id('id');
    t.string('email');
    t.string('name');
    t.string('imageUrl');
    t.gender('gender');
    t.nonNull.date('createdAt');
    t.nonNull.date('updatedAt');
    t.nullable.date('deletedAt');
  },
});
