export const formatter = (number: string | number) => {
  const formattedNumber = parseFloat(number.toString()).toFixed(2);
  return formattedNumber;
};
