function convertToRoman(num) {
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];                 // create an array for the decimal equivalents of roman numberals. its has to be from biggest to smallest
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];  // create an array for every unique roman numeral
  var converted = "";                                                                   // create an empty string

  for (var idx = 0; idx < decimal.length; idx++) {                                      // loop through "decimal"
    while (decimal[idx] <= num) {                                                       // as long as the decimal number is smaller then the input
      converted += roman[idx];                                                          // add the roman numeral equivalent at the same index to converted
      num -= decimal[idx];                                                              // and subtract the decimal number from the input
    }
  }
  return converted;                                                                     // return the converted now roman numeral 
}
