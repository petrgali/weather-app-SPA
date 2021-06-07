import express from "express";
import locationRouter from "./resources/location/location.router.js";

const app = express();

app.use(express.json());
app.use("/api/location", locationRouter);

export default app;
