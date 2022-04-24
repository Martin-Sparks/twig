const chunkArray = (myArray, chunkSize) => {
  let index = 0;
  let arrayLength = myArray.length;
  let tempArray = [];

  for (index = 0; index < arrayLength; index += chunkSize) {
    myChunk = myArray.slice(index, index + chunkSize);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
};
// Split in group of 3 items
var result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
console.log(result);
