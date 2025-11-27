import type {NextRequest} from 'next/server';

import {config, proxy} from './proxy';

export {config};

export function middleware(request: NextRequest) {
  return proxy(request);
}
