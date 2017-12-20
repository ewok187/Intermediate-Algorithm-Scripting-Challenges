function steamrollArray(arr) {
  var flatArray = [];               // create empty Array

  var flatten = function(arg) {     // create function that
    if (!Array.isArray(arg)) {      // checks if argument is an Array
      flatArray.push(arg);          // if it is, push it into "flatArray"
    } else {
      for (var a in arg) {          // else get the index of arg and push it into "flatArray"
        flatten(arg[a]);
      }
    }
  };

  arr.forEach(flatten); 
  return flatArray;
}

steamrollArray([1, [2],
  [3, [
    [4]
  ]]
]);
