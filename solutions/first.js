let balanceA = 0;
let balanceB = 0;
let minBalanceA = 0;
let minBalanceB = 0;

for (let i = 0; i < N; i++) {
  if (R[i] === 'A') {
    balanceA += V[i];
    balanceB -= V[i];
    if (balanceB < 0) {
      minBalanceB = Math.max(minBalanceB, -balanceB);
    }
  } else {
    balanceB += V[i];
    balanceA -= V[i];
    if (balanceA < 0) {
      minBalanceA = Math.max(minBalanceA, -balanceA);
    }
  }
}

return [minBalanceA, minBalanceB];


// Example usage:
console.log(solution("BAABA", [2, 4, 1, 1, 2], 5)); // Output: [2, 4]
console.log(solution("ABAB", [10, 5, 10, 15], 4)); // Output: [0, 15]
console.log(solution("B", [100], 1)); // Output: [100, 0]