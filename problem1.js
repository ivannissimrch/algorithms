// According to the song, Katy Perry "maxed our credit cards".

// Define a function, `lastFridayNight`, takes an array of transactions.

// `lastFridayNight` should return the total amount she spent last Friday night.

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70,
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92,
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350,
  },
];

function sumTransactions(transactions) {
  let total = 0;

  transactions.forEach((transaction) => {
    total += transaction.amount;
  });

  return total;

  // const result = transactions.reduce(
  //   (sum, current) => sum + current.amount,

  //   0
  // );

  // return result;

  // let total = 0;
  // for (i = 0; i <= transactions.length - 1; i++) {
  //   total += transactions[i].amount;
  // }

  // return total;
} // => 10512

const amountSpend = sumTransactions(transactions);
console.log(amountSpend);
