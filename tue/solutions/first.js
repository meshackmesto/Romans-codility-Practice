function solution(A) {
  // Sort the array of guest preferences
  A.sort((a, b) => a - b);

  // Array to track the current occupancy of each room
  let rooms = [];
  
  for (let i = 0; i < A.length; i++) {
    let placed = false;
    // Try to place the guest in an existing room
    for (let j = 0; j < rooms.length; j++) {
      if (rooms[j] < A[i]) {
        rooms[j]++;
        placed = true;
        break;
      }
    }
    // If no suitable room is found, open a new room
    if (!placed) {
      rooms.push(1);
    }
  }
  
  return rooms.length;
}

// Examples
console.log(solution([1, 1, 1, 1, 1])); // 5
console.log(solution([2, 1, 4])); // 2
console.log(solution([2, 7, 2, 9, 8])); // 2
console.log(solution([7, 3, 1, 1, 4, 5, 4, 9])); // 4