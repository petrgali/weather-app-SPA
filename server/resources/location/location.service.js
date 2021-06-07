import axios from "axios";
import { dbService } from "../../database/database.service.js";
import { WEATHER_API } from "../../common/config.js";
import { extendForecast } from "../../services/extend.js";
import { config } from "dotenv";

config();
export const weather = {
  getRawData: async (location) => {
    try {
      const response = await axios.get(
        `${WEATHER_API}${location}&appid=${process.env.API_KEY}&units=metric`
      );
      return { data: response.data };
    } catch (err) {
      return { data: null, error: err };
    }
  },

  getForecast: async (location) => {
    const forecast = await dbService.read(location);
    if (!forecast) {
      const raw = await weather.getRawData(location);
      if (raw.data) {
        const tempArr = extendForecast(raw.data.list);
        await dbService.create(location, tempArr);
      } else {
        return { payload: null, error: raw.error.message };
      }
    }
    return { payload: await dbService.read(location), error: null };
  },
};
