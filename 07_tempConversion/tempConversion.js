const convertToCelsius = function (temperature) {
  return roundToOneDecimal((temperature - 32) * (5 / 9));
};

const convertToFahrenheit = function () {
  return roundToOneDecimal(temperature * (9 / 5) + 32);
};

function roundToOneDecimal(nbr) {
  return Math.round(nbr * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
