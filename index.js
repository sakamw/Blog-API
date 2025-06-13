import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

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
        id: true,
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

// Get a specific User and Blog Posts by User
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await client.users.findFirst({
      where: { id },
      include: { posts: true },
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Failed to fetch user" });
  }
});

// Create a Post
app.post("/posts", async (req, res) => {
  try {
    const { id, title, content, userId } = req.body;
    const newPost = await client.posts.create({
      data: {
        id,
        title,
        content,
        userId,
      },
    });
    res.status(201).json(newPost);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Failed to create post" });
  }
});

// Get all Posts
app.get("/posts", async (_req, res) => {
  try {
    const posts = await client.posts.findMany({
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            username: true,
          },
        },
      },
    });
    res.status(201).json(posts);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Failed to fetch Posts" });
  }
});

// Get Post by id
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await client.posts.findFirst({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            username: true,
          },
        },
      },
    });
    if (!post) return res.status(404).json({ message: "Post not found!" });
    res.status(202).json(post);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Failed to fetch Post" });
  }
});

// Port Listener
const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
