const sumAll = function(numOne, numTwo) {


    // TO INCLUDE: If numberOne > numberTwo, do the first one. If numberOne < numberTwo, do the next one. 
    //  If number is negative, then return (ERROR). 
    // this basically creates a new array of numbers, from numberOne to numberTwo. 
    

    // Difficulties with this part since I didn't learn !Number.isInteger(), so I used ChatGPT. 
    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo) || numOne < 0 || numTwo < 0) {
        return 'ERROR';
    }

    
    
    const newArray = []; 
    if (numOne > numTwo){
        for (let i = numOne; i >= numTwo; i--){
        newArray.push(i);
        }
        console.log(newArray);

    }

    else if (numOne < numTwo){
        for (let i = numOne; i <= numTwo; i++){
            newArray.push(i);
            }
            console.log(newArray);
        
    }

    


    // This part sums up the array values from above. 
    
    let sum = 0; 
    for (let i = 0; i <newArray.length; i++){
        sum = sum+newArray[i];
    }
    
    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
