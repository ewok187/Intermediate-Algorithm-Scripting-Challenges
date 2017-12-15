function diffArray(arr1, arr2) {
  var newArr = [];

  function arrDiff(first, second) {
    for (i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }
  arrDiff(arr1, arr2);
  arrDiff(arr2, arr1);
  return newArr;
}
