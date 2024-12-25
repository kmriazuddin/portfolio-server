import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import { AppError } from "../../error/appError";
import bcrypt from "bcrypt";
import { tokenGenerate } from "../../utils/tokenGenerate";

const adminLogin = async (data: { email: string; password: string }) => {
  const admin = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!admin) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Check Your Email 💌");
  }

  if (!(await bcrypt.compare(data.password, admin.password))) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Check Your Password 🔐");
  }

  const token = tokenGenerate({ userEmail: admin?.email, role: admin?.role });

  if (!token) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Something Went Wrong ⚠️");
  }

  return token;
};

export const authService = {
  adminLogin,
};
