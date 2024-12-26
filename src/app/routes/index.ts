import express from "express";
import { authRoute } from "../modules/Auth/auth.route";
import { skillRoute } from "../modules/Skill/skill.route";
import { projectRoute } from "../modules/Project/project.route";
import { blogRoute } from "../modules/Blog/blog.route";

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
  {
    path: "/blog",
    route: blogRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
