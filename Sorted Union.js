function uniteUnique(arr1, arr2, arr3) {

  var placeHold = [];                                     //creates empty array

  for (var i = 0; i < arguments.length; i++) {            //loop through length of arguments
    for (var j = 0; j < arguments[i].length; j++) {       //loop through current index value of arguments
      if (placeHold.indexOf(arguments[i][j]) === -1) {    //check if array contains the value of arguments
        placeHold.push(arguments[i][j]);                  //add it to the end of placeHold
      }
    }
  }
  return placeHold;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
