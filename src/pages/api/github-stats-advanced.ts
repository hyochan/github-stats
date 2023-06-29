'use client';

import {track} from '@amplitude/analytics-browser';
import type {NextApiRequest, NextApiResponse} from 'next';

import {generateGithubSVG} from '../../../server/plugins/svgs/functions';
import {getDoobooStats} from '../../../server/services/githubService';
import {getSupabaseRouteHandlerClient} from '../../../server/supabaseClient';
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
  const login = <string>req.query.login;
  const {common} = await getTranslates(locale);
  const supabase = getSupabaseRouteHandlerClient();

  switch (method) {
    case 'GET':
      assert(login, common.badRequest);

      try {
        const stats = await getDoobooStats({
          login: login.toLocaleLowerCase(),
          lang: locale,
          supabase,
        });

        if (!stats) {
          res.status(404).json({message: common.notFound});

          return;
        }

        const {file} = await generateGithubSVG({
          login,
          stats,
          shouldIncludeLanguage: true,
          supabase,
        });

        track('github-stats-advanced', undefined, {
          language: locale,
          user_id: login,
          extra: {login, lang: locale},
        });

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
