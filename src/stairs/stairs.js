function climbStairs(numberOfSteps) {
  let numberOfWaysToClimb = undefined;

  // if (numberOfSteps <= 3) {
  //   numberOfWaysToClimb = numberOfSteps;
  //   return numberOfWaysToClimb;
  // } else {
  let oneSteps = 1;
  let towSteps = 1;

  for (let stepNumber = 0; stepNumber <= numberOfSteps; stepNumber++) {
    let tempVariable = oneSteps;
    oneSteps = oneSteps + towSteps;
    towSteps = tempVariable;
  }

  return oneSteps;
}

console.log(climbStairs(4));
