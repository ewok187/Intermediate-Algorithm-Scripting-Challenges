function spinalCase(str) {
  var reg = /\s+|_+/g;      // regexp for whitespaces and underscores
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');    // replace lower followed by uppercase with whitespace between them
  return str.replace(reg, "-").toLowerCase();       // return str in lower Case with whitespaces and underscores replaced by "-"
}

spinalCase('This Is Spinal Tap');
