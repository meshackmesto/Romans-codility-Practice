function solution(A, B, C, D) {
    const digits = [A, B, C, D];
    const validTimes = new Set();
  
    function isValidTime(hours, minutes) {
      return 0 <= hours && hours < 24 && 0 <= minutes && minutes < 60;
    }
  
    function permute(arr, l, r) {
      if (l === r) {
        const hours = arr[0] * 10 + arr[1];
        const minutes = arr[2] * 10 + arr[3];
        if (isValidTime(hours, minutes)) {
          validTimes.add(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
        }
      } else {
        for (let i = l; i <= r; i++) {
          [arr[l], arr[i]] = [arr[i], arr[l]];
          permute(arr, l + 1, r);
          [arr[l], arr[i]] = [arr[i], arr[l]]; // backtrack
        }
      }
    }
  
    permute(digits, 0, digits.length - 1);
  
    return validTimes.size;
  }
  
  // Test cases
  console.log(solution(1, 8, 3, 2));  // Output: 6
  console.log(solution(2, 3, 3, 2));  // Output: 3
  console.log(solution(6, 2, 4, 7));  // Output: 0