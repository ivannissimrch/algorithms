function printNumbers(number) {
  if (number < 1) {
    return;
  }
  // console.log(number);
  printNumbers(number - 1);
}

printNumbers(5);

function sum(number) {
  if (number === 0) {
    return 0;
  }

  return number + sum(number - 1);
}

console.log(sum(5));
