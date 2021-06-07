import Router from "express";
import { weather } from "./location.service.js";

const router = Router();

router.route("/:name").get(async (req, res) => {
  //   const data = await weather.getRawData(req.params.name);
  const data = await weather.getForecastData(req.params.name);
  data ? res.status(200).json(data) : res.status(500).json();
});

export default router;
