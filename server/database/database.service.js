import { Forecast } from './sqlite.js';

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
      return await Forecast.create({
        location,
        data,
      });
    } catch (err) {
      return err.message;
    }
  },
  update: async (location, data) => {
    try {
      return await Forecast.update(
        {
          data,
        },
        {
          where: {
            location,
          },
        },
      );
    } catch (err) {
      return err.message;
    }
  },
};
