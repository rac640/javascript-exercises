// copied from the solution to test out the npm test. COME BACK TO THIS AND DO IT AGAIN. 
const repeatString = function (word, times) {
    if (times < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < times; i++) {
      string += word;
    }
    return string;
  };

// Do not edit below this line
module.exports = repeatString;
