import Router from "express";
import { weather } from "./location.service.js";
import { HTTP } from "../../common/constant.js";

const router = Router();

router.route("/:name").get(async (req, res) => {
  const response = await weather.getForecast(req.params.name);
  response.payload
    ? res.status(HTTP.OK).json({ forecast: response.payload.data })
    : res.status(HTTP.NOT_FOUND).send({ error: response.error });
});

export default router;
