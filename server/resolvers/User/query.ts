import {assert} from '../../../src/utils/assert';
import {queryField} from 'nexus';

// export const me = queryField('me', {
//   type: 'User',

//   resolve: async (_, __, {prisma, getUID}) => {
//     const uid = await getUID;

//     assert(uid, 'Not authorized');

//     return prisma.user.findUnique({
//       where: {id: uid},
//     });
//   },
// });
