const { PrismaClient } = require('../../src/lib/generated/prisma');
const prisma = new PrismaClient();
const process = require('process');

async function main() {
  const seedOne = await prisma.user.upsert({
    where: { email: 'seed1@gmail.com' },
    update: {},
    create: {
      name: 'Seed User 1',
      email: 'seed1@gmail.com',
      password: 'seed1234',
    },
  });
  const seedTwo = await prisma.user.upsert({
    where: { email: 'seed2@gmail.com' },
    update: {},
    create: {
      name: 'Seed User 2',
      email: 'seed2@gmail.com',
      password: 'seed1234',
    },
  });

  console.log(seedOne, seedTwo);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
