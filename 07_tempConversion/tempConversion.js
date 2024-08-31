const convertToCelsius = function(fahrenheitNumber) {
  // equation of fahrenheit to celsius: (°F - 32) × 5/9;
  let celciusNumber = (fahrenheitNumber - 32) * 5/9;
  let celsiusNumberRounded = Math.round(celciusNumber * 10)/10;
    return celsiusNumberRounded;
};

const convertToFahrenheit = function(celsiusNum) {

  // Fahrenheit = (9/5) °C+32
  let fahrenheitNum = (9/5) * celsiusNum + 32; 
  let fahrenheitNumRounded = Math.round(fahrenheitNum *10)/10;
  return fahrenheitNumRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
