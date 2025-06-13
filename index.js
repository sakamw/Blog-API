import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

const client = new PrismaClient();
const app = express();
app.use(express.json());

// Listener
const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
