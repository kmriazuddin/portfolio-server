import { NextFunction, Request, Response } from "express";
import { Secret } from "jsonwebtoken";
import { AppError } from "../error/appError";
import httpStatus from "http-status";
import config from "../../config";
import { jwtHelpers } from "../../shared/jwtHelper";

const auth = (...roles: string[]) => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new AppError(
          httpStatus.UNAUTHORIZED,
          "You Are Not Authorized ⛔"
        );
      }

      const verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt.jwt_secret as Secret
      );

      req.user = verifiedUser;

      if (roles.length && !roles.includes(verifiedUser.role)) {
        throw new AppError(httpStatus.FORBIDDEN, "Forbidden Access ⛔");
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
