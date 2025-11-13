import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/users", async (_, res) => {
  const users = await prisma.user.findMany({
    where: {
      email: "amara.okafor@example.com",
    },
  });
  res.json(users);
});

app.put("/users", async (_, res) => {
  const updatedUsers = await prisma.user.update({
    where: {
      email: "amara.okafor@example.com",
    },
    data: {
      age: 35,
      isMarried: true,
    },
  });
  res.json(updatedUsers);
});

app.delete("/users", async (_, res) => {
  const deletedUsers = await prisma.user.delete({
    where: {
      email: "liam.oconnor@example.com",
    },
  });
  res.json(deletedUsers);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
