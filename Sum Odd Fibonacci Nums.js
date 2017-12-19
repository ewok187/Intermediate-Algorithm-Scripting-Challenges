function sumFibs(num) {
  var fiboArr = [1];

  for (var i = 1; i <= num;) {
    fiboArr.push(i);
    i = fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2];
  }
  var oddSum = fiboArr.reduce(function(prev, curr) {
    if (curr % 2 !== 0)
      return prev + curr;
    else return prev;
  });
  return oddSum;
}
sumFibs(10);
