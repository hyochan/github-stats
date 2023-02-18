import {idArg, nonNull, queryField} from 'nexus';

export const user = queryField('user', {
  type: 'User',
  args: {id: nonNull(idArg())},
  description: 'Fetch the user with given id',

  resolve: async (parent, args, ctx) => {
    const {id} = args;

    return await ctx.prisma.user.findUnique({where: {id}});
  },
});
