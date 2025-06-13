import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

const client = new PrismaClient();
const app = express();
app.use(express.json());
