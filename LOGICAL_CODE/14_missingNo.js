let arr = [2,5,3,6]
let min = Math.min(...arr)
let max = Math.max(...arr)

for(let i=min; i<=max; i++){
    let found = false
    for(let j=0;j<arr.length;j++){
        if(i == arr[j]){
            found = true
            break
        }
    }
    if(found){
            console.log(i + "is found");
        }
        else{
            console.log(i + "not found");
        }
}

// 1. outer loop iterate from small to bigger element in the array 
// 2. flag is maintained to check whether element is present or not
// 3. inner loop iterate the whole array
//         -> if outer loop i == inner loop element mark found as true and break - as we found a element
// -> if found is true - found 
//  -> else - not found