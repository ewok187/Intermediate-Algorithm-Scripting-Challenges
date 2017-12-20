function addTogether() {
  function checkIfNumber (num) {                    // function to check ...
    return Number.isInteger(num) ? num : undefined; // if num is an integer return num, else return undefined
  }

  var a = checkIfNumber(arguments[0]);  // check if arguments are integers
  var b = checkIfNumber(arguments[1]);

  if (arguments.length > 1) {           // if there are more then 1 argument
  return checkIfNumber(a + b);          // check if the sum of both is an integer
} else if (a) {                         // if a is defined...
    return function(newArg) {
      return addTogether(a, newArg);    // add newArg to a
    };
  }
}

addTogether(2, 3);
