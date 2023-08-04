import morgan from "morgan";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import preFixRoutes from "../routes/preFixRoutes.js";

const middleware = [
  express.json(),
  express.urlencoded({ extended: false }),
  cors(),
  morgan("dev"),
  cookieParser(),
  preFixRoutes,
];

export default middleware;
