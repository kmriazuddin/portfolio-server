import prisma from "../../../shared/prisma";
import { ISkill, ISkillUpdate } from "./skill.interface";

const skill = async (data: ISkill) => {
  const result = await prisma.skill.create({
    data: { ...data },
  });

  return result;
};

const getAllSkill = async () => {
  const result = await prisma.skill.findMany();
  return result;
};

const getSingleSkill = async (id: string) => {
  const result = await prisma.skill.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const skillUpdate = async (id: string, payload: Partial<ISkillUpdate>) => {
  const result = await prisma.skill.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

export const skillService = {
  skill,
  getAllSkill,
  getSingleSkill,
  skillUpdate,
};
