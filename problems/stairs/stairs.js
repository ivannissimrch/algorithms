function climbStairs(n) {
  if (n <= 2) return n;

  let towStepsBefore = 1; //1 way to reach step n-1
  let oneStepBefore = 2; //2 way to reach step n-2
  let currentWays = 0;

  for (let stepNumber = 3; stepNumber <= n; stepNumber++) {
    currentWays = oneStepBefore + towStepsBefore;
    towStepsBefore = oneStepBefore;
    oneStepBefore = currentWays;
  }

  return oneStepBefore;
}

console.log(climbStairs(4));
