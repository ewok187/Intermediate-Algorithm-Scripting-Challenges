function convertHTML(str) {
  var placeHold = str.split("");

  for (var i = 0; i < placeHold.length; i++) {
    switch (placeHold[i]) {
      case "&":
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
  return placeHold.join("");
}

convertHTML("Dolce & Gabbana");
