import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const mockPosts = [
  {
    title: 'Where does it come from?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque lacus dui, id volutpat mauris feugiat eu.',
  },
  {
    title: 'The standard Lorem Ipsum passage, used since the 1500s',
    content:
      'Quisque vel purus nulla. Aenean vehicula quam nisi, quis tempor ligula congue vitae.',
  },
  {
    title: 'Where can I get some?',
    content:
      'Nunc volutpat varius urna non ornare. Curabitur sit amet pharetra libero.',
  },
];

async function main(): Promise<void> {
  await prisma.user.create({
    data: {
      email: `test@gmail.com`,
      name: 'tester',
      posts: {
        create: mockPosts,
      },
    },
  });
}

main()
  .catch((e): void => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
