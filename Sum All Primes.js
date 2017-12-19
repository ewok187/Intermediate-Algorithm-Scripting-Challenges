function sumPrimes(num) {
  var primeSum = [];                  //create empty array
  for (var i = 2; i <= num; i++) {    //loop through 2 to num
    for (var j = 2; j <= i; j++) {    //loop through 2 to i
      if (i === j) {                  //if both are the same push i to the array
        primeSum.push(i);
      }
      if (i % j === 0) {              //if true the num is no prime num
        break;
      }
    }
  }
  return primeSum.reduce(function(x, y) {
    return x + y;                      //add all nums in array
  });
}

sumPrimes(10);
