import express from "express";
import { projectController } from "./project.controller";
import auth from "../../middleware/auth";
import { ROLE } from "@prisma/client";

const router = express.Router();

router.get("/", auth(ROLE.ADMIN), projectController.getAllProject);

router.get("/:id", auth(ROLE.ADMIN), projectController.getSingleProject);

router.post("/", auth(ROLE.ADMIN), projectController.project);

router.patch("/:id", auth(ROLE.ADMIN), projectController.projectUpdate);

export const projectRoute = router;
