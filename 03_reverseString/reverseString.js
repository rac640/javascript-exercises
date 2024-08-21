const reverseString = function(string) {
    const myArray = string.split("");

    // Step 2: Start at the end of the Array
    
    // This shows the length of the array, which I will use to start at the last element of the array.  
    let lastLetterInt = myArray.length;
    
    
    
    // Step 3:  Iterate starting from the last to the first.  
    
    
    // Maybe use a global undefined variable and store the values
    let reversedArray = []; 
    
    for (let i = lastLetterInt;  i >= 0; i--){
        // this test seems to work fine, since it logs the text "olleh line-by-line"
        // console.log(text[i]);
    
        // HERE IS WHERE I'M FACING PROBLEMS. Basically, I want to create a new array from the new outputs
        // I want to output [o,l,l,e,h] so that I can convert it to a string again. 
       reversedArray.push(myArray[i]);
       
    //  I finally figured it out after 2 days! Inspired by:  https://stackoverflow.com/questions/12491101/javascript-create-array-from-for-loop
    }
    
    let finalArray = reversedArray.join('');

    // Make sure to return the final output! 
    return finalArray;     
    };









// Do not edit below this line
module.exports = reverseString;
