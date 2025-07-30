function strStr(haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    const substring = haystack.slice(i, i + needle.length);
    if (substring === needle) {
      return i;
    }
  }
  return -1;
}

console.log(strStr("mississippi", "issip"));
