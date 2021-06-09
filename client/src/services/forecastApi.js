import { API_URL } from "../common/constant";

export const getForecastData = async (location) => {
  const res = await fetch(`${API_URL}${location}`);
  if (res.status === 200) {
    return res.json();
  }
  throw new Error();
};
