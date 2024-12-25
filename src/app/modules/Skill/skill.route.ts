import express from "express";
import { ROLE } from "@prisma/client";
import auth from "../../middleware/auth";
import { skillController } from "./skill.controller";

const router = express.Router();

router.get("/", auth(ROLE.ADMIN), skillController.getAllSkill);

router.get("/:id", auth(ROLE.ADMIN), skillController.getSingleSkill);

router.post("/create-skill", auth(ROLE.ADMIN), skillController.skill);

router.patch("/:id", auth(ROLE.ADMIN), skillController.skillUpdate);

export const skillRoute = router;
