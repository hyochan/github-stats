import {idArg, inputObjectType, mutationField, nonNull} from 'nexus';

import invariant from 'tiny-invariant';

export const PostUpdateInputType = inputObjectType({
  name: 'PostUpdateInput',
  definition(t) {
    t.nonNull.string('title');
    t.nonNull.string('content');
  },
});

export const updatePost = mutationField('updatePost', {
  type: 'Post',
  args: {
    postId: idArg(),
    post: nonNull(PostUpdateInputType),
  },
  description: 'update the post fields',
  resolve: async (_parent, {postId, post}, ctx) => {
    invariant(postId, 'Can not found postId');

    const updated = await ctx.prisma.post.update({
      where: {id: postId},
      data: {
        ...post,
      },
    });

    return updated;
  },
});
