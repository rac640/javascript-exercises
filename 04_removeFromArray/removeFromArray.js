const removeFromArray = function(arrayList, ...moreArrayValues) {
    // const arrayList = [1,2,3,4];



for (let i = arrayList.length -1; i >=0; i--){
    if (moreArrayValues.includes(arrayList[i])){
        arrayList.splice(i, 1);
    }
}
   return arrayList;
   
           
   };












// Do not edit below this line

module.exports = removeFromArray;
