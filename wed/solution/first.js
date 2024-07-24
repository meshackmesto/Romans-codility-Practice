function solution(N) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
  
    //a set should hold 26 lettters that are in the alphabet
    const alphabetSet = Math.floor(N / 26);
  
    //remainder of N values in the letter
    const remainder = N % 26;
  
  
    for (let i = 0; i < alphabetSet; i++) {
      result += alphabet;
    }
  
    result += alphabet.slice(0, remainder);
  
    return result;
  }
  
  console.log(solution(3));
  console.log(solution(5));
  console.log(solution(30));