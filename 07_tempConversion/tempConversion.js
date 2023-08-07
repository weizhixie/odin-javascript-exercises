const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  const roundedTemp = Math.round(celsius * 10) / 10;

  return roundedTemp;
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  const roundedTemp = Math.round(fahrenheit * 10) / 10;

  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
