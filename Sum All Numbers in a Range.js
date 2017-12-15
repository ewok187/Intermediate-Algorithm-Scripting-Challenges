function sumAll(arr) {
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  var result = [];

  for (i = min; i <= max; i++) {
    result.push(i);
  }
  return result.reduce((a, x) => a + x);
}

sumAll([4, 1, 6, 7]);
