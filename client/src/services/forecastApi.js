export const getForecastData = async (location) => {
  const res = await fetch(`api/forecast/${location}`);
  if (res.status === 200) {
    return res.json();
  }
  throw new Error();
};
