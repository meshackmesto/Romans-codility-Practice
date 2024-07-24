function solution(A) {
    
    A.sort((a, b) => a - b);

    let rooms = 0;
    let i = 0;
    const N = A.length;
    
    while (i < N) {

        rooms += 1;
        const max_room_size = A[i];
        
        for (let j = 0; j < max_room_size; j++) {
            if (i < N) {
                i += 1;
            }
        }
    }
    
    return rooms;
}

// Example usage
console.log(solution([1, 1, 1, 1, 1]));  // Output: 5
console.log(solution([2, 1, 4]));        // Output: 2
console.log(solution([2, 7, 2, 9, 8]))
console.log(solution([7, 3, 1, 1, 4, 5, 4, 9]))