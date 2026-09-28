let arr = [2,3,4,2,1,7,54]
let maxDifference = 0
let max = 0
let min = 0

for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        max = Math.max(arr[i],arr[j])
        min = Math.min(arr[i],arr[j])
    }
    if(max-min>maxDifference){
        maxDifference = max-min
    }
}
console.log(maxDifference);

// 1. 1st for loop run from i = 0 to arr.length

// 2. 2nd for loop run from j = i+1 to arr.length
//      -> compare arr[i] and arr[j]
//      -> find max value using Math.max()
//      -> find min value using Math.min()

// 3. if max - min > maxDifference
//      -> update maxDifference = max - min

// 4. After both loops
//      -> print maxDifference

// op : 53