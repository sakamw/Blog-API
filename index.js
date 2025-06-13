import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

const client = new PrismaClient();
const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("<h1> Welcome to Blog API </h1>");
});

// Create new User
app.post("/users", async (req, res) => {
  try {
    const { firstName, lastName, emailAddress, username } = req.body;
    const newUser = await client.users.create({
      data: { firstName, lastName, emailAddress, username },
    });
    res.status(201).json(newUser);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server Error" });
  }
});

// Get all Users
app.get("/users", async (req, res) => {
  try {
    const users = await client.users.findMany({
      select: {
        firstName: true,
        lastName: true,
        emailAddress: true,
        username: true,
      },
    });
    res.status(200).json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Failed to Fetch Users" });
  }
});

// Port Listener
const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
