import * as path from 'path';
import * as types from './types';

import {connectionPlugin, makeSchema} from 'nexus';

export const schema = makeSchema({
  types,
  plugins: [
    connectionPlugin({
      cursorFromNode(node) {
        return node.id;
      },
    }),
  ],
  outputs: {
    schema: path.join(process.cwd(), '/server/generated/schema.graphql'),
    typegen: path.join(process.cwd(), '/server/generated/nexus.ts'),
  },
  contextType: {
    module: path.join(process.cwd(), 'server/context.ts'),
    export: 'Context',
  },
});
