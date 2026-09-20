let arr = [2,2,3]
let res = []

for(let i=0;i<arr.length;i++){
        let product = 1
    for(let j=0;j<arr.length;j++){
        if(i==j){
            continue
        }
        product = product*arr[j]
    }
    res[i] = product
}
console.log(res);

// 1. outer loop iterate through all the element in the array 
// 2. inner loop iterate through all the element but skips the outer loop element
//         -> every inner loop element is multiplied and stored in product 
// 3. after every inner loop execution the calculated product is stored in outer loop element pace which is in index of i

// op:[ 6, 6, 4 ]