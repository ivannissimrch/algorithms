let watering = [
  {
    Peony: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Rose: [
      { Monday: false },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Hydrangea: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Sunflower: [
      { Monday: true },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

function wateringFlowerCheck(day) {
  const flowersToWater = [];

  for (let i = 0; i < watering.length; i++) {
    const flowerObject = watering[i];
    const flowerName = Object.keys(flowerObject)[0];

    const flowerDayArray = flowerObject[flowerName];
    flowerDayArray.forEach((dayObject) => {
      if (dayObject[day] === true) {
        flowersToWater.push(flowerName);
      }
    });
  }

  return flowersToWater;
}

console.log(wateringFlowerCheck("Tuesday"));
