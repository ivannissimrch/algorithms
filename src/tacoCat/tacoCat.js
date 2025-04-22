let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  cash: 0,

  currentInventory: function () {
    let totalValue = 0;
    for (const key in this) {
      if (key !== "cash") {
        for (const taco in this[key]) {
          totalValue =
            totalValue + this[key][taco].cost * this[key][taco].quantity;
        }
      }
    }
    return totalValue;
  },

  sale: function (order) {
    let totalOrder = 0;

    const tacosInOrder = Object.keys(order);
    tacosInOrder.forEach((eachTacoInOrder) => {
      let category = eachTacoInOrder;
      let taco = order[category];
      console.log(taco);
      tacoCatInc[category][taco]["quantity"] =
        tacoCatInc[category][taco]["quantity"] - 1;

      const cost = tacoCatInc[category][taco]["cost"];
      totalOrder += cost;
    });
    this.cash += totalOrder;
    return totalOrder;
  },
};

console.log(tacoCatInc.currentInventory()); // => 1710

let order = {
  gourmetShell: "hard treat shell",
  gourmetFishFilling: "salmon",
};

console.log(tacoCatInc.sale(order)); // => 7
console.log(tacoCatInc.cash);
tacoCatInc.sale(order); // => 7
console.log(tacoCatInc.cash);

console.log(tacoCatInc.gourmetFishFilling.tuna.quantity); // => 98
//  tacoCat.cash; // => 14

console.log(tacoCatInc.currentInventory()); // => 1696
