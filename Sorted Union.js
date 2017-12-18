function uniteUnique(arr1, arr2, arr3) {

  var placeHold = [];

  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      if (placeHold.indexOf(arguments[i][j]) === -1) {
        placeHold.push(arguments[i][j]);
      }
    }
  }
  return placeHold;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
