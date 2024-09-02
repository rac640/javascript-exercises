const palindromes = function (str) {

// make the string lowercase, remove the spaces, and remove all the special characters.

let editedString = str.toLowerCase().replace(/ /g,"").replace(/[#!,.]/g,""); 


// step 1: make it into an array 

const originalArray = Array.from(editedString);

// Step 2: make a new array (Shows reverse of originalArray, and compares it)
const newArray = [];

for (let i = originalArray.length-1; i >=0; i--){
    newArray.push(originalArray[i]);
}


// step 3: compare newArray with originalArray: https://www.freecodecamp.org/news/how-to-compare-arrays-in-javascript/ 
if (newArray.toString() === originalArray.toString()) return true;
else return false;

};



// Do not edit below this line
module.exports = palindromes;
