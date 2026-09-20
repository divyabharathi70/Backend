let arr = [3,6,3,2,2,1,7]

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[i]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log(arr);

// 1. outer loop iterate through all the elements in the arr
// 2. inner loop iterate from the outer loop element till the end of arr
//     -> if outerloop element is > inner loop element then swap both - before swap store it in variable (temp) as it lose its value
// 3. at the end of the loop arr will be sorted in ascending order

