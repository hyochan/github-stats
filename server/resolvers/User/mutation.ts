import {inputObjectType, mutationField, nonNull, stringArg} from 'nexus';

import {assert} from '../../../src/utils/assert';
import {currentLocale} from '../../utils';
import {getDoobooStats} from '../../services/githubService';
import {getTranslates} from '../../../src/localization';

export const UserUpdateInput = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.nonNull.id('id');
    t.string('email');
    t.string('name');
    t.string('thumbURL');
    t.string('photoURL');
    t.string('name');
    t.date('birthday');
    t.string('phone');
    t.gender('gender');
    t.string('description');
    t.string('githubLogin');
  },
});

// export const updateProfile = mutationField('updateProfile', {
//   type: 'User',
//   args: {
//     user: nonNull(UserUpdateInput),
//     image: arg({type: 'Upload'}),
//   },
//   resolve: async (_parent, {user}, {getUID, request}) => {
//     const userId: string | null = await getUID;
//     const locale = <Locale>request.req.headers['accept-language'] ?? 'en';
//     const {common} = await getTranslates(locale);
//     assert(login, common.notAuthorized);

//     if (userId !== user.id) {
//       throw new Error('User id does not match.');
//     }

//     try {
//       const updated = await prisma.user.upsert({
//         where: {id: userId},
//         create: {
//           id: userId,
//           email: user.email,
//           name: user.name,
//           phone: user.phone,
//           locale,
//           image: {
//             create: {
//               thumbUrl: user.thumbURL,
//               imageUrl: user.photoURL,
//             },
//           },
//         },
//         update: {
//           email: user.email,
//           name: user.name,
//           phone: user.phone,
//           image: {
//             upsert: {
//               create: {
//                 thumbUrl: user.thumbURL,
//                 imageUrl: user.photoURL,
//               },
//               update: {
//                 thumbUrl: user.thumbURL,
//                 imageUrl: user.photoURL,
//               },
//             },
//           },
//         },
//       });

//       if (!updated.githubLogin && user.githubLogin) {
//         await prisma.user.update({
//           data: {githubLogin: user.githubLogin},
//           where: {id: updated.id},
//         });
//       }

//       pubsub.publish({
//         topic: USER_UPDATED,
//         payload: updated,
//       });

//       return updated;
//     } catch (err) {
//       throw new Error(err as string);
//     }
//   },
// });

// export const signInWithGithub = mutationField('signInWithGithub', {
//   type: 'User',
//   args: {accessToken: nonNull(stringArg()), user: nonNull(UserUpdateInput)},
//   resolve: async (
//     _parent,
//     {accessToken, user},
//     {pubsub, prisma, getUID, request},
//   ) => {
//     const userId: string | null = await getUID;

//     assert(userId, request.t<string>('NOT_AUTHORIZED'));

//     try {
//       const {data: data}: {data: GithubUser} = await axios({
//         method: 'Get',
//         url: 'https://api.github.com/user',
//         headers: {
//           Authorization: `token ${accessToken}`,
//           accept: 'application/json',
//         },
//       });

//       const updated = await prisma.user.upsert({
//         create: {
//           id: userId,
//           email: data.email,
//           name: data.name,
//           phone: user.phone,
//           locale: request.language,
//           githubLogin: data.login,
//           description: data.bio,
//           location: data.location,
//           company: data.company,
//           blog: data.blog,
//           twitter: data.twitter_username,
//           githubURL: data.url,
//           image: {
//             connectOrCreate: {
//               create: {
//                 thumbUrl: data.avatar_url,
//                 imageUrl: data.avatar_url,
//               },
//               where: {userId},
//             },
//           },
//         },
//         update: {
//           name: data.name,
//           phone: user.phone,
//           locale: request.language,
//           githubLogin: data.login,
//           description: data.bio,
//           location: data.location,
//           company: data.company,
//           blog: data.blog,
//           twitter: data.twitter_username,
//           githubURL: data.url,
//           image: {
//             update: {
//               thumbUrl: data.avatar_url,
//               imageUrl: data.avatar_url,
//             },
//           },
//         },
//         where: {id: userId},
//       });

//       pubsub.publish({
//         topic: USER_UPDATED,
//         payload: updated,
//       });

//       return updated;
//     } catch (err) {
//       throw new Error(<string>err);
//     }
//   },
// });

export const updateDoobooGithub = mutationField('updateDoobooGithub', {
  type: 'DoobooStats',
  args: {
    login: nonNull(
      stringArg({description: 'The unique github login value of the user.'}),
    ),
  },
  resolve: async (_parent, {login}, {request}) => {
    const locale = currentLocale(request.req);
    const {common} = await getTranslates(locale);
    assert(login, common.notAuthorized);

    return getDoobooStats({
      login,
      lang: locale,
    });
  },
});
