function binaryAgent(str) {

  return str.split(" ").map(function(value) {         // split str into array at every whitespace and map
    return String.fromCharCode(parseInt(value, 2));   // get charcode from the binary nums and return string from them
  }).join("");                                        // turn array into string 

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
