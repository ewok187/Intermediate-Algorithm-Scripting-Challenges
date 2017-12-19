function findElement(arr, func) {
  filterArr = arr.filter(func);     //filter array with the function provided

  return filterArr[0];              //return the first element that returns true, or undefined if no elements return true
}

findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });
