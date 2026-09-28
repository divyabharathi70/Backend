// Find the number of times the value changes from one element to the next by more than 5. - for loop with condition

let arr = [1,55,21,3,7,10]
let min = 0
let max = 0

for(let i=0;i<arr.length-1;i++){
   
    if(arr[i]<arr[i+1]){
        min = arr[i]
        max = arr[i+1]
    }
    else{
        min = arr[i+1]
        max = arr[i]
    }
   
    if(max-min >= 5){
        console.log(arr[i] + " and " +arr[i+1]+ " difference are >= 5");
    }
}

// 1. for loop iterate through the array 
// 2. checking ith and i+1th element - which is bigger and small
//     if i > i+1 -> setting min as i and max as i+1
//     else -> setting min as i+1 and max as i
// 3. if difference between min and max >= 5 print it

// op:
// 1 and 55 difference are >= 5
// 55 and 21 difference are >= 5
// 21 and 3 difference are >= 5