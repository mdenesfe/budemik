const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Kodlama" },
        { name: "Matematik" },
        { name: "Bilim" },
        { name: "Bilgisayar" },
        { name: "Pazarlama" },
        { name: "Robotik" },
        { name: "Sinema" },
      ]
    });

    console.log("Başarılı");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();