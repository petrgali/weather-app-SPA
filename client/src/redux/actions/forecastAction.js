import { UPDATE_FORECAST } from "../types";

export const updateForecast = (data) => ({
  type: UPDATE_FORECAST,
  payload: data,
});
