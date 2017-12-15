function myReplace(str, before, after) {
  var newString = str.replace(before, after);

  if (before === before.charAt(0).toUpperCase() + before.slice(1)) {
    newString = str.replace(before, after.charAt(0).toUpperCase() + after.slice(1));
  } else {
    newString = str.replace(before, after);
  }
  return newString;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
