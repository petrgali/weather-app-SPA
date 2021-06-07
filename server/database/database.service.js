import { Forecast } from "./sqlite.js";

export const dbService = {
  read: async (location) => {
    const data = await Forecast.findOne({
      where: {
        location: location.toLowerCase(),
      },
    });
    return data;
  },
  create: async (location, data) => {
    try {
      await Forecast.create({
        location: location,
        data: data,
      });
    } catch (err) {
      return err.message;
    }
  },
  update: async (location, data) => {
    try {
      await Forecast.update(
        {
          data,
        },
        {
          where: {
            location: location,
          },
        }
      );
    } catch (err) {
      return err.message;
    }
  },
};
