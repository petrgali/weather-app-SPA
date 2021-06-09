const reduceTemp = (arr) => arr.reduce((str, obj) => {
  // eslint-disable-next-line
    str += Math.ceil(obj.main.temp);
  // eslint-disable-next-line
    str += "-";
  return str;
}, '');

const extendForecast = (arr) => {
  const tempArr = reduceTemp(arr).split('-').slice(0, -1).join(',');
  // extend forecast logic must be here
  return tempArr;
};

export { reduceTemp, extendForecast };
