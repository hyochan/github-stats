import {objectType} from 'nexus';

export const Plugin = objectType({
  name: 'Plugin',
  definition(t) {
    t.nonNull.id('name');
    t.nonNull.string('apiURL');
    t.string('description');
    t.json('json');

    t.date('createdAt');
    t.date('updatedAt');
    t.date('deletedAt');

    t.list.field('userPlugins', {
      type: 'UserPlugin',
      resolve: async ({name}, _, {supabase}) => {
        const {data} = await supabase
          .from('UserPlugin')
          .select()
          .eq('pluginName', name);

        return data;
      },
    });
  },
});

export const PluginStats = objectType({
  name: 'PluginStats',
  definition(t) {
    t.nonNull.field('tree', {type: 'Stats'});
    t.nonNull.field('fire', {type: 'Stats'});
    t.nonNull.field('earth', {type: 'Stats'});
    t.nonNull.field('gold', {type: 'Stats'});
    t.nonNull.field('water', {type: 'Stats'});
    t.nonNull.field('person', {type: 'Stats'});
  },
});

export const Language = objectType({
  name: 'Language',
  definition(t) {
    t.string('name');
    t.int('size');
    t.string('color');
  },
});

export const PluginJSON = objectType({
  name: 'PluginJSON',
  definition(t) {
    t.nonNull.string('login');
    t.string('avatarUrl');
    t.string('bio');
    t.int('score');
    t.nonNull.list.nonNull.field('languages', {type: 'Language'});
  },
});

export const DoobooStats = objectType({
  name: 'DoobooStats',
  definition(t) {
    t.nonNull.field('pluginStats', {type: 'PluginStats'});
    t.nonNull.field('plugin', {type: 'Plugin'});
    t.nonNull.field('json', {type: 'PluginJSON'});
    t.nonNull.string('githubId');
    t.nonNull.int('score');
  },
});
