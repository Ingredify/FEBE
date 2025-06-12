const { PrismaClient } = require('../../src/lib/generated/prisma');
const prisma = new PrismaClient();
const process = require('process');
const fs = require('fs');
const path = require('path');

async function main() {
  const filePath = path.join(__dirname, 'seeds-data', 'recipes-all.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const recipes = JSON.parse(jsonData);

  for (const recipe of recipes) {
    await prisma.recipe.create({
      data: {
        name: recipe.name,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        image: recipe.image, // map imageUrl to image field
        foodId: recipe.foodId,
      },
    });
  }

  console.log(`🌱 Seeded ${recipes.length} recipes successfully!`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seeding error:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
