import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient({});

export const userRegister = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = await prisma.user.create({
      data: { username, email, password },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
