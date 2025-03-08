function compareObjects2(
  object1: Record<string, any>,
  object2: Record<string, any>
) {
  const keys1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (keys1.length !== key2.length) {
    return false;
  }
  const isEquals = keys1.every((key) => object1[key] === object2[key]);

  return isEquals;
}

console.log(compareObjects2({ name: "nick" }, { name: "nick" }));

console.log(compareObjects2({ name: "zeke" }, { name: "zeke", age: 12 }));
