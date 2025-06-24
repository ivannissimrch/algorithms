function isPalindrome(x) {
  let isValid = false;
  if (x < 0) return isValid;
  isValid = x.toString() === x.toString().split("").reverse("").join("");
  return isValid;
}

console.log("result", isPalindrome(121));
