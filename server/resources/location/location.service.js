import axios from "axios";
import { dbService } from "../../database/database.service.js";
import { WEATHER_API, API_KEY } from "../../common/config.js";

export const weather = {
  getRawData: async (location) => {
    try {
      const response = await axios.get(
        `${WEATHER_API}${location}&appid=${API_KEY}&units=metric`
      );
      return { data: response.data };
    } catch (err) {
      return { data: null };
    }
  },
  getForecastData: async (location) => {
    const forecast = await dbService.read(location);
    if (!forecast) {
      const raw = await weather.getRawData(location);
      if (!raw) {
        const data = raw.list.reduce((str, obj) => {
          str += Math.ceil(obj.main.temp);
          str += "-";
          return str;
        }, "");
        await dbService.create(location, data);
      } else {
        return { data: null, error: "Bad request" };
      }
    }
    return { data: await dbService.read(location), error: null };
  },
};
