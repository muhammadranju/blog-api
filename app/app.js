import express from "express";
import middleware from "./middleware.js";
const app = express();

app.use(middleware);

export default app;
