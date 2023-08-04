import express from "express";
import home from "../../controllers/homeController/homeController.js";

const router = express.Router();

router.get("/", home.homeGetController);

export default router;
