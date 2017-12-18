function convertHTML(str) {
  var placeHold = str.split("");                  // split str into arr of letters

  for (var i = 0; i < placeHold.length; i++) {    // loop through the arr
    switch (placeHold[i]) {
      case "&":                                   // if the loop is on one of the cases replace the character with its html equivalent 
        placeHold[i] = "&amp;";
        break;

      case "<":
        placeHold[i] = "&lt;";
        break;

      case ">":
        placeHold[i] = "&gt;";
        break;

      case '"':
        placeHold[i] = "&quot;";
        break;

      case "'":
        placeHold[i] = "&apos;";
    }
  }
  return placeHold.join("");                      // create a string out of the array
}

convertHTML("Dolce & Gabbana");
