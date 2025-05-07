function isValid(characters) {
  if (characters.length % 2 === 1) {
    return false;
  }

  const stack = [];
  let openParentheses = 0;
  let closingParentheses = 0;

  // const characterMap = {
  //   "(": ")",
  //   "[": "]",
  //   "{": "}",
  // };

  // const lastCharacter = [];

  characters.split("").forEach((char) => {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      openParentheses += 1;
    } else {
      closingParentheses += 1;
      if (char === ")" && stack[stack.length - 1] === "(") {
        stack.pop(stack[stack.length - 1]);
      }
      if (char === "]" && stack[stack.length - 1] === "[") {
        stack.pop(stack[stack.length - 1]);
      }
      if (char === "}" && stack[stack.length - 1] === "{") {
        stack.pop(stack[stack.length - 1]);
      }
    }
  });

  console.log(openParentheses);
  console.log(closingParentheses);
  if (stack.length === 0 && openParentheses === closingParentheses) {
    return true;
  } else {
    return false;
  }
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("([)]"));
console.log(isValid("([}}])"));
