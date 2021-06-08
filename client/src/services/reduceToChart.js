const calcTimestamp = (interval) => {
  const gap = 3;
  const dayLength = 24;
  return interval * gap > dayLength
    ? ((interval * gap) % dayLength) + ":00"
    : interval * gap + ":00";
};

export const reduceData = (data) => {
  return data.split(",").reduce((arr, value, idx) => {
    let obj = {
      name: calcTimestamp(idx),
      t: value,
    };
    arr.push(obj);
    return arr;
  }, []);
};
