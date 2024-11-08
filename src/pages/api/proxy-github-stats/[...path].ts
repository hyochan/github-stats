// pages/api/proxy-github-stats/[...path].ts
import type {NextApiRequest, NextApiResponse} from 'next';
import https from 'https';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const path = Array.isArray(req.query.path)
    ? req.query.path.join('/')
    : req.query.path;

  const options = {
    hostname: 'stats.hyo.dev',
    port: 443,
    path: `/api/github-stats/${path}`,
    method: req.method,
    headers: {
      ...req.headers,
      host: 'stats.hyo.dev',
    },
  };

  const proxy = https.request(options, (response) => {
    res.writeHead(response.statusCode || 500, response.headers);
    response.pipe(res);
  });

  proxy.on('error', (error) => {
    console.error(error);
    res.status(500).send('Proxy request failed.');
  });

  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
    req.pipe(proxy);
  } else {
    proxy.end();
  }
}
