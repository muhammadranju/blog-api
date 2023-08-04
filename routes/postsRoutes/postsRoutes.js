import express from "express";
import posts from "../../controllers/postsController/postsController.js";
import authMiddleware from "../../middleware/authMiddleware/authMiddleware.js";
const router = express.Router();

router.get("/", posts.postGetController);
router.post("/", authMiddleware, posts.postPostController);

export default router;
