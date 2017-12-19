function smallestCommons(arr) {

  arr = arr.sort(function(a, b) {
    return a - b;
  });

  var x = true;
  var common = 0;
  var last = arr.length - 1;

  while (x) {
    common += arr[last];
    for (var i = arr[0]; i <= arr[last]; i++) {
      if (common % i !== 0) {
        break;
      } else
      if (i === arr[last]) {
        x = false;
      }
    }
  }
  return common;
}

smallestCommons([1, 3, 1, 17, 5, 2]);
