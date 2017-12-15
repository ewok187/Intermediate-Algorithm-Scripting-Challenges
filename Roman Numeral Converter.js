function convertToRoman(num) {
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var converted = "";

  for (var idx = 0; idx < decimal.length; idx++) {
    while (decimal[idx] <= num) {
      converted += roman[idx];
      num -= decimal[idx];
    }
  }
  return converted;
}
