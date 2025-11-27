import {Prisma, PrismaClient} from '@prisma/client';

const createPrismaClient = (): PrismaClient => {
  const baseClient = new PrismaClient();

  const softDeleteModels = new Set<Prisma.ModelName>([
    'news_letters',
    'users',
    'images',
    'user_plugins',
    'plugins',
  ]);

  const appendNotDeletedFilter = <T extends {where?: unknown}>(
    model: Prisma.ModelName,
    args: T,
  ): T => {
    if (!softDeleteModels.has(model)) {
      return args;
    }

    const where = (args as any).where || {};

    if (Object.prototype.hasOwnProperty.call(where, 'deleted_at')) {
      return args;
    }

    return {
      ...args,
      where: {
        ...where,
        deleted_at: null,
      },
    };
  };

  const prisma = baseClient.$extends({
    name: 'soft-delete',
    query: {
      $allModels: {
        findFirst({model, args, query}) {
          return query(appendNotDeletedFilter(model, args || {}));
        },
        findMany({model, args, query}) {
          return query(appendNotDeletedFilter(model, args || {}));
        },
        count({model, args, query}) {
          return query(appendNotDeletedFilter(model, args || {}));
        },
        delete({model, args}) {
          if (!softDeleteModels.has(model)) {
            return (baseClient as any)[model].delete(args);
          }

          return (baseClient as any)[model].update({
            ...(args as any),
            data: {
              ...((args as any).data || {}),
              deleted_at: new Date(),
            },
          });
        },
        deleteMany({model, args}) {
          if (!softDeleteModels.has(model)) {
            return (baseClient as any)[model].deleteMany(args);
          }

          return (baseClient as any)[model].updateMany({
            ...(args as any),
            data: {
              ...((args as any).data || {}),
              deleted_at: new Date(),
            },
          });
        },
      },
    },
  });

  // Cast to the base PrismaClient type so downstream usage continues to expose
  // the standard client surface ($on, $transaction, etc.) while keeping the
  // soft-delete behavior applied above.
  return prisma as unknown as PrismaClient;
};

let prismaClient: PrismaClient;

declare global {
  var prisma: PrismaClient;
}

if (process.env.NODE_ENV === 'production') {
  prismaClient = createPrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = createPrismaClient();
  }

  prismaClient = global.prisma;
}

export {prismaClient};
