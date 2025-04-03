// const me = {
//   name: "Kat",
//   getGreeting: function () {
//     return `Hi my name is ${this.name}`;
//   },
// };

const me = {
  name: "Kat",
  getGreeting: () => `Hi my name is ${me.name}`,
};

console.log(me.name);
console.log(me.getGreeting());
