function printNumbers(number) {
  if (number < 1) {
    return;
  }
  console.log(number);
  printNumbers(number - 1);
}

printNumbers(5);

function sum(number) {
  let total = number + total;
  if (number === 1) {
    return;
  }

  sum(number - 1);
}

sum(5);
