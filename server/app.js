import express from "express";
import locationRouter from "./resources/location/location.router.js";
import db from "./database/sqlite.js";
const app = express();
const PORT = 4000;

db.sync();

app.use(express.json());
app.use("/api/forecast", locationRouter);

app.listen(PORT, () => {
  console.log(`App is runnig http://localhost:${PORT}`);
});
