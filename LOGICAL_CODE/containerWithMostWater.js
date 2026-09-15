let arr = [1,8,6,2,5,4,8,3,7]
let capacity = 0

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        let min 
        if(arr[i]<arr[j]){
            min = arr[i]
        }
        else{
            min = arr[j]
        }

        let base = j-i
        let area = base*min
        if(capacity<area){
            capacity = area
        }
    }
}

console.log(capacity);