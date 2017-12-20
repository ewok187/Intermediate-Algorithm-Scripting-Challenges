function sumFibs(num) {
  var fiboArr = [1];              // create array with 1 in it

  for (var i = 1; i <= num;) {    // loop through fiboArr
    fiboArr.push(i);              // push i into fiboarr
    i = fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2]; // i is the sum of the last and second last num in fiboArr
  }
  var oddSum = fiboArr.reduce(function(prev, curr) {  // define oddSum as function that
    if (curr % 2 !== 0)                               // checks if the current num in fiboArr is odd
      return prev + curr;                             // if its odd add it to the previous num
    else return prev;
  });
  return oddSum;
}
sumFibs(10);
