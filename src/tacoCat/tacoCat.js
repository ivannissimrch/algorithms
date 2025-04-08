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
};

tacoCatInc.currentInventory = function () {
  for (const key in this) {
    console.log(key);
  }
};

tacoCatInc.currentInventory(); // => 1710

// let order = {
//   gourmetShell: "hard treat shell",
//   gourmetFishFilling: "salmon",
// };

// tacoCat.Inc.sale(order); // => 7
// tacoCat.Inc.sale(order); // => 7

// tacoCat.gourmetFishFilling.tuna.quantity; // => 98
// tacoCat.cash; // => 14

// tacoCatInc.currentInventory(); // => 1696
