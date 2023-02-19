import type {NextApiRequest, NextApiResponse} from 'next';
import type {DoobooStatsResponse} from '../../../server/services/githubService';
import {getDoobooStats} from '../../../server/services/githubService';
import {currentLocale} from '../../../server/utils';
import {getTranslates} from '../../localization';
import {assert} from '../../utils/assert';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<(DoobooStatsResponse | null) | {message: string}>,
): Promise<void> {
  const {body, method} = req;
  const login = <string>body.login;
  const locale = currentLocale(req);

  switch (method) {
    case 'POST':
      const {common} = await getTranslates(locale);
      assert(login, common.notAuthorized);
      try {
        const data = await getDoobooStats({
          login,
          lang: locale,
        });

        if (!data) {
          res.status(404).json({message: 'No plugins found.'});

          return;
        }

        res.status(200).json(data);
      } catch (err) {
        res.status(500).json({message: `Error: ${err}`});
      }

      break;
    default:
      res.status(404).end();
  }
}
