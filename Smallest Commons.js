function smallestCommons(arr) {

  arr = arr.sort(function(a, b) {     // sort arr from small to big
    return a - b;
  });

  var x = true;                       // set "x" to true boolean
  var common = 0;                     // set "common" to 0
  var last = arr.length - 1;          // set "last" to arr.length - 1

  while (x) {                         // while true
    common += arr[last];              // add the last num in the array to common
    for (var i = arr[0]; i <= arr[last]; i++) { // loop through arr
      if (common % i !== 0) {         // break loop if common is not dividable
        break;
      } else
      if (i === arr[last]) {          // if it loop through the whole array
        x = false;                    // set x to false
      }
    }
  }
  return common;
}

smallestCommons([1, 3, 1, 17, 5, 2]);
