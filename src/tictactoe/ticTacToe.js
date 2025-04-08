const ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  move: (char, rowNum, colNum) => {
    if (ticTacToe.board[rowNum][colNum] === null) {
      ticTacToe.board[rowNum][colNum] = char;
    }
    console.log("move not allowed");
  },
  clear: function () {
    return (this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  },
};

console.log(ticTacToe.board);
ticTacToe.move("x", 1, 1);
console.log(ticTacToe.board);
ticTacToe.move("y", 2, 2);
console.log(ticTacToe.board);
ticTacToe.move("x", 2, 2);
console.log(ticTacToe.board);
ticTacToe.clear();
console.log("after clear", ticTacToe.board);
