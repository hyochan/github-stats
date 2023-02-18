import {objectType} from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.id('id', {description: 'Firebase user id'});
    t.string('email');
    t.string('name');
    t.string('description');
    t.date('birthday');
    t.gender('gender');
    t.string('phone');
    t.string('locale');
    t.boolean('certified');
    t.string('githubLogin');
    t.string('location');
    t.string('company');
    t.string('blog');
    t.string('twitter');
    t.string('githubURL');

    t.date('createdAt');
    t.date('updatedAt');
    t.date('deletedAt');

    t.field('image', {
      type: 'Image',
      resolve: async ({id}, _, {supabase}) => {
        if (!id) {
          return null;
        }

        const {data} = await supabase
          .from('Image')
          .select()
          .eq('userId', id)
          .single();

        return data?.[0];
      },
    });
  },
});
