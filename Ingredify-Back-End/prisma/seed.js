const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const process = require('process');

async function main() {
  const seedOne = await prisma.user.upsert({
    where: { email: 'jonathan@gmail.com' },
    update: {},
    create: {
      name: 'Jonathan',
      email: 'jonathan@gmail.com',
      password: 'password123',
    },
  });

  const seedTwo = await prisma.user.upsert({
    where: { email: 'jonathan2@gmail.com' },
    update: {},
    create: {
      name: 'Jonathan 2',
      email: 'jonathan2@gmail.com',
      password: 'password123',
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
