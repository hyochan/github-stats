export const revalidate = 3600;

import {track} from '@amplitude/analytics-node';
import type {NextApiRequest, NextApiResponse} from 'next';

import {generateGithubSVG} from '../../../server/plugins/svgs/functions';
import {getDoobooStats} from '../../../server/services/githubService';
import {currentLocale, initNodeAmplitude} from '../../../server/utils';
import {getTranslates} from '../../localization';
import {assert} from '../../utils/assert';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string | unknown | {message: string}>,
): Promise<void> {
  initNodeAmplitude();

  const locale = currentLocale(req);
  const method = <string>req.method;
  const {common} = await getTranslates(locale);

  switch (method) {
    case 'GET':
      const loginParam = <string>req.query.login;
      assert(loginParam, common.badRequest);

      try {
        const stats = await getDoobooStats({
          login: loginParam.toLocaleLowerCase(),
          lang: locale,
        });

        if (!stats) {
          res.status(404).json({message: common.notFound});

          return;
        }

        track('github-stats', undefined, {
          language: locale,
          user_id: loginParam,
          extra: {login: loginParam, lang: locale},
        });

        const {file} = await generateGithubSVG(loginParam, stats, false);
        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(file);
      } catch (err) {
        res.status(500).send(err);
      }

      break;
    case 'POST':
      const loginBody = <string>req.body.login;
      assert(loginBody, common.badRequest);

      try {
        const stats = await getDoobooStats({
          login: loginBody.toLocaleLowerCase(),
          lang: locale,
        });

        if (!stats) {
          res.status(404).json({message: common.notFound});

          return;
        }

        track('github-stats-data', undefined, {
          language: locale,
          user_id: loginBody,
          extra: {login: loginBody, lang: locale},
        });

        res.send({stats});
      } catch (err) {
        res.status(500).send(err);
      }

      break;
    default:
      res.status(404).json({message: common.notFound});
  }
}
