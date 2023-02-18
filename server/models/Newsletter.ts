import {objectType} from 'nexus';

export const Newsletter = objectType({
  name: 'Newsletter',
  definition(t) {
    t.id('email');

    t.date('createdAt');
    t.date('updatedAt');
    t.date('deletedAt');
  },
});
