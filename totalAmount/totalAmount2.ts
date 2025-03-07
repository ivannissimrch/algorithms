interface Transactions {
  name: string;
  amount: number;
}

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

//solution 1 with reduce()
// function lastFridayNight(transactions: Transactions[]) {
//   const totalAmount = transactions.reduce(
//     (accumulator, current) => accumulator + current.amount,
//     0
//   );

//   return totalAmount;
// }

//solution2 for of loop
function lastFridayNight(transactions: Transactions[]) {
  let totalAmount = 0;

  for (const transaction of transactions) {
    totalAmount += transaction.amount;
  }

  return totalAmount;
}

console.log(lastFridayNight(transactions));
