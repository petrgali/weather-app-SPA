import axios from "axios";
import { dbService } from "../../database/database.service.js";
import { WEATHER_API, API_KEY } from "../../common/config.js";

export const weather = {
  getRawData: async (location) => {
    try {
      const response = await axios.get(
        `${WEATHER_API}${location}&appid=${API_KEY}&units=metric`
      );
      return response.data;
    } catch (err) {
      return "";
    }
  },
  getForecastData: async () => {
    const data = await dbService.getLocationData('moscow');
    console.log(data);
  },
};
