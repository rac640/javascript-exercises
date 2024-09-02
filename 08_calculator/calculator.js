const add = function(numOne, numTwo) {
	addedNumbers = numOne + numTwo; 
  return addedNumbers;
};

const subtract = function(numOne, numTwo) {
	subtractNumbers = numOne - numTwo;
  return subtractNumbers;
};

const sum = function(arrayNumbers) {
  
  if (arrayNumbers.length === 1){
    return parseInt(arrayNumbers);
  }
  
  else{

  
  let newArray = [];

  for (let i = arrayNumbers.length -1; i >= 0; i--){

      newArray.push(arrayNumbers[i]);
  }

  let sum = 0;

  for (i = newArray.length -1 ; i >= 0 ; i-- ){
      sum = sum+newArray[i];
  }
  return sum;

}

};

const multiply = function(arrayToMultiply) {
  if (arrayToMultiply.length === 1){
    return parseInt(arrayToMultiply);
  }
  else {
    let newArray = [];
    for (let i = arrayToMultiply.length -1; i >= 0; i--){
      newArray.push(arrayToMultiply[i]);
    }

    let multiply = 1;

    for (i = newArray.length -1; i >= 0; i -- ){
      multiply = multiply * arrayToMultiply[i];
    }

    return multiply;

  }
  


};

const power = function(baseNumber, exponentNumber) {
	return baseNumber**exponentNumber;
};

const factorial = function(startNumber) {
	if (startNumber === 0 || startNumber === 1){
    return 1;
  }
  else if (startNumber === 2){
    return 2;
  }
  else {
    let multiply = 1;
    for (i = startNumber; i >0; i--){
      multiply = multiply * i;
    }
    return multiply;

  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
