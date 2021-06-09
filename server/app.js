import express from "express";
import path from "path";
import locationRouter from "./resources/location/location.router.js";
import db from "./database/sqlite.js";

const app = express();
const PORT = 4000;
const __dirname = path.resolve();

db.sync();
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
app.use("/api/forecast", locationRouter);
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});
app.listen(PORT, () => {
  process.stdout.write(`\n\nApp is runnig http://localhost:${PORT}\n\n`);
});
