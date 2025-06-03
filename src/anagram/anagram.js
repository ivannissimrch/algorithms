function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const firstWordArray = s.split("");
  const secondWordArray = t.split("");

  const firstCharDictionary = {};
  const lastCharDictionary = {};
  firstWordArray.forEach((fWChart) => {
    if (!firstCharDictionary[fWChart]) {
      firstCharDictionary[fWChart] = 1;
    } else {
      firstCharDictionary[fWChart]++;
    }
  });

  secondWordArray.forEach((fWChart) => {
    if (!lastCharDictionary[fWChart]) {
      lastCharDictionary[fWChart] = 1;
    } else {
      lastCharDictionary[fWChart]++;
    }
  });

  const areKeysEquals = Object.keys(firstCharDictionary).every(
    (firstObjectKey) => Object.keys(lastCharDictionary).includes(firstObjectKey)
  );

  const areValuesEquals = Object.keys(firstCharDictionary).every(
    (firstObjectKey) =>
      firstCharDictionary[firstObjectKey] === lastCharDictionary[firstObjectKey]
  );

  return areValuesEquals;
}

console.log(isAnagram("ratt", "tarr"));
