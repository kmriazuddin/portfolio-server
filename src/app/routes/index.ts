import express from "express";
import { authRoute } from "../modules/Auth/auth.route";
import { skillRoute } from "../modules/Skill/skill.route";
import { projectRoute } from "../modules/Project/project.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/skill",
    route: skillRoute,
  },
  {
    path: "/project",
    route: projectRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
