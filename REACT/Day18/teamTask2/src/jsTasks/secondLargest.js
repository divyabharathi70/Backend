let arr = [10, 45, 20, 45, 30]
let largest = arr[0]
let second = -Infinity

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        second = largest
        largest = arr[i]
    }
    else if(arr[i]>second && arr[i]<largest){
        second = arr[i]
    }
}

console.log(second);