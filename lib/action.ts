"use server";

import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient().$extends(withAccelerate());

export const create = async (formData: FormData) => {
  const item = formData.get("item") as string;

  await prisma.surgery.create({
    data: {
      item,
    },
  });
  revalidatePath("/");
};

export const getData = async () => {
  const data = await prisma.surgery.findMany();
  return data;
};
