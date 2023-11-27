import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const data = await prisma.campaign.createMany({
    data: [
      {
        owner: 1, // Replace with the actual owner ID
        name: "Palestine Campaign Food Donation by Indonesia Government",
        img: "https://example.com/image1.jpg",
        reached: 0,
        target: 1000,
        deadline: new Date("2023-12-31T23:59:59Z"),
        startFromIdr: 5000.50,
        location: "Location",
        rules: "Dry Food",
        longitude: 112.6048483978392,
        latitude: -7.945503854618612,
        description: "Sample campaign description.",
        specificFood: "Specific food details.",
      },
      {
        owner: 1,
        name: "South Malang Food Donation by FAO UN",
        img: "https://example.com/image1.jpg",
        reached: 500,
        target: 1000,
        deadline: new Date("2023-12-31T23:59:59Z"),
        startFromIdr: 5000.50,
        location: "Sample Location",
        rules: "Dry Food",
        longitude: 112.6094403396728,
        latitude: -7.951284270304239,
        description: "South Malang Food Donation",
        specificFood: "Specific food details.",
      }, {
        owner: 1, // Replace with the actual owner ID
        name: "West Malang Food Donation by FAO UN",
        img: "https://example.com/image1.jpg",
        reached: 90000,
        target: 10000,
        deadline: new Date("2023-12-31T23:59:59Z"),
        startFromIdr: 5000.50,
        location: "Sample Location",
        rules: "Dry Food",
        longitude: 123.456,
        latitude: 789.012,
        description: "West Malang Food Donation by FAO UN",
        specificFood: "Specific food details.",
      }, {

        owner: 1, // Replace with the actual owner ID
        name: "Food Donation For Zero Hunger SDGs",
        img: "https://example.com/image1.jpg",
        reached: 800,
        target: 1000,
        deadline: new Date("2023-12-31T23:59:59Z"),
        startFromIdr: 5000.50,
        location: "Sample Location",
        rules: "Dry Food",
        longitude: 123.456,
        latitude: 789.012,
        description: "Food Donation For Zero Hunger SDGs",
        specificFood: "Specific food details.",
      }
    ]
  })
}


try
{
  await seed();
  await prisma.$disconnect();
} catch (e)
{
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}