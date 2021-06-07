import { Forecast } from "./sqlite.js";

export const dbService = {
  getLocationData: async (location) => {
    const data = await Forecast.findOne({
      where: {
        location: location.toLowerCase(),
      },
    });
    return data;
  },
};
