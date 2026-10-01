let arr  = [28,5,77,6]

for(let i=0;i<arr.length;i++){
    let sum = 0                            
    for(j=1;j<arr[i];j++){
        if(arr[i]%j==0){            
            sum+=j            
        }
    }
 
    if(arr[i]==sum){
        console.log(arr[i] + " is Perfect Number");
    }
}


// 1. inner for loop iterate the array
// 2. if outer loop element is divisible by the inner loop value
//         -> ie , arr[i]%j==0
//         ->then add j to sum
// 3. if outer loop element and sum are same - perfect number

// op :28 is Perfect Number
//       6 is Perfect Number