import express from "express";
import user from "../../controllers/userController/userController.js";
import authMiddleware from "../../middleware/authMiddleware/authMiddleware.js";
const router = express.Router();

router.get("/", authMiddleware, user.userGetController);
router.post("/signup", user.userSignupPostController);
router.post("/login", user.userSignupLoginController);

export default router;
