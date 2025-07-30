// ### Compare Objects

// Define a function, `compareObjects`, that accepts two objects as arguments.

// `compareObjects` should return true if both objects have exactly the same
// key/value pairs. Otherwise, `compareObjects` should return false. Assume the
// objects are not nested.

function compareObjects(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  console.log(keys1, keys2);
  console.log(keys1.length, keys2.length);
  keys1.forEach((key, idx) => {
    if (object1[key] !== object2[key]) {
      return false;
    }
  });
  keys2.forEach((key, idx) => {
    if (object1[key] !== object2[key]) {
      return false;
    }
  });

  return true;
}

console.log(compareObjects({ name: "nick" }, { name: "nick" }));

console.log(compareObjects({ name: "zeke" }, { name: "zeke", age: 12 }));
