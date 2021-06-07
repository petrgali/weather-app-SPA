import Router from "express";
import { weather } from "./location.service.js";

const router = Router();

router.route("/:name").get(async (req, res) => {
  const { data, error } = await weather.getForecastData(req.params.name);
  data ? res.status(200).json(data) : res.status(500).send(error);
});

export default router;
