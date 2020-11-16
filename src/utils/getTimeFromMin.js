export default (min) => {
  const hours = Math.trunc(min / 60);
  const minutes = min % 60;
  return {
    hours,
    minutes,
  };
};
