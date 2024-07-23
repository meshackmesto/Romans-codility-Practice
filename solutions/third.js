function solution(A, B) {
    const setA = new Set(A); 
    let minimal = Infinity; 
    
    for (const value of B) { 
     if (setA.has(value) && value < minimal) {
         minimal = value
     }
    }
    return minimal === Infinity ? -1 : minimal; 
 }
 
 const A1 = [1,3,2,1];
 const B1 = [4,2,5,3,2];
 console.log(solution(A1, B1))
 
 const A2 = [2,1];
 const B2 = [3,3];
 console.log(solution(A2, B2)) 


//  another code !!!

 function minimalValue(A, B) {
    //create set A and B to store unique values
    //iterates through A nd B and adds each unique element to the set
    let setA = new Set(A);
    let setB = new Set(B);

    //console.log(setA)
    //console.log(setB)
    //checks if setB has element x that matches x element in setA
    //therefore intersection contains elements present in set A and setB
    let intersection = [...setA].filter(x => setB.has(x));

    //intersection.length === 0 means there are no matches between set A and setB therefore returning -1
    //otherwise find the min value in the match
    return intersection.length === 0 ? -1 : Math.min(...intersection);
  }
  console.log(minimalValue([100000,99, 57, 32000], [32000, 34, 67, 88, 100000])); //32000
  console.log(minimalValue([1, 3, 2, 1], [4, 2, 5, 3, 2])); //2
  console.log(minimalValue([2, 1], [3, 3])); //-1[]