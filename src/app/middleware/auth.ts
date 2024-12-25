import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import catchAsync from "../../shared/catchAsync";
import { AppError } from "../error/appError";
import httpStatus from "http-status";
import config from "../../config";
import prisma from "../../shared/prisma";

export type TUserRole = "ADMIN";

export const auth = (...userRole: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const tokenData = req.headers.authorization;
    const token = tokenData;

    if (!token) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You Have No Access To This Route! ⛔"
      );
    }

    try {
      const decoded = jwt.verify(
        token,
        config.jwt.jwt_secret as Secret
      ) as JwtPayload;

      const { role, userEmail } = decoded as JwtPayload;

      const user = await prisma.user.findUnique({
        where: { email, userEmail },
      });

      if (!user) {
        throw new AppError(
          httpStatus.UNAUTHORIZED,
          "You Have No Access To This Route! ⛔"
        );
      }

      if (userRole && !userRole.includes(role)) {
        throw new AppError(
          httpStatus.UNAUTHORIZED,
          "You Have No Access To This Route! ⛔"
        );
      }

      req.user = decoded as JwtPayload;

      next();
    } catch (error: any) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You Have No Access To This Route! ⛔"
      );
    }
  });
};
