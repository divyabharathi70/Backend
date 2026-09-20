let arr1 = [1,2,5,7,7]
let arr2 = [3,5,7,8,43]

for(let i=0; i<arr2.length ;i++){
    arr1[arr1.length] = arr2[i]
}

console.log(arr1);

// 1. for loop iterate through the arr2
// 2. accesing every element in arr2 using that and assigning to the last of arr1 
//          arr1[arr1.length] = arr2[i]
//         -> ie , arr1[arr1.length] = arr1 last index+1
//                 ,arr2[i]  = element of arr2