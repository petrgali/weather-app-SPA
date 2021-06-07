export { reduceTemp, extendForecast };

const reduceTemp = (arr) => {
  return arr.reduce((str, obj) => {
    str += Math.ceil(obj.main.temp);
    str += "-";
    return str;
  }, "");
};

const extendForecast = (arr) => {
  const tempArr = reduceTemp(arr).split("-")
  
  return reduceTemp(arr);
};
