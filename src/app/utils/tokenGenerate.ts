import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import config from "../../config";
import { AppError } from "../error/appError";
import httpStatus from "http-status";

export const tokenGenerate = (
  data: { userEmail: string; role: string },
  expireIn = config.jwt.expire_in
) => {
  const token = jwt.sign(data, config.jwt.jwt_secret as Secret, {
    expiresIn: expireIn,
  });
  return token;
};

export const verifyToken = (token: string): JwtPayload => {
  try {
    const decoded = jwt.verify(
      token,
      config.jwt.jwt_secret as Secret
    ) as JwtPayload;

    return decoded;
  } catch (error) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid Or Expired Token ⚠️");
  }
};
