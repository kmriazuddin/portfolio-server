import { ROLE } from "@prisma/client";
import config from "../../../config";
import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";

const admin = {
  email: config.admin.admin,
  password: config.admin.admin_password,
  role: ROLE.ADMIN,
};

const superAdmin = async () => {
  const hashedPassword = await bcrypt.hash(
    admin.password as string,
    Number(config.saltRound as string)
  );

  try {
    // Check If A Super Admin Already Exists
    const isAdminExists = await prisma.user.findFirst({
      where: { role: ROLE.ADMIN, email: admin.email },
    });

    // Create Admin If Not Exists
    if (!isAdminExists) {
      await prisma.user.create({
        data: { ...admin, password: hashedPassword },
      });
    } else {
      console.log("Admin Already Exists! 🚨");
    }
  } catch (error) {
    console.error("Error 🚨");
  }
};

export default superAdmin;
