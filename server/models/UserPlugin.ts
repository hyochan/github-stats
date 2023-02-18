import {objectType} from 'nexus';

export const UserPlugin = objectType({
  name: 'UserPlugin',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('login');
    t.nonNull.string('githubId');
    t.nonNull.int('score');
    t.string('userName');
    t.int('viewCount');
    t.string('avatarUrl');
    t.string('description');
    t.json('json');
    t.date('certifiedAt');
    t.int('certificationNo');

    t.list.field('stats', {
      type: 'Stats',
      resolve: async ({id}, _, {supabase}) => {
        const {data} = await supabase
          .from('Stats')
          .select()
          .eq('userPluginId', id);

        return data;
      },
    });

    t.list.field('trophies', {
      type: 'Trophy',
      resolve: async ({id}, _, {supabase}) => {
        const {data} = await supabase
          .from('Trophy')
          .select()
          .eq('userPluginId', id);

        return data;
      },
    });
  },
});

export const Tier = objectType({
  name: 'Tier',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.string('icon');
    t.decimal('score');
    t.string('description');
  },
});

export const Trophy = objectType({
  name: 'Trophy',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('type');
    t.nonNull.decimal('score');
    t.nonNull.int('points');
  },
});

export const Stats = objectType({
  name: 'Stats',
  definition(t) {
    t.id('id');
    t.nonNull.string('name');
    t.string('icon');
    t.decimal('score');
    t.string('description');

    t.json('statsElements');
  },
});
