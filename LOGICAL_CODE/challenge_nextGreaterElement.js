let arr = [3,8,10,4,7]

for(let i=0;i<arr.length;i++){
    let check = 0
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            arr[i] = arr[j]
            check = 1
            break
        }
    }
    if(check==0){
            arr[i] = -1
        }
}

console.log(arr);