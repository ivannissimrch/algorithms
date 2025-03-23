export default function dogBreeder(age = 0, name = "Steve") {
  const newDog = {
    name: typeof name === "string" ? name : age,
    age: typeof age === "number" ? age : name,
  };
  return newDog;
}

console.log(dogBreeder(1, "asa", 12));
