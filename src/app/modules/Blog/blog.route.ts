import express from "express";
import { blogController } from "./blog.controller";
import auth from "../../middleware/auth";
import { ROLE } from "@prisma/client";

const router = express.Router();

router.get("/", auth(ROLE.ADMIN), blogController.getAllBlog);

router.get("/:id", auth(ROLE.ADMIN), blogController.getSingleBlog);

router.post("/", auth(ROLE.ADMIN), blogController.blogCreate);

router.patch("/:id", auth(ROLE.ADMIN), blogController.blogUpdate);

export const blogRoute = router;
