const you = {
  name: "Alyssa",
};

const me2 = {
  name: "Tarana",
  getGreeting: (objWithName) =>
    `Hi ${objWithName.name}, my name is ${me2.name}`,
};

console.log(me2.name); // 'Tarana'
console.log(you.name); // 'Alyssa'
console.log(me2.getGreeting(you)); // => 'Hi Alyssa, my name is Tarana.')
