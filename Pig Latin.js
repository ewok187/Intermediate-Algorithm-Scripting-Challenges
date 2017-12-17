function translatePigLatin(str) {
  var letters = str.split("");                            // splits letters into array of characters
  var vowelRegex = /[aeiou]/;                             // variable for vowels

  if (vowelRegex.test(letters[0])) {                      // test if the first letter is a vowel
    return letters.join("") + "way";                      // if its true then combine the letters together and at "way" to the end
  }

  while (true) {                                          // loop as long as the following is true
    if (!vowelRegex.test(letters[0])) {                   // if the the first letter is no vowel
      letters.push(letters.splice(0, 1));                 // splice the first letter and push it to the end of the word
    } else {
      break;
    }
  }

  str = letters.join("") + "ay";                          // combine the letters into a word again and add "ay"

  return str;
}

translatePigLatin("california");
