import type {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';

import {HeaderMap} from '@apollo/server';
import {apolloServer} from '../../../server';
import {createSupabaseClient} from '../../../server/utils';
import {parse} from 'url';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const headers = new HeaderMap();

  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === 'string') {
      headers.set(key, value);
    }
  }

  const supabase = createSupabaseClient();

  const httpGraphQLResponse = await apolloServer.executeHTTPGraphQLRequest({
    // context: async () => createContext({req, res}),
    context: async () => {
      return {
        supabase,
        request: {req, res},
        appSecret: process.env.JWT_SECRET,
      };
    },
    httpGraphQLRequest: {
      body: req.body,
      headers,
      method: req.method || 'POST',
      search: req.url ? parse(req.url).search || '' : '',
    },
  });

  for (const [key, value] of httpGraphQLResponse.headers) {
    res.setHeader(key, value);
  }

  res.statusCode = httpGraphQLResponse.status || 200;

  if (httpGraphQLResponse.body.kind === 'complete') {
    res.send(httpGraphQLResponse.body.string);
  } else {
    for await (const chunk of httpGraphQLResponse.body.asyncIterator) {
      res.write(chunk);
    }

    res.end();
  }
};

export default handler;
