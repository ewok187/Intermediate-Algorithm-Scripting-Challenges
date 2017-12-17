function fearNotLetter(str) {

  for (var i = 0; i < str.length - 1; i++) { // checks for every letter in "str"

    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) { // if the difference between two following charcodes is bigger then 1
      return String.fromCharCode(str.charCodeAt(i) + 1); // returns the letter with +1 gap between last regular charCode
    }
  }
}

fearNotLetter("abce");
