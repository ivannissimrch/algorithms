function callThemAll(obj, val) {
  // const arrayWithValues = [];
  // for (let property in obj) {
  //   if (typeof obj[property] === "function") {
  //     arrayWithValues.push(obj[property](val));
  //   }
  // }

  // return arrayWithValues;
  const result = Object.values(obj).filter((val) => typeof val === "function");
  const re = result.map((fuc) => fuc(val));

  return re;
}

let addNums = {
  addTen: function (num) {
    return num + 10;
  },

  addTwenty: function (num) {
    return num + 20;
  },

  someProperty: "value",
};

console.log(callThemAll(addNums, 100)); // => [110, 120]
