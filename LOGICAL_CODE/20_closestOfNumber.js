let num = 3
let arr = [2,5,4,21,1]
let closest = arr[0]        // assuming 1 st element is closest 
let max                         // needed while subtract - to subtract big num to small num
let min                          // needed while subtract - to subtract big num to small num

for(let i=0;i<arr.length;i++){
    max = Math.max(arr[i],num)
    min = Math.min(arr[i],num)
   if((max-min) < closest){
        closest = arr[i]
   }
}
console.log(closest);

// 1. for loop iterate through the array
//         -> calculate max , min - needed when finding difference
//         -> if the iterating element and number given difference is smaller  -   that element is closest

// op : 1