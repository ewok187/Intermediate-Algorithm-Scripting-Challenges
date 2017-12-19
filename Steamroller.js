function steamrollArray(arr) {
  var flatArray = [];

  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flatArray.push(arg);
    } else {
      for (var a in arg) {
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
