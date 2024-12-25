import express from "express";
import { authController } from "./auth.controller";

const router = express.Router();

router.post("/admin-login", authController.adminLogin);

export const authRoute = router;
