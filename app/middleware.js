import morgan from "morgan";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import preFixRoutes from "../routes/preFixRoutes.js";
import not from "../controllers/notFoundController/notFoundController.js";

const middleware = [
  express.json(),
  express.urlencoded({ extended: false }),
  cors(),
  morgan("dev"),
  cookieParser(),
  preFixRoutes,
  not.notFoundController,
  not.serverProblemController,
];

export default middleware;
