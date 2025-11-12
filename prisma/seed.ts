import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 34,
    isMarried: true,
    nationality: "American",
  },
  {
    name: "Fatima Yusuf",
    email: "fatima.yusuf@example.com",
    age: 29,
    isMarried: false,
    nationality: "Nigerian",
  },
  {
    name: "Carlos Hernandez",
    email: "carlos.hernandez@example.com",
    age: 41,
    isMarried: true,
    nationality: "Mexican",
  },
  {
    name: "Aisha Bello",
    email: "aisha.bello@example.com",
    age: 26,
    isMarried: false,
    nationality: "Nigerian",
  },
  {
    name: "Sophia Chen",
    email: "sophia.chen@example.com",
    age: 32,
    isMarried: false,
    nationality: "Chinese",
  },
  {
    name: "Liam O'Connor",
    email: "liam.oconnor@example.com",
    age: 38,
    isMarried: true,
    nationality: "Irish",
  },
  {
    name: "Amara Okafor",
    email: "amara.okafor@example.com",
    age: 27,
    isMarried: false,
    nationality: "Nigerian",
  },
  {
    name: "Priya Patel",
    email: "priya.patel@example.com",
    age: 35,
    isMarried: true,
    nationality: "Indian",
  },
  {
    name: "Oliver Smith",
    email: "oliver.smith@example.com",
    age: 30,
    isMarried: false,
    nationality: "British",
  },
  {
    name: "Grace Mensah",
    email: "grace.mensah@example.com",
    age: 42,
    isMarried: true,
    nationality: "Ghanaian",
  },
];

async function seed() {
  await prisma.user.createMany({ data: users });
  console.log("✅ 10 users added successfully!");
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
