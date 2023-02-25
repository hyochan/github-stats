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
  const locale = currentLocale(req);
  const method = <string>req.method;
  const login = <string>req.query.login;
  const {common} = await getTranslates(locale);
  const {logEvent} = initNodeAmplitude();

  switch (method) {
    case 'GET':
      assert(login, common.badRequest);

      try {
        const stats = await getDoobooStats({
          login: login.toLocaleLowerCase(),
          lang: locale,
        });

        if (!stats) {
          res.status(404).json({message: common.notFound});

          return;
        }

        const {file} = await generateGithubSVG(login, stats, true);

        logEvent(
          {event_type: 'github-stats-advanced'},
          {
            login,
            lang: locale,
          },
        );

        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(file);
      } catch (err) {
        res.status(500).send(err);
      }

      break;
    default:
      res.status(404).json({message: common.notFound});
  }
}
