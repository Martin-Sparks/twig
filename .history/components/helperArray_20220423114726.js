const chunkArray = (myArray, chunk_size) => {
  let index = 0;
  let arrayLength = myArray.length;
  let tempArray = [];

  for (i = 0; i < arrayLength; i += chunk_size) {
    myChunk = myArray.slice(index, index + chunk_size);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
};
// Split in group of 3 items
var result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
console.log(result);
