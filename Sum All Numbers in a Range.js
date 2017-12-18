function sumAll(arr) {
  var min = Math.min.apply(null, arr);    // stores minimum num in arr
  var max = Math.max.apply(null, arr);    // stores maximum num in arr
  var result = [];                        // create empty array

  for (i = min; i <= max; i++) {
    result.push(i);                       // loop from min to max and push the numbers in the result array
  }
  return result.reduce((a, x) => a + x);  // add all numbers in result array 
}

sumAll([4, 1, 6, 7]);
