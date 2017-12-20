function truthCheck(collection, pre) {

  return collection.every(obj => obj[pre]);  // check the truthiness of object’s property passed in pre parameter and return true if complete
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
