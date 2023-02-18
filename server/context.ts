import type {NextApiRequest, NextApiResponse} from 'next';

import {PrismaClient} from '@prisma/client';

export interface Context {
  prisma: PrismaClient;
  request: {req: NextApiRequest; res: NextApiResponse};
}

const createPrismaClient = (): PrismaClient => {
  const prisma = new PrismaClient();

  //! Specify soft deletion models here.
  prisma.$use(async (params, next) => {
    const softDeletionModels = ['User'];

    if (params.model && softDeletionModels.includes(params.model)) {
      if (params.action === 'delete') {
        params.action = 'update';
        params.args.data = {deletedAt: new Date().toISOString()};
      }

      if (params.action === 'deleteMany') {
        params.action = 'updateMany';

        if (params.args.data !== undefined) {
          params.args.data.deletedAt = new Date().toISOString();
        } else {
          params.args.data = {deletedAt: new Date().toISOString()};
        }
      }

      if (params.action === 'findUnique') {
        params.action = 'findFirst';
        if (!params.args) {
          params.args = {where: {}};
        }

        params.args.where.deletedAt = null;
      }

      if (params.action === 'findMany' || params.action === 'findFirst') {
        if (!params.args) {
          params.args = {where: {}};
        }

        if (params.args.where !== undefined) {
          if (params.args.where.deletedAt === undefined) {
            params.args.where.deletedAt = null;
          }
        } else {
          params.args.where = {deletedAt: null};
        }
      }
    }

    return next(params);
  });

  return prisma;
};

type CreateContextParams = {
  req: NextApiRequest;
  res: NextApiResponse;
};

export function createContext(params: CreateContextParams): Context {
  return {
    prisma: createPrismaClient(),
    request: params,
  };
}
