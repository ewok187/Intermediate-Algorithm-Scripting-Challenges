function diffArray(arr1, arr2) {
  var newArr = [];                                   //create empty array

  function arrDiff(first, second) {                  //create funtion with 2 args for the arrays
    for (i = 0; i < first.length; i++) {             //loops through the first array and
      if (second.indexOf(first[i]) === -1) {         //if smth is unique to the array
        newArr.push(first[i]);                       //push it to newArr
      }
    }
  }
  arrDiff(arr1, arr2);
  arrDiff(arr2, arr1);
  return newArr;
}
