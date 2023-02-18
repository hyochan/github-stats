import {objectType} from 'nexus';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('title');
    t.nonNull.string('content');
    t.nonNull.date('createdAt');
    t.nonNull.date('updatedAt');
    t.nullable.date('deletedAt');
  },
});
