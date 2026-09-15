// Rotate an array to the right by k positions using loops.

let array = [11,3,43,55,26,61,2]
let n =1

for(let j=1;j<=n;j++){
    let tempVal = array[array.length-1]
    for(let i=array.length-2;i>=0;i--){
        array[i+1] = array[i]
    }
    // array[0] = tempVal
    array.unshift(tempVal)   // [2,11,11,43,55,26,61] - because shift is happened ie. element in 0 is copied to 1 so 0 index still holds 11 value
}

console.log(array);

// 1.outer loop controls how many times right shift need to be done 
// 3.last element is stored in tempVal - element value will be erased during shift
// 2.inner loop starts from 2nd last to start of the array
//      - for every outer loop , 
//         i th index value is copied to immediate right element place 
// 3.add tempVal to the 0th index 

