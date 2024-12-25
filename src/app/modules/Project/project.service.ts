import prisma from "../../../shared/prisma";
import { IProject, IProjectUpdate } from "./project.interface";

const project = async (data: IProject) => {
  const result = await prisma.project.create({
    data: { ...data },
  });

  return result;
};

const getAllProject = async () => {
  const result = await prisma.project.findMany();
  return result;
};

const getSingleProject = async (id: string) => {
  const result = await prisma.project.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const projectUpdate = async (id: string, payload: Partial<IProjectUpdate>) => {
  const result = await prisma.project.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

export const projectService = {
  project,
  getAllProject,
  getSingleProject,
  projectUpdate,
};
