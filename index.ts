import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/users", async (_, res) => {
  const users = await prisma.user.findMany({
    where: {
      OR: [{ nationality: "Nigerian" }, { age: { gte: 30 } }],
    },
  });
  res.json(users);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
