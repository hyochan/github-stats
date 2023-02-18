import {nonNull, stringArg, subscriptionField} from 'nexus';

import mercurius from 'mercurius';

export const USER_SIGNED_IN = 'USER_SIGNED_IN';
export const USER_UPDATED = 'USER_UPDATED';

const {withFilter} = mercurius;

// export const userSignedIn = subscriptionField('userSignedIn', {
//   type: 'User',
//   args: {
//     userId: nonNull(stringArg()),
//   },
//   subscribe: withFilter(
//     (_, args, ctx) => {
//       const {pubsub} = ctx;

//       return pubsub.subscribe(USER_SIGNED_IN);
//     },
//     (payload, {userId}) => {
//       return payload.id === userId;
//     },
//   ),
//   // @ts-ignore
//   resolve: (payload) => {
//     return payload;
//   },
// });

// export const userUpdated = subscriptionField('userUpdated', {
//   type: 'User',
//   args: {
//     userId: nonNull(stringArg()),
//   },
//   subscribe: withFilter(
//     (_, __, {pubsub}) => pubsub.subscribe([USER_UPDATED]),
//     (payload, {userId}, {request}) => {
//       assert(userId, request.t<string>('NOT_AUTHORIZED'));

//       return payload.id === userId;
//     },
//   ),
//   // @ts-ignore
//   resolve: (payload) => {
//     return payload;
//   },
// });
