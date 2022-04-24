const chunkArray = (myArray, chunkSize) => {
  let index = 0;
  let arrayLength = myArray.length;
  let tempArray = [];

  console.log(arrayLength);

  for (i = 0; i < arrayLength; i += chunkSize) {
    myChunk = myArray.slice(index, index + chunkSize);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
};
// Split in group of 3 items
var result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 5);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
// console.log(result);
