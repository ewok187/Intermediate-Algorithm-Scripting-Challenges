function myReplace(str, before, after) {
  var newString = str.replace(before, after);                                        // create variable "newString" with before replaced by after

  if (before === before.charAt(0).toUpperCase() + before.slice(1)) {                 // if the first letter of before is in upperCase
    newString = str.replace(before, after.charAt(0).toUpperCase() + after.slice(1)); // replace "before" with an "after" that has a first letter in uppercase too
  }
  return newString;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
