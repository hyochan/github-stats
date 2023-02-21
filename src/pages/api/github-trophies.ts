import type {NextApiRequest, NextApiResponse} from 'next';
import {LOWEST_TROPHIES_SCORE} from '../../../server/plugins';
import {uploadTrophiesSvg} from '../../../server/plugins/svgs/functions';
import {renderGithubTrophies} from '../../../server/plugins/svgs/githubTrophies';
import {getDoobooStats} from '../../../server/services/githubService';
import {currentLocale} from '../../../server/utils';
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

        const trophies = stats.pluginTrophies.filter(
          (el) => el.score > LOWEST_TROPHIES_SCORE,
        );

        if (trophies.length === 0) {
          res.status(404).json({message: common.notFound});

          return;
        }

        const trophySvg = renderGithubTrophies(trophies);
        uploadTrophiesSvg(login, trophySvg);

        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(trophySvg);
      } catch (err) {
        res.status(500).send(err);
      }

      break;
    default:
      res.status(404).json({message: common.notFound});
  }
}
