const groupArrayElements = (myArray, numOfArrays) => {
  const result = [];
  const newArraySize = Math.ceil(myArray.length / numOfArrays);
  for (let i = 0; i < myArray.length; i += newArraySize) {
    result.push(myArray.slice(i, i + newArraySize));
  }
  return result;
};

// Split in group of 3 items
// let result = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3);
let result = groupArrayElements([], 3);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
console.log(result);
