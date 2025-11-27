import {PrismaClient} from '@prisma/client';

const createPrismaClient = (): PrismaClient => {
  const prisma = new PrismaClient();

  // Note: Prisma v5+ removed $use middleware API
  // If soft delete is needed, use Prisma Client Extensions instead
  // See: https://www.prisma.io/docs/concepts/components/prisma-client/client-extensions

  return prisma;
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
