export const reverseLocation = (location) => {
  if (location) {
    return location.split(",").reverse().join(", ");
  }
};
