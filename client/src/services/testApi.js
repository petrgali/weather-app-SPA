export const getMessage = async () => {
  const res = await fetch("api/location");
  if (res.status === 200) {
    return res.json();
  }
  return;
};
