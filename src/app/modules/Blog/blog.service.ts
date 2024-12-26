import prisma from "../../../shared/prisma";
import { IBlog } from "./blog.interface";

const blogCreate = async (data: IBlog) => {
  const result = await prisma.blog.create({
    data: { ...data },
  });

  return result;
};

const getAllBlog = async () => {
  const result = await prisma.blog.findMany();
  return result;
};

const getSingleBlog = async (id: string) => {
  const result = await prisma.blog.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const blogUpdate = async (id: string, payload: IBlog) => {
  const result = await prisma.blog.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

export const blogService = {
  blogCreate,
  getAllBlog,
  getSingleBlog,
  blogUpdate,
};
