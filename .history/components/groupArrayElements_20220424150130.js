const groupArrayElements = (array, numberOfarrays) => {
  // initialize results array
  const result = [];
  //nunber of array elements in the array
  const newArraySize = Math.ceil(array.length / numberOfarrays);
  for (let i = 0; i < array.length; i += newArraySize) {
    result.push(array.slice(i, i + newArraySize));
  }
  return result;
};

// Split in group of 3 items
// let result = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3);
let result = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);

console.log(result);

module.exports = groupArrayElements;
