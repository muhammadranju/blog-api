import dotenv from "dotenv";
dotenv.config();
import http from "http";
import app from "../app/app.js";
import connect from "../config/dbConfig.js";
connect();

const PORT = process.env.PORT || 4040;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
