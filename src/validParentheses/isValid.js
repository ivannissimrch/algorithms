//Solution 1 Working

// function isValid(characters) {
//   if (characters.length % 2 === 1) {
//     return false;
//   }

//   const stack = [];
//   let openParentheses = 0;
//   let closingParentheses = 0;

//   characters.split("").forEach((char) => {
//     if (char === "(" || char === "[" || char === "{") {
//       stack.push(char);
//       openParentheses += 1;
//     } else {
//       closingParentheses += 1;
//       if (char === ")" && stack[stack.length - 1] === "(") {
//         stack.pop(stack[stack.length - 1]);
//       }
//       if (char === "]" && stack[stack.length - 1] === "[") {
//         stack.pop(stack[stack.length - 1]);
//       }
//       if (char === "}" && stack[stack.length - 1] === "{") {
//         stack.pop(stack[stack.length - 1]);
//       }
//     }
//   });

//   if (stack.length === 0 && openParentheses === closingParentheses) {
//     return true;
//   } else {
//     return false;
//   }
// }

//solution 2

function isValid(characters) {
  if (characters.length % 2 === 1) {
    return false;
  }

  const stack = [];
  const characterMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i <= characters.length - 1; i++) {
    console.log("1", stack);
    if (
      characters[i] === "(" ||
      characters[i] === "[" ||
      characters[i] === "{"
    ) {
      stack.push(characters[i]);
      console.log("2", stack);
    }
    //also if array.length is 1
    else if (characterMap[characters[i]] === stack[stack.length - 1]) {
      stack.pop();
      console.log("3", stack);
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("([)]"));
console.log(isValid("([}}])"));
