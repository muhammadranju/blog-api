import express from "express";

import homeRoutes from "./homeRoutes/homeRoutes.js";
import postsRoutes from "./postsRoutes/postsRoutes.js";
import userRoutes from "./userRoutes/userRoutes.js";
import authRoutes from "./authRoutes/authRoutes.js";

const router = express.Router();

router.get("/", (req, res) => res.redirect("/api/v1/home"));

router.use("/api/v1/home", homeRoutes);
router.use("/api/v1/users", userRoutes);
router.use("/api/v1/posts", postsRoutes);
router.use("/api/v1/auth", authRoutes);

export default router;
